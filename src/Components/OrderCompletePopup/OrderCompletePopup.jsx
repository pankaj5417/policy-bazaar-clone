import "./OrderCompletePopup.css";

export const OrderCompletePopup = (props) => {
  return (
    <div className="parent_popup_box">
      <div className="popup_content_box">
        <button className="close_btn" onClick={props.onClose}>
          X
        </button>
        {props.content}
      </div>
    </div>
  );
};
