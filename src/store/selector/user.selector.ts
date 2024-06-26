import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserState } from "../reducer/user.reducer";

export const selectUser = (state: AppState) => state.users; 

export const selectUserStoreList = createSelector(
    selectUser, 
    (state: UserState) => state.users
);
export const selectCurrentUserStore = createSelector(
    selectUser, 
    (state: UserState) => state.currentUser
);