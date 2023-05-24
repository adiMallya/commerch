import { useEffect } from "react";
import "./Account.css";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { Addresses } from "./components/Addresses/Addresses";

export function Account() {
  useEffect(() => {
    document.title = "commerch | account";
  }, []);
  return (
    <div className="page">
      <div className="account__container">
        <h3 className="page-heading">My Account</h3>
        <main className="tabs">
          <section className="tab">
            <span className="tab--header" role="heading">
              Profile Details
            </span>
            <UserProfile />
          </section>
          <section className="tab">
            <span className="tab--header" role="heading">
              Saved Addresses
            </span>
            <Addresses />
          </section>
        </main>
      </div>
    </div>
  );
}
