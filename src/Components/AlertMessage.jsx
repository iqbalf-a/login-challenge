const AlertMessage = (props) => {
  return (
    <>
      <small className="text-danger">Please provide a {props.label}</small>
    </>
  );
};

export default AlertMessage;