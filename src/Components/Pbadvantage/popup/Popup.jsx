import React from "react"
import "./Popup.css"
export const Popup = props => {

    return (
    <div className="popup_box">
        <div className="box">
        <button className="btn_close" onClick={props.handleClose}>X</button>
    {props.content}
        </div>
    </div>
    )
}