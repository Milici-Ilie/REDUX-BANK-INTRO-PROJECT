import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  //🔄🔄[GETTING STATE TO COMPONENT]🔄🔄
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
} //🔄🔄[GETTING STATE TO COMPONENT]🔄🔄

export default connect(mapStateToProps)(BalanceDisplay); //🔄🔄[GETTING STATE TO COMPONENT]🔄🔄
