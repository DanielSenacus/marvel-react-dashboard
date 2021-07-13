
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

const Main = ({ menuOpen }) => {

    return (
        <main className={menuOpen ? 'content content-active' : 'content'}>
            <h1>Welcome to the world's greatest comics API!</h1>
        </main >
    );

}

export default Main;


