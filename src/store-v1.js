import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk"; //⚡⚡[REDUX THUNK & CONVERTING MONEY]⚡⚡
import { composeWithDevTools } from "redux-devtools-extension"; //🔧🔧[REDUX DEVTOOLS]🔧🔧 importing the tools for redux

import accountReducer from "./features/accounts/accountSlice2";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) //🔧🔧[REDUX DEVTOOLS]🔧🔧 here we need to include the "applyMiddleware" inside of the "composeWithDevTools" like we did it up 👆 🔧🔧[REDUX DEVTOOLS]🔧🔧
); //⚡⚡[REDUX THUNK & CONVERTING MONEY]⚡⚡ here we must include the "applyMiddleware"  hook in the "store" variable, this will be auttomatically be imported by React, check above, and also we must include the "thunk" inside of the function////=== now we must include also the "currency" inside of  our "deposit" function from "accountSlice.js" file ....also go and check the "AccountOperation.js" file ⚡⚡[REDUX THUNK & CONVERTING MONEY]⚡⚡

export default store; //📂📂[STRUCTURING THE FILES]📂📂here we are exporting the "store" itself because we want to use the data's from here, meaning the "store" variable from bellow/// go and check the "index.js" file to see the connection
