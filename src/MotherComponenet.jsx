import React from "react";


function MotherComponenet(props) {
  const [show, setShow] = React.useState(false);

  if (show) return props.children;

  return (
    <div>
      <h1>Mother componenet</h1>
      {show && props.children}
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
    </div>
  );
}
export default MotherComponenet;
