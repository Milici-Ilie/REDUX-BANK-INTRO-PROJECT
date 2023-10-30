const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
}; //🎬🎬[FUNCTIONS RETURNING ACTIONS]🎬🎬credentials for a new user === function actions for this credentials are bellow 👇
export default function customerReducer(state = initialStateCustomer, action) {
  //by default we set the "state" to the variable "initialStateCustomer"
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      }; // 📂📂[STRUCTURING THE FILES]📂📂 here we are "export default" the function to have acces in other files

    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() }, //🎇🎇[ROOT REDUCER CONNECTIONS]🎇🎇here we are simply returning the current date nicely formated by using the "toISOStrin", the "toISOString" is imported auttomatically
  };
  //📂📂[STRUCTURING THE FILES]📂📂 here we are "export default" the function to have acces in other files
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
} //storing the user name 📂📂[STRUCTURING THE FILES]📂📂 here we are "export default" the function to have acces in other files
