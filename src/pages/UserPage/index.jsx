import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EditUser from "../../components/EditUser";
import Account from "../../components/Account";
import { accounts } from "../../helpers/accounts";
import "./userpage.css";
import { useSelector } from "react-redux";

function UserPage() {
  const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.assign("/");
    }
  }, [location]);

  // Donnees du user connecté
  const user = useSelector((state) => state.userReducer);

  return (
    <>
      <Header />
      <div className="main bg-dark">
        <EditUser />
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
