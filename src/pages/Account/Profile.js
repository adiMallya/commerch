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
      <div className="vertical-middle display-flex-column">
        <h3 className="page-heading">My Account</h3>
        <main className="tabs">
          <section className="tab">
            <div className="profile">
              <h4 className="tab--header">Profile</h4>
              <div className="profile-details">
                <div className="row">
                  <span role="label">Name</span>
                  <span>{`${firstName} ${lastName}`}</span>
                </div>
                <div className="row">
                  <span role="label">Email</span>
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
