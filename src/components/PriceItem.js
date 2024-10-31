import React from "react";


function PriceItem(props) {
    console.log(props)

    return(
        <div className="col-3 text-center mt-4">
            <div className="row d-flex justify-content-center pricePurple py-1">
                <div className="col-10">
                    <h3>{props.titleHost}</h3>
                </div>
            </div>
            <div className="row d-flex justify-content-center pricePurple py-1">
                <div className="col-10">
                    <h4>${props.price}<span className="spanMonth">/MO</span></h4>
                </div>
            </div>
            <div className="row">
                <div className="col-10 storageText even">
                    <p>{props.diskText} GB DISK SPACE</p>
                </div>
            </div>
            <div className="row">
                <div className="col-10 bandwithText odd">
                    <p>{props.bandwidth} GB BANDWIDTH</p>
                </div>
            </div>
            <div className="row">
                <div className="col-10 emailText even">
                    <p>100 EMAIL ACCOUNTS</p>
                </div>
            </div>
            <div className="row">
                <div className="col-10 codeText odd">
                    <p>PHP,ROR, MYSQL</p>
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default PriceItem;