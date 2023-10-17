interface Prop {
  onClose: () => void

}
export const Alert = ({onClose}: Prop) => {
  return (
      <div className="alert alert-primary alert-dismissible" role="alert">
          f
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
      </div>
  );
};
