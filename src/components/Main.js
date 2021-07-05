
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Intro from './Intro';


const Main = ({ menuOpen }) => {




    return (
        <main className={menuOpen ? 'content content-active' : 'content'}>
            <Intro></Intro>
            <h1>Welcome to the world's greatest comics API!</h1>
        </main >
    );

}

export default Main;


