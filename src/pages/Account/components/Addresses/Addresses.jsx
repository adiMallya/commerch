import { useState } from "react";
import { useAuthContext, useDataContext } from "../../../../contexts";
import { removeAddress } from "../../../../services";
import { addrFormState } from "../../../../utils";
import { AddressForm } from "./AddressForm";
import "./Address.css";

export const Addresses = () => {
  const { token } = useAuthContext();
  const { address, dispatch } = useDataContext();

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState(addrFormState);

  const editHandler = (_id, name, street, city, state, pincode, phno) => {
    setShowModal(true);
    setFormData(form => ({
      ...form,
      _id,
      name,
      street,
      city,
      state,
      pincode,
      phno
    }));
  };

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
          {address.map((address) => {
            const { _id, name, street, city, state, pincode, phno } = address;
            return (
              <li key={_id} className="address__container">
                <div className="address-header">
                  <p>{name}</p>
                </div>
                <div>
                  <p>{`${street},`}</p>
                  <p>{`${city} - ${pincode}, ${state}`}</p>
                  <p>Mobile: {`+91 ${phno}`}</p>
                </div>
                <div className="cta-container">
                  <button
                    className="btn btn--secondary-outline"
                    onClick={() => removeAddress(_id, token, dispatch)}
                  >
                    Remove
                  </button>
                  <button
                    className="btn btn--primary-solid"
                    onClick={() => editHandler(_id, name, street, city, state, pincode, phno)}
                  >
                    Edit
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}
      <AddressForm showForm={showModal} formData={formData} setFormData={setFormData} closeForm={() => setShowModal(false)} />
    </>
  );
};
