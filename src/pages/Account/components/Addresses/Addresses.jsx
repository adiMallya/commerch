import { useState } from "react";
import { useAuthContext, useDataContext } from "../../../../contexts";
import { removeAddress } from "../../../../services";
import { AddressForm } from "./AddressForm";

export const Addresses = () => {
  const {
    user: { token },
  } = useAuthContext();
  const { address, dispatch } = useDataContext();

  const [showModal, setShowModal] = useState(false);

  const addNewBtnHandler = () => setShowModal(true);

  return (
    <>
      {address && (
        <ul className="list list--style-none">
          {address.map(({ _id, name, street, city, state, pincode, phno }) => (
            <li key={_id} className="address__container">
              <p>{name}</p>
              <div>
                <p>{`${street},`}</p>
                <p>{`${city} - ${pincode}, ${state}`}</p>
                <p>Mobile: {`+91 ${phno}`}</p>
              </div>
              <div className="">
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
      <button className="btn btn--primary-outline" onClick={addNewBtnHandler}>
        + Add New Address
      </button>
      <AddressForm showForm={showModal} closeForm={() => setShowModal(false)} />
    </>
  );
};
