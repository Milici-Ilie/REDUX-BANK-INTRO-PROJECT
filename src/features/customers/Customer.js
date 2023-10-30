import { useSelector } from "react-redux"; //📖📖[CONECTING REDUX WITH REACT]📖📖 this "useSelector" create the connection between the "react" and "redux"

function Customer() {
  const customer = useSelector((store) => store.customer.fullName); //📖📖[CONECTING REDUX WITH REACT]📖📖 function "useSelector" is taking as an argument the entire "store" from "store-v1.js" file where we created the variable "store" according the "rootReducer" where we find the "customer" and the "account"
  // console.log(customer);

  return <h2>👋 Welcome, {customer}</h2>; //📖📖[CONECTING REDUX WITH REACT]📖📖 here we are calling the variable "customer" from above 👆 wich is inside of the function "Customer"
}

export default Customer;
