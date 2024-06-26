import { EntityState,EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import * as ActionsUser from '../action/user.action';
import { IUser } from "src/app/core/interfaces/user";

export interface UserState extends EntityState<IUser> {
    load: boolean;
    users: IUser[];
    currentUser: IUser;
}

export function selectUserId(a: IUser): string {
    //In this case this would be optional since primary key is id
    return a.id;
  }
  
  export function sortByTitle(a: IUser, b: IUser): number {
    return a.firstname.localeCompare(b.firstname);
  }
  export const adaptater: EntityAdapter<IUser> = createEntityAdapter<IUser>({
    selectId: selectUserId,
    sortComparer: sortByTitle,
  });


  //end sort
  export const initialState : UserState = adaptater.getInitialState({
    load: false,
    users: [],
    currentUser: {} as IUser,
})

export const userReducer = createReducer(
    initialState,
    on(ActionsUser.loadingUsers, (state) => ({...state, load: true})),
    on(ActionsUser.loadedUsers, (state) => ({...state, load: false})),
    on(ActionsUser.loadUsers, (state) => {
      // does not need define this event handler
     
      return {...state};
    }),
    on(ActionsUser.addUsers, (state, listUser: any) => ({
        ...state,
        songs: [...state.users, listUser.users],
      })),
    on(ActionsUser.setUsers, (state, listUser: any) => {
      const elm = localStorage.getItem('user');
      let user = {} as IUser;
      if (elm) {
        const userJson = JSON.parse(elm);
        const filterList = listUser.users.filter((elm : IUser) => elm.id == userJson.id);
        if (filterList.length > 0) {
          user = filterList[0];
        }
      }
      return {
      ...state,
      currentUser: user,
      users: listUser.users,
    }}),
    on(ActionsUser.setCurrentUser, (state, user: any) => {
        return {
        ...state,
        currentUser: user,
      }}),
    );


// recupération
export const { selectAll } = adaptater.getSelectors();