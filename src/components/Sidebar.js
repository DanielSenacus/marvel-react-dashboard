import React from 'react';
import { Link } from 'react-router-dom';


// Icons
import Iron from '../images/Iron';
import Hammer from '../images/Hammer';
import Deadpool from '../images/Deadpool';
import Glowe from '../images/Glowe';
import Panter from '../images/Panter';
import Shield from '../images/Shield';

const SideBar = ({ menuOpen }) => {



    return (
        <section className={menuOpen ? 'sidebar' : 'sidebar sidebar-active '}>
            <Link to="/">
                <div className="sidebar-brand">
                    <span><Shield></Shield></span>
                    <h2>MARVEL</h2>

                </div>
            </Link>

            <div className="sidebar-menu">
                <ul>

                    <li className="list-item">
                        <Link className='characters' to="/Characters">

                            <span className="title">Characters</span>
                            <span className="icon" id="iron"><Iron></Iron></span>



                        </Link>

                    </li>

                    <li className="list-item">
                        <Link to="/Comics" className="comics" >

                            <span className="title">Comics</span>
                            <span className="icon" id="glowe"><Glowe></Glowe></span>

                        </Link>
                    </li>

                    <li className="list-item">
                        <Link to="/Series" className="creators" >
                            <span className="title">Creators</span>
                            <span className="icon" id="panter"><Panter></Panter></span>
                        </Link>
                    </li>

                    <li className="list-item">
                        <Link to="/Events" className="events">
                            <span className="title">Events</span>
                            <span className="icon" id="hammer"><Hammer></Hammer></span>
                        </Link>
                    </li>

                    <li className="list-item">
                        <Link to="/Stories" className="stories">
                            <span className="title">Stories</span>
                            <span className="icon" id="deadpool"><Deadpool></Deadpool></span>
                        </Link>
                    </li>

                    <li className="list-item">
                        <Link to="/SingleCharacters" className="stories">
                            <span className="title">Stories</span>
                            <span className="icon" id="deadpool"><Deadpool></Deadpool></span>
                        </Link>
                    </li>

                </ul>
            </div>
        </section >
    );
};

export default SideBar;

