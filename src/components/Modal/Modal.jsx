import "./Modal.css";

export const Modal = (props) => {
  const { show, closeModal, title, children } = props;
  if (!show) return null;
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
};
