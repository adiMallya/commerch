import { useEffect } from "react";
import "./Account.css";
import { useAuthContext } from "../../contexts";

export function Profile() {
  const {
    user: { user, token },
    logOutUser,
  } = useAuthContext();

  const { firstName, lastName, email } = user;

  useEffect(() => {
    document.title = "commerch | account";
  }, []);
  return (
    <div className="page">
      <div className="account__container">
        <h3 className="page-heading">My Account</h3>
        <main className="tabs">
          <section className="tab">
            <div className="profile">
              <span className="tab--header" role="heading">
                Profile Details
              </span>
              <div className="profile-details">
                <div className="col">
                  <span role="label">Name</span>
                  <span role="label">Email</span>
                </div>
                <div className="col">
                  <span>{`${firstName} ${lastName}`}</span>
                  <span>{email}</span>
                </div>
              </div>
              <button
                className="btn btn--secondary-outline"
                onClick={logOutUser}
              >
                Log Out
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
