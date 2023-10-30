import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice2"; // 💰💰[DEPOSIT, WITHDRAW, LOAN, PURPOSE, P. BACK]💰💰
// import { withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  //////////////////////////// variables ////////////////////////////////
  const dispatch = useDispatch(); //💰💰[DEPOSIT, WITHDRAW, LOAN, PURPOSE, P. BACK]💰💰 here we are calling the "useDispatch" hook from the react-redux to make action i the funtions from bellow 🔽
  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    balance,
    isLoading, //🔃🔃[LOADING STATE]🔃🔃 we also added the "loading" state here to destructur it //===// also check down the "button" 🔃🔃[LOADING STATE]🔃🔃
  } = useSelector((store) => store.account); //💰💰[DEPOSIT, WITHDRAW, LOAN, PURPOSE, P. BACK]💰💰here we are reading the deposit/info's that the user is sent to the App/// also we are destructuring the "account" variable
  console.log(balance);
  //////////////////////////// variables ////////////////////////////////

  //////////////////////////// functions /////////////////////////////////
  function handleDeposit() {
    if (!depositAmount) return; //here we are returning the default content if there is no action

    dispatch(deposit(depositAmount, currency)); //💰💰[DEPOSIT, WITHDRAW, LOAN, PURPOSE, P. BACK]💰💰"deposit" is coming from the "import --- "accountSlice"" from above. In the file "accountSlice.js" is a function named "deposit" wich take care of the amount in the account/deposit ==== we remove this "dispatch" to implement the Redux TOOLKIT RTK, the notes are stll available for the lesson that is specified inside of [...here...]
    // dispatch(deposit(depositAmount));
    setDepositAmount("");
    setCurrency("USD"); //⚡⚡[REDUX THUNK & CONVERTING MONEY]⚡⚡ here we needed to add the "currency" inside of the (deposit(... here...)) and than to call by default the 2 actions after the user is making some action in the Deposit, meaning that 2 fiels will remain empty after the user action
  }

  function handleWithdrawal() {
    //💰💰[DEPOSIT, WITHDRAW, LOAN, PURPOSE, P. BACK]💰💰
    if (!withdrawalAmount) return;

    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    //💰💰[DEPOSIT, WITHDRAW, LOAN, PURPOSE, P. BACK]💰💰
    if (!loanAmount || !loanPurpose) return;

    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    //💰💰[DEPOSIT, WITHDRAW, LOAN, PURPOSE, P. BACK]💰💰
    dispatch(payLoan()); // when the user click will return the money==== also check the "BUTTON" "PAY LOAN" from bellow
  }
  //////////////////////////// functions /////////////////////////////////

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit} disabled={isLoading}>
            {isLoading ? "Converting..." : ` Deposit ${depositAmount}`}
            {/* 🔃🔃[LOADING STATE]🔃🔃 here we created a responsive button that will change the content deppending on the boolean answer of the "isLoading" true or false 🔃🔃[LOADING STATE]🔃🔃 */}
          </button>
          {/* 🔃🔃[LOADING STATE]🔃🔃 here we added "disabled" and sett it to "isLoading", when the disabled will be "true" the user will not be able any more to click the button 🔃🔃[LOADING STATE]🔃🔃 */}
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        {currentLoan > 0 && (
          <div>
            <span>
              Pay back ${currentLoan} ({currentLoanPurpose})
              {/* 💰💰[DEPOSIT, WITHDRAW, LOAN, PURPOSE, P. BACK]💰💰 check the "Pay back..." paragraph from the App to see the result of calling those functions  ==== also here is a ternary operator that will check if there is a Loan, if not than this content will not be displayed */}
            </span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
