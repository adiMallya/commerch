import { useState } from "react";
import { Modal } from "../../../../components";
import { useAuthContext, useDataContext } from "../../../../contexts";
import { addrFormState } from "../../../../utils";
import { addNewAddress } from "../../../../services";

export const AddressForm = ({ showForm, closeForm }) => {
  const {
    user: { token },
  } = useAuthContext();
  const { dispatch } = useDataContext();

  const [formData, setFormData] = useState(addrFormState);

  const fillFormWithValue = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.getAttribute("name")]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addNewAddress(token, formData, dispatch);
    closeForm();
  };

  const cancelHandler = () => {
    closeForm();
    setFormData(addrFormState);
  };

  return (
    <Modal title="Add New Address" show={showForm} closeModal={closeForm}>
      <div className="modal-body">
        <form className="address-form" onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            onChange={fillFormWithValue}
            required
          />
          <input
            type="tel"
            name="phno"
            maxLength="10"
            placeholder="Mobile *"
            onChange={fillFormWithValue}
            // value={formData.phno}
            required
          />
          <div>
            <input
              type="tel"
              name="pincode"
              maxLength="6"
              placeholder="Pincode *"
              onChange={fillFormWithValue}
              // value={formData.pincode}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State *"
              onChange={fillFormWithValue}
              // value={formData.state}
            />
          </div>
          <input
            type="text"
            name="street"
            maxLength="255"
            placeholder="Address (House No, Building, Street, Area) *"
            onChange={fillFormWithValue}
            // value={formData.street}
            required
          />
          <input
            type="text"
            name="city"
            maxLength="20"
            placeholder="City/District *"
            onChange={fillFormWithValue}
            // value={formData.city}
          />
          <div>
            <p>Type of Address *</p>
            <label htmlFor="defaultAddr">
              <input
                type="radio"
                name="isDefault"
                id="defaultAddr"
                onChange={fillFormWithValue}
                // checked={formData.isDefault}
              />{" "}
              Default
            </label>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button
          className="btn btn--secondary-solid"
          type="reset"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button
          className="btn btn--primary-solid"
          type="submit"
          onClick={submitHandler}
        >
          Save
        </button>
      </div>
    </Modal>
  );
};
