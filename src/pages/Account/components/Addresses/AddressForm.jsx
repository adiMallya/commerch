import { Modal } from "../../../../components";
import { useAuthContext, useDataContext } from "../../../../contexts";
import { addrFormState } from "../../../../utils";
import { addNewAddress, updateAddress } from "../../../../services";

export const AddressForm = ({ showForm, formData, setFormData, closeForm }) => {
  const { token } = useAuthContext();
  const { dispatch } = useDataContext();

  const fillFormWithValue = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    formData._id ?
      updateAddress(token, formData, dispatch)
      :
      addNewAddress(token, formData, dispatch);

    closeForm();
    setFormData(addrFormState);
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    closeForm();
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
            value={formData.name}
            required
          />
          <input
            type="tel"
            name="phno"
            pattern="[1-9]{1}[0-9]{9}"
            maxLength="10"
            placeholder="Mobile *"
            onChange={fillFormWithValue}
            value={formData.phno}
            required
          />
          <div className="zipcode-block">
            <input
              type="text"
              name="pincode"
              pattern="\d{6}"
              maxLength="6"
              placeholder="Pincode *"
              onChange={fillFormWithValue}
              value={formData.pincode}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State "
              onChange={fillFormWithValue}
              value={formData.state}
            />
          </div>
          <input
            type="text"
            name="street"
            maxLength="255"
            placeholder="Address (House No, Building, Street, Area) *"
            onChange={fillFormWithValue}
            value={formData.street}
            required
          />
          <input
            type="text"
            name="city"
            maxLength="20"
            placeholder="City/District *"
            onChange={fillFormWithValue}
            value={formData.city}
          />

          <div className="modal-footer">
            <button
              className="btn btn--secondary-solid"
              type="reset"
              onClick={cancelHandler}
            >
              Cancel
            </button>
            <button className="btn btn--primary-solid" type="submit">
              {formData._id ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
