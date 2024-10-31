import React from "react";


function SolutionItem(props) {


    return(
        <div className="col-3">
            <h3>{props.title}</h3>
            <ul>
                <li>{props.bulletOne}</li>
                <li>{props.bulletTwo}</li>
                <li>{props.bulletThree}</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora odit nostrum!</p>
            <button>Shop Now!</button>
        </div>
    )
}

export default SolutionItem;