import React from "react";
import Detail from "./Detail"
import Avatar from "./Avatar"
function Card(props) {
    return (
        <div className={"card"}>
            <div className={"top"}>
                <p className={"idPos"}>id# {props.id}</p>
                
                <h2 className={"name"}>{props.name}</h2>
                <Avatar img={props.img} />
            </div>
            <div className={"bottom"}>
                <Detail detailInfo={props.tel} />
                <Detail detailInfo={props.email} />
            </div>
        </div>
    );
}

export default Card;