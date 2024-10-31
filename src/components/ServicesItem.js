import React from "react";


function ServiceItem(props) {


    return(
        <div className="col-3 text-center serviceItem">
            <img src={props.media} alt="" srcset="" />
            <h3>{props.titleOne}</h3>
            <h4>{props.titleTwo}</h4>
            <p>{props.ptag}</p>
        </div>
    )
}

export default ServiceItem;