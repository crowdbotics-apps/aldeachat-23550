import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn21188028Reducer from '../features/SignIn21188028/redux/reducers'
import SignUp22188027Reducer from '../features/SignUp22188027/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn21188028: SignIn21188028Reducer,
SignUp22188027: SignUp22188027Reducer,

});