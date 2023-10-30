import { createSlice } from "@reduxjs/toolkit"; //🍰🍰[REDUX (RTK) ACCOUNT SLICE]🍰🍰importing the toolkit from redux

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState, // initialState=initialState (so we can let it simple just as "initialState")
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload; //🍰🍰[REDUX (RTK) ACCOUNT SLICE]🍰🍰 this is our first action, the "deposit", compare this code using RTK with the old REDUX from "accountSlice.js" original file 🍰🍰[REDUX (RTK) ACCOUNT SLICE]🍰🍰
      state.isLoading = false;
    },

    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      }, //🍰🍰[REDUX (RTK) ACCOUNT SLICE]🍰🍰

      reducer(state, action) {
        if (state.loan > 0) return; // 🍰🍰[REDUX (RTK) ACCOUNT SLICE]🍰🍰 this "if" condition will check if the user was already did a "loan" from the bank. If so than the function will "return" the "state"/ function  and the user will not be able any more to do another "loan" at the bank

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },

    payLoan(state) {
      state.balance = state.balance - state.loan; //🍰🍰[REDUX (RTK) ACCOUNT SLICE]🍰🍰will reset the "requestLoan" to default/empty, no debt, no taxes
      state.loan = 0;
      state.loanPurpose = "";
    },

    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

console.log(accountSlice);

export const { payLoan, requestLoan, withdraw } = accountSlice.actions; //🍰🍰[REDUX (RTK) ACCOUNT SLICE]🍰🍰 here we destructured the actions from the "accountSlice" variable, to see the entire variable "console.log" the "accountSlice" variable for more info's and see how is works 🍰🍰[REDUX (RTK) ACCOUNT SLICE]🍰🍰

export function deposit(amount, currency) {
  //🧻🧻[THUNKS]🧻🧻
  //⚡⚡[REDUX THUNK & CONVERTING MONEY]⚡⚡
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" }); //🔃🔃[LOADING STATE]🔃🔃we create a loading state here to let the user know that there is loading the data's from the API🔃🔃[LOADING STATE]🔃🔃

    //API call
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    ); //here we copyed the link from the "frankfurter" site and included the 2 props from above ///// ASYNCHRONOUS FUNCTIONS
    const data = await res.json();
    // console.log(data);
    const converted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted }); //⚡⚡[REDUX THUNK & CONVERTING MONEY]⚡⚡here we are calling the "converted" variable and connect the action of converting the money with our content/display section where we see how much is 100 USD in EUR, or another money. Using the result from the API and display it on the app content
  };
}

export default accountSlice.reducer;
