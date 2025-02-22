import React from "react";
function Loader() {
  return (
    <div>
      <span className="loading loading-spinner text-success"></span>
      <span className="loading loading-spinner text-warning"></span>
      <span className="loading loading-spinner text-error"></span>
    </div>
  );
}
export default Loader;
