import { useState } from "react";

import { Modal, AddressCard, AddressForm } from "../../../components";
import { useDataContext, useOrderContext } from "../../../contexts";
import { ACTION_TYPE, addrFormState } from "../../../utils";

export const AddressModal = ({ showForm, closeForm }) => {
  const { address } = useDataContext();
  const { dispatch: orderDispatch } = useOrderContext();

  const [showEditForm, setShowEditForm] = useState(false);
  const [addrForm, setAddrForm] = useState(addrFormState);

  const [selectedAddr, setSelectedAddr] = useState({});

  const applyHandler = () => {
    orderDispatch({ type: ACTION_TYPE.ORDER_ADDRESS, payload: selectedAddr });
    closeForm();
  };

  return (
    <>
      <Modal
        title="Select Delivery Address"
        show={showForm}
        closeModal={closeForm}
      >
        <div className="modal-body">
          {address && (
            <ul className="list list--style-none">
              {address.map((addr) => (
                <AddressCard
                  {...addr}
                  setShowModal={setShowEditForm}
                  setFormData={setAddrForm}
                >
                  <div>
                    <input
                      type="radio"
                      name="select-address"
                      className="select-addr"
                      onChange={() => setSelectedAddr(addr)}
                    />
                    <label htmlFor="select-address" className="address-header">
                      {addr.name}
                    </label>
                  </div>
                </AddressCard>
              ))}
            </ul>
          )}
        </div>
        <div className="modal-footer">
          <button
            className="btn btn--secondary-solid"
            type="reset"
            onClick={closeForm}
          >
            Cancel
          </button>
          <button
            className="btn btn--primary-solid"
            type="submit"
            onClick={applyHandler}
          >
            Apply
          </button>
        </div>
      </Modal>
      <AddressForm
        showForm={showEditForm}
        formData={addrForm}
        setFormData={setAddrForm}
        closeForm={() => setShowEditForm(false)}
      />
    </>
  );
};
