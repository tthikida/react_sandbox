import React from "react";
import EmojiDetails from "../EmojiDetails"

function EmojiCard(props) {
    return (
        <div className={"emojiCard"}>
              <dt>
                  <span className={"emoji"} role="img" aria-label={"Tense Biceps"}>
                      {props.emoji}
                  </span>
                  <span>{props.title}</span>
              </dt>
              <dd>{props.description}</dd>
        </div>
    )
}

export default EmojiCard;



// <img src={props.img} alt={"EmojiCard_Img"}/>
// {/*<h4>{props.title}</h4>*/}
// {/*<p>{props.description}</p>*/}