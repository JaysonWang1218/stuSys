import React from "react";
/**
 * 提示组件
 * @param {*} props
 * @returns
 */
function Alert(props) {
  return (
    props.alert && (
      <div className={["alert", "alert-dismissible", "alert-" + props.type].join(" ")} role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>提示！</strong>
        {props.alert}
      </div>
    )
  );
}

export default Alert;
