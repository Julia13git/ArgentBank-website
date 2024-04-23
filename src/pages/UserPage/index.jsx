import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { accounts } from "../../helpers/accounts";
import Account from "../../components/Account";
import "./userpage.css";

function UserPage() {
  return (
    <>
      <Header />
      <div className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accounts.map((account, index) => (
          <Account
            title={account.title}
            amount={account.amount}
            text={account.text}
            key={index}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default UserPage;
