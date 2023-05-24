import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Note from "./Note"
import Card from "./Card"
import contacts from "../Contacts"

function App() {
    return (
        <div>
            <Header />
            
            <Card   key={contacts.id}
                    id={contacts.id}
                    name={contacts[0].name}
                    tel={contacts[0].phone}
                    email={contacts[0].email}
                    img={contacts[0].imgURL}
            />
            <Card   key={contacts.id}
                    name={contacts[1].name}
                    tel={contacts[1].phone}
                    email={contacts[1].email}
                    img={contacts[1].imgURL}
            />
            <Card   key={contacts.id}
                    name={contacts[2].name}
                    tel={contacts[2].phone}
                    email={contacts[2].email}
                    img={contacts[2].imgURL}
            />
            
            <Footer />
        </div>
    );
}
export default App;