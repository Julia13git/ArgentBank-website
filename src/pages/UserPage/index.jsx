import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { accounts } from "../../helpers/accounts";
import Account from "../../components/Account";
import "./userpage.css";
import { useSelector } from "react-redux";
import EditUser from "../../components/EditUser";

function UserPage() {
  if (!localStorage.getItem("token")) {
    window.location.assign("/");
  }

  // Donnees du user connecté
  const user = useSelector((state) => state.userReducer);

  return (
    <>
      <Header />
      <div className="main bg-dark">
        <EditUser />
        {/* <h2 className="sr-only">Accounts</h2> */}
        {accounts.map((account, index) => (
          <Account
            title={account.title}
            amount={account.amount}
            description={account.description}
            key={index}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default UserPage;
