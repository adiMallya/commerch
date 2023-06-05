import { useAuthContext, useDataContext } from "../../contexts";
import { removeAddress } from "../../services";

import "./AddressCard.css";

export const AddressCard = (props) => {
  const {
    _id,
    name,
    street,
    city,
    state,
    pincode,
    phno,
    setFormData,
    setShowModal,
    deleteAddress,
    children,
  } = props;

  const { token } = useAuthContext();
  const { dispatch } = useDataContext();

  const editHandler = (_id, name, street, city, state, pincode, phno) => {
    setShowModal(true);
    setFormData((form) => ({
      ...form,
      _id,
      name,
      street,
      city,
      state,
      pincode,
      phno,
    }));
  };

  return (
    <div key={_id} className="address__container">
      <div className="address-header">{children}</div>
      <div>
        <p>{`${street},`}</p>
        <p>{`${city} - ${pincode}, ${state}`}</p>
        <p>Mobile: {`+91 ${phno}`}</p>
      </div>
      <div>
        {deleteAddress && (
          <button
            className="btn btn--secondary-solid"
            onClick={() => removeAddress(_id, token, dispatch)}
          >
            Remove
          </button>
        )}

        <button
          className="btn btn--primary-solid"
          onClick={() =>
            editHandler(_id, name, street, city, state, pincode, phno)
          }
        >
          Edit
        </button>
      </div>
    </div>
  );
};
