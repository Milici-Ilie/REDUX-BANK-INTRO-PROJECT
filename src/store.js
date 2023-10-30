import { combineReducers, createStore } from "redux";

//🀄🀄[CREATING THE REDUCER]🀄🀄

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
}; //🎬🎬[FUNCTIONS RETURNING ACTIONS]🎬🎬credentials for a new user === function actions for this credentials are bellow 👇

function accountReducer(state = initialStateAccount, action) {
  //🀄🀄[CREATING THE REDUCER]🀄🀄 what is different here from "useReducer" from React is that here we include the "initialState" from above 👆 as default state (state=initialState)🀄🀄[CREATING THE REDUCER]🀄🀄
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload }; //here we create from scratch the "...state" where we are adding the current "balance: ..." + the "action" from the "payload"//🀄🀄[CREATING THE REDUCER]🀄🀄 "state" represents the current situation of the app//🀄🀄[CREATING THE REDUCER]🀄🀄 "action" (payload) represents an action that we whant to sent in our app

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload }; //here the state will decrease the balance depending on the withdraw action of the user

    case "account/requestLoan":
      if (state.loan > 0) return state;
      //LATER
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    //here we are including a condition that only if the "loan" is 0, meaning there is no loan, only than the user can "loan" money from the bank, otherwise he can't

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  //by default we set the "state" to the variable "initialStateCustomer"
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      }; // here we are just set the values from the "initialStateCustomer" with actions that we added in this "return", for ex: "fullName: action.payload.etc etc"

    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
}); //🎇🎇[ROOT REDUCER CONNECTIONS]🎇🎇here we renamed the "AccountReducer" and "customerReducer" and connect the Action functions with the root reducer from bellow 👇 "store", "combineReducers" will auttomatically be imported from "redux"

const store = createStore(rootReducer); //🎇🎇[ROOT REDUCER CONNECTIONS]🎇🎇this is the root reducere wich will store the data's from the "rootReducer" from above

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a car" },
// });

// console.log(store.getState()); //here

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
} //🎬🎬[FUNCTIONS RETURNING ACTIONS]🎬🎬

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
} //🎬🎬[FUNCTIONS RETURNING ACTIONS]🎬🎬

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
} //🎬🎬[FUNCTIONS RETURNING ACTIONS]🎬🎬here we implemented the "useReducer" to see the comparison

function payLoan() {
  return { type: "account/payLoan" };
} //🎬🎬[FUNCTIONS RETURNING ACTIONS]🎬🎬

store.dispatch(deposit(500)); //here the "store" is the variable from above and the "dispatch" is connecting the action with the function that we need, in our case we change the value in "deposit"
store.dispatch(withdraw(200)); //here the "store" is the variable from above and the "dispatch" is connecting the action with the function that we need, in our case we change the value in "withdraw"
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a cheap car")); // here we are calling the actions from the function from above
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() }, //🎇🎇[ROOT REDUCER CONNECTIONS]🎇🎇here we are simply returning the current date nicely formated by using the "toISOStrin", the "toISOString" is imported auttomatically
  };
  //🎬🎬[FUNCTIONS RETURNING ACTIONS]🎬🎬the "fullName" and "nationalId" 👆 from (...here...) are from the variable from above named "initialStateCustomer"
}

function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
} //storing the user name

store.dispatch(createCustomer("Milici Ilie", "1122")); //🎇🎇[ROOT REDUCER CONNECTIONS]🎇🎇here we called the function from above "createCustomer" and added the data's inside of the PROPS let's say. we take the info's from the variable "store" from above witch is connect with the rest of reducers functions
store.dispatch(deposit(250)); //🎇🎇[ROOT REDUCER CONNECTIONS]🎇🎇 here we just added 250 money in the account for testing
console.log(store.getState()); // here we logged again the "account" to see the new user account
