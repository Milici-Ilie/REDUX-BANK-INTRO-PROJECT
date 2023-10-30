import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((state) => state.customer.fullName); //🎬🎬[DISPATCHING ACTIONS]🎬🎬here we are creating a variable to separate the <CreateCustomer/> from bellow to the rest of the App, meaning that after the user created his new account this content will be hidden/disappear 🛂🛂[REVEAL/HIDE CONTENT]🛂🛂

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        //🛂🛂[REVEAL/HIDE CONTENT]🛂🛂 here we are creating a ternary operator that checks if the "fullName" is different than the "" empty string or not, if it is than will hide the content because there was created a user and will display the other content, the one from bellow in the <> ... </> fragment 🛂🛂[REVEAL/HIDE CONTENT]🛂🛂
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
