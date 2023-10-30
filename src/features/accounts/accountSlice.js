// const initialStateAccount = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
//   isLoading: false, //🔃🔃[LOADING STATE]🔃🔃 also check the "AccountOperations.js" file, we also need to include the "loading" state there
// };

// export default function accountReducer(state = initialStateAccount, action) {
//   //📂📂[STRUCTURING THE FILES]📂📂 here we are "export default" the function to have acces in other files
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       }; //here we create from scratch the "...state" where we are adding the current "balance: ..." + the "action" from the "payload"//🀄🀄[CREATING THE REDUCER]🀄🀄 "state" represents the current situation of the app//🀄🀄[CREATING THE REDUCER]🀄🀄 "action" (payload) represents an action that we whant to sent in our app// === // 🔃🔃[LOADING STATE]🔃🔃 here we add the "isLoading" state and declared it to "false" to hide the "loading" after the deposit action was done 🔃🔃[LOADING STATE]🔃🔃

//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload }; //here the state will decrease the balance depending on the withdraw action of the user

//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       //LATER
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     //here we are including a condition that only if the "loan" is 0, meaning there is no loan, only than the user can "loan" money from the bank, otherwise he can't

//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };

//     case "account/convertingCurrency":
//       return {
//         ...state,
//         isLoading: true,
//       }; //🔃🔃[LOADING STATE]🔃🔃 here we created the condition for our loading state, check also bellow 👇 in the "dispatch" function to see the implementation

//     default:
//       return state;
//   }
// }

// export function deposit(amount, currency) {
//   //⚡⚡[REDUX THUNK & CONVERTING MONEY]⚡⚡
//   if (currency === "USD") return { type: "account/deposit", payload: amount };

//   return async function (dispatch, getState) {
//     dispatch({ type: "account/convertingCurrency" }); //🔃🔃[LOADING STATE]🔃🔃we create a loading state here to let the user know that there is loading the data's from the API🔃🔃[LOADING STATE]🔃🔃

//     //API call
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     ); //here we copyed the link from the "frankfurter" site and included the 2 props from above ///// ASYNCHRONOUS FUNCTIONS
//     const data = await res.json();
//     // console.log(data);
//     const converted = data.rates.USD;

//     dispatch({ type: "account/deposit", payload: converted }); //⚡⚡[REDUX THUNK & CONVERTING MONEY]⚡⚡here we are calling the "converted" variable and connect the action of converting the money with our content/display section where we see how much is 100 USD in EUR, or another money. Using the result from the API and display it on the app content
//   };
// } //📂📂[STRUCTURING THE FILES]📂📂 exporting those functions to use them inside of another files// === /// ⚡⚡[REDUX THUNK & CONVERTING MONEY]⚡⚡ we included the "currency" to have the possibility of converting the money, ❗❗ also go and check the "AccountOperation.js" file, there we included the "currency" inside of the "dispatch" from the "handleDeposit()" function. ❗ the "ternary operator" will check if the "currency" is equal to "USD" than return default/"usd"

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// } //📂📂[STRUCTURING THE FILES]📂📂 exporting those functions to use them inside of another files

// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// } //📂📂[STRUCTURING THE FILES]📂📂 exporting those functions to use them inside of another files

// export function payLoan() {
//   return { type: "account/payLoan" };
// } //📂📂[STRUCTURING THE FILES]📂📂 exporting those functions to use them inside of another files
