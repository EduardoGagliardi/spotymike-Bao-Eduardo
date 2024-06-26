import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/core/interfaces/user';



export const GET_PRE_USER_TYPES = {
    GET_USER : 'GET_USERS_FROM_API',
    ADD_USER : 'ADD_USERS',
    SET_USER : 'SET_USERS',
    LOADING_USER : 'LOADING_USER',
    LOADED_USER : 'LOADED_USER',
    SET_CURRENT_USER : 'SET_CURRENT_USER'
};

export const loadUsers = createAction(GET_PRE_USER_TYPES.GET_USER);
export const addUsers = createAction(GET_PRE_USER_TYPES.ADD_USER, props<{ users: IUser[] }>());
export const setUsers = createAction(GET_PRE_USER_TYPES.SET_USER, props<{ users: IUser[] }>());
export const loadingUsers = createAction(GET_PRE_USER_TYPES.LOADING_USER);
export const loadedUsers = createAction(GET_PRE_USER_TYPES.LOADED_USER);
export const setCurrentUser = createAction(GET_PRE_USER_TYPES.SET_CURRENT_USER, props<{ user: IUser | null}>());