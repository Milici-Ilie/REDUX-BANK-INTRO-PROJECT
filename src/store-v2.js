import { configureStore } from "@reduxjs/toolkit"; //🔐🔐[REDUX TOOLKIT (RTK)]🔐🔐 here we are importing the RTK

// import accountReducer from "./features/accounts/accountSlice";
import accountReducer from "./features/accounts/accountSlice2";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
}); //🔐🔐[REDUX TOOLKIT (RTK)]🔐🔐 now all we need it to do is just create the variable "store" and call our 2 reducer, comparing with the old Redux, check the "store-v1.js" file to see the old implementation 🔐🔐[REDUX TOOLKIT (RTK)]🔐🔐

export default store; //📂📂[STRUCTURING THE FILES]📂📂here we are exporting the "store" itself because we want to use the data's from here, meaning the "store" variable from bellow/// go and check the "index.js" file to see the connection
