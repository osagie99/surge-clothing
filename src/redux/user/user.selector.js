import { createSelector } from "reselect";
// Pull in the slice of the state we need from the whole state
const selectUser = (state) => state.user

// Select the slice we need from the user state
// aND Pick what we want to return from the slice

export const selectCurrentUser = createSelector([selectUser], user => user.currentUser);