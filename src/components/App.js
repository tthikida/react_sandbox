import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Note from "./Note"
import Card from "./Card"
import contacts from "../Contacts"

function App() {
    return (
        <div>
            <h1 className={"heading"}>Keeper</h1>
            
            <Card   name={contacts[0].name}
                    tel={contacts[0].phone}
                    email={contacts[0].email}
                    img={contacts[0].imgURL}
            />
            <Card   name={contacts[1].name}
                    tel={contacts[1].phone}
                    email={contacts[1].email}
                    img={contacts[1].imgURL}
            />
        </div>
    );
}
export default App;