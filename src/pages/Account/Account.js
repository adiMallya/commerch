import { useEffect, useState } from "react";
import "./Account.css";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { Addresses } from "./components/Addresses/Addresses";

export function Account() {
  const [selectTab, setSelectTab] = useState(true);

  useEffect(() => {
    document.title = "commerch | account";
  }, []);
  return (
    <div className="page">
      <div className="account__container">
        <h3 className="page-heading">My Account</h3>
        <main className="tabs">
          <input
            type="radio"
            id="profile"
            className="tabs"
            checked={selectTab}
            onChange={() => setSelectTab(true)}
          />
          <label htmlFor="profile">Overview</label>
          <section className="tab">
            <span className="tab--header" role="heading">
              Profile Details
            </span>
            <UserProfile />
          </section>
          <input
            type="radio"
            id="address"
            className="tabs"
            checked={!selectTab}
            onChange={() => setSelectTab(!selectTab)}
          />
          <label htmlFor="address">Saved Addresses</label>
          <section className="tab">
            <span className="tab--header" role="heading">
              My Addresses
            </span>
            <Addresses />
          </section>
        </main>
      </div>
    </div>
  );
}
