import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Note from "./Note"
import Card from "./Card"
import contacts from "../Contacts"
import EmojiCard from "./EmojiCard"
import EmojiDetails from "../EmojiDetails"

function createEntry(emojiTerm) {
    return (
        <EmojiCard
            id={emojiTerm.id}
            emoji={emojiTerm.emoji}
            title={emojiTerm.title}
            description={emojiTerm.description}
        />
            
    )
}

function App() {
    return (
        <div>
            <Header />
            
            <Card   
                key={contacts[0].id}
                id={contacts[0].id}
                name={contacts[0].name}
                tel={contacts[0].phone}
                email={contacts[0].email}
                img={contacts[0].imgURL}
            />
            <Card   
                key={contacts[1].id}
                id={contacts[1].id}
                name={contacts[1].name}
                tel={contacts[1].phone}
                email={contacts[1].email}
                img={contacts[1].imgURL}
            />
            <Card   
                key={contacts[2].id}
                id={contacts[2].id}
                name={contacts[2].name}
                tel={contacts[2].phone}
                email={contacts[2].email}
                img={contacts[2].imgURL}
            />
            <dl className={"dictionary"}>{EmojiDetails.map(createEntry)}</dl>
            
            <Footer />
        </div>
    );
}
export default App;