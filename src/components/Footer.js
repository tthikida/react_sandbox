import React from 'react';

let year = new Date().getFullYear();

function Footer() {
    return <div className={"footer"}>
        Copyright ⓒ {year} 
    </div>
}

export default Footer;