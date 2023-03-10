import React from "react";
import NoteIcon from '@mui/icons-material/Note';

function Header() {
    return (
        <header className="header">
            <h1>
                <NoteIcon />
                {"    "}  Memo
            </h1>
        </header>
    );
}

export default Header;