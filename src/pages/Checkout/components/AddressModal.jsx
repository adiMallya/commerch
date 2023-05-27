import { useState } from "react";
import { Modal } from "../../../components";
import { useDataContext, useOrderContext } from "../../../contexts";
import { ACTION_TYPE } from "../../../utils";

export const AddressModal = ({ showForm, closeForm }) => {
  const { address } = useDataContext();
  const { dispatch: orderDispatch } = useOrderContext();

  const [selectedAddr, setSelectedAddr] = useState({});

  const applyHandler = () => {
    orderDispatch({ type: ACTION_TYPE.ORDER_ADDRESS, payload: selectedAddr });
    closeForm();
  };

  return (
    <Modal
      title="Select Delivery Address"
      show={showForm}
      closeModal={closeForm}
    >
      <div className="modal-body">
        {address && (
          <ul className="list list--style-none">
            {address.map((addr) => {
              const { _id, name, street, city, state, pincode, phno } = addr;
              return (
                <li key={_id} className="checkout-address__container">
                  <div>
                    <input
                      type="radio"
                      name="select-address"
                      className="select-addr"
                      onChange={() => setSelectedAddr(addr)}
                    />
                    <label htmlFor="select-address" className="address-header">
                      {name}
                    </label>
                  </div>
                  <div className="address-details">
                    <p>{`${street},`}</p>
                    <p>{`${city} - ${pincode}, ${state}`}</p>
                    <p>Mobile: {`+91 ${phno}`}</p>
                  </div>
                </li>
              );
            })}
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
  );
};
