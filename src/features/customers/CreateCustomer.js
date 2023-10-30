import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch(); //🎬🎬[DISPATCHING ACTIONS]🎬🎬 here we importing the "useDispatch" hook from "React-redux" that has the meanin of a "dispatch" in the exact way like the "dispatch" that we used in the "useReducer" 🎬🎬[DISPATCHING ACTIONS]🎬🎬

  function handleClick() {
    if (!fullName || !nationalId) return; // if there is no "name" and no "narionalID" than just return nothing/empty, otherwise return the function from bellow
    dispatch(createCustomer(fullName, nationalId)); //🎬🎬[DISPATCHING ACTIONS]🎬🎬 here we must use the actions from our "createCustomer" and "updateName" functions from the "customerSlice.js" file to take info's from tham === now when we will write our name insite of the "input field" will render the function "Customer" from the "Customer.js" file where we created the variable "customer" that will include the user name=== /// after we created the "customer" we want to hide the content/input field with "Create new customer", so go and check the "App.js" file to see how to do it...
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
