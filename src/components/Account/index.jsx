import React from "react";
import "./account.css";

function Account(children) {
  return (
    <div className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{children.title}</h3>
        <p className="account-amount">{children.amount}</p>
        <p className="account-amount-description">{children.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </div>
  );
}

export default Account;
