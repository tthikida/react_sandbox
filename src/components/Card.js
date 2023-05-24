import React from "react";
import Detail from "./Detail"
function Card(props) {
    return (
        <div className={"card"}>
            <div className={"top"}>
                <h1 className={"name"}>{props.name}</h1>
                <img className={"circle-img"} src={props.img} alt={"avatar_pic"}/>
            </div>
            <div className={"bottom"}>
                <Detail detailInfo={props.tel} />
                <Detail detailInfo={props.email} />
            </div>
        </div>
    );
}

export default Card;