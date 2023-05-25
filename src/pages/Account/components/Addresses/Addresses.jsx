import { useState } from "react";
import { useAuthContext, useDataContext } from "../../../../contexts";
import { removeAddress } from "../../../../services";
import { AddressForm } from "./AddressForm";
import "./Address.css";

export const Addresses = () => {
  const {
    user: { token },
  } = useAuthContext();
  const { address, dispatch } = useDataContext();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="btn btn--primary-outline"
        onClick={() => setShowModal(true)}
      >
        + Add New Address
      </button>
      {address && (
        <ul className="list list--style-none">
          {address.map(({ _id, name, street, city, state, pincode, phno }) => (
            <li key={_id} className="address__container">
              <div className="address-header">
                <p>{name}</p>
              </div>
              <div>
                <p>{`${street},`}</p>
                <p>{`${city} - ${pincode}, ${state}`}</p>
                <p>Mobile: {`+91 ${phno}`}</p>
              </div>
              <div className="display-flex">
                <button
                  className="btn btn--secondary-outline"
                  onClick={() => removeAddress(_id, token, dispatch)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <AddressForm showForm={showModal} closeForm={() => setShowModal(false)} />
    </>
  );
};
