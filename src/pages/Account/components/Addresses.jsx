import { useState } from "react";

import { AddressCard, AddressForm } from "../../../components";
import { useDataContext } from "../../../contexts";
import { addrFormState } from "../../../utils";

export const Addresses = () => {
  const { address } = useDataContext();

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState(addrFormState);

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
          {address.map((address) => (
            <AddressCard
              {...address}
              setFormData={setFormData}
              setShowModal={setShowModal}
              deleteAddress
            >
              <p>{address.name}</p>
            </AddressCard>
          ))}
        </ul>
      )}
      <AddressForm
        showForm={showModal}
        formData={formData}
        setFormData={setFormData}
        closeForm={() => setShowModal(false)}
      />
    </>
  );
};
