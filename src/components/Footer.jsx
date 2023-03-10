import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="header">
            <p>Copyright &#169; {currentYear}</p>
        </footer>
    );
}

export default Footer;