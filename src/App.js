import React from 'react';

// Components

import SideBar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Characters from './components/Characters';
import Main from './components/Main';
import Comics from './components/Comics';
import Series from './components/Series';
import Events from './components/Events';
import Stories from './components/Stories';
import SingleCharacter from './components/SingleCharacter';
import Wrong from './components/Wrong';

// Icons

import { FaSearch } from 'react-icons/fa'
import User from './images/Spiederman'

import './styles/App.scss';

const App = () => {

  const [menuOpen, setMenuOpen] = React.useState(true);
  const [queryName, setQueryName] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  // data Hooks
  const [data, setData] = React.useState([]);
  const [characters, setCharacters] = React.useState(undefined);
  const [comics, setComics] = React.useState(null);
  const [events, setEvents] = React.useState(undefined);
  const [stories, setStories] = React.useState(undefined);
  const [series, setSeries] = React.useState(undefined);




  const fetchApi = async () => {

    const pepa = new XMLHttpRequest();
    const params = "characters";
    pepa.open("GET", "http://localhost:8080/riki/main.php?public=" + params, true);

    pepa.onload = function () {
      const result = JSON.parse(pepa.responseText);
      const final = result["data"].results;
      setCharacters(final);
    }
    pepa.send();



    getCharacterAtrributes(1009165, "comics", setComics);
    getCharacterAtrributes(1009165, "series", setSeries);
    getCharacterAtrributes(1009165, "stories", setStories);
    getCharacterAtrributes(1009165, "events", setEvents);


  };

  const onSearch = (e) => {

    e.preventDefault();
    setLoading(true)
    const request = new XMLHttpRequest();

    if (queryName) {
      const name = queryName;
      const params = "name=" + name;
      request.open("GET", "http://localhost:8080/riki/text.php?" + params, true);

      request.onerror = function () {
        setLoading(false);
        setCharacters(1)

      }
      request.onload = function () {

        if (request.status === 200) {
          const result = JSON.parse(request.responseText);

          if (result["data"].count === 0) {
            setCharacters(0)
            setLoading(false);

          } else {
            const paketico = result["data"].results;
            setData(result);
            setCharacters(paketico);

            console.log(paketico)
            setLoading(false);


            const characterId = result["data"].results[0].id;



            getCharacterAtrributes(characterId, "comics", setComics);
            getCharacterAtrributes(characterId, "series", setSeries);
            getCharacterAtrributes(characterId, "stories", setStories);
            getCharacterAtrributes(characterId, "events", setEvents);

            console.log(characterId)
          }

        } else {
          console.log("no gordis");
        }
      }
      request.send();
    } else {
      alert("putp");
      setLoading(false);
      return
    }

  }


  const getCharacterAtrributes = (CharacterId, category, setFuncion) => {
    setLoading(true)
    const request = new XMLHttpRequest();
    request.open("GET", 'http://localhost:8080/riki/comics.php?character-id=' + CharacterId + "&" + "reference=" + category, true);

    request.onerror = function () {
      setLoading(false);
      setFuncion(0)
    }
    request.onload = function () {

      if (this.status == 200) {
        const results = JSON.parse(this.responseText),
          items = results["data"].results;
        if (results["data"] === 0) {
          setLoading(false)
          setFuncion(1)

        } else
          setLoading(false)
        setFuncion(items);


      } else {
        console.log("no gordis")
      }
    }

    request.send();


  };



  React.useEffect(() => {
    fetchApi();
  }, [])



  return (
    <>
      <header className={menuOpen ? 'header header-active' : 'header'}>

        <div onClick={() => setMenuOpen(!menuOpen)} className={menuOpen ? "menu-btn open" : "menu-btn"}>

          <div className="menu-btn_burger"></div>
        </div>

        <form id="connectionForm" onSubmit={onSearch}>
          <div className="search">
            <span><FaSearch /></span>
            <input onChange={(e) => setQueryName(e.target.value)} id="name" type="search" placeholder="Search..." />
          </div>
          <button type="submit" id="submit" className="search_button">
            <Router>
              <Switch>
                <Link to="/SingleCharacters">
                  Serach
                </Link>
              </Switch>

            </Router>
          </button>

        </form>
        <section id="characterSection"></section>
        <div className="user">
          <span><User></User></span>
          <h4>Daniel Senacus</h4>
        </div>
      </header>

      <Router>
        <SideBar menuOpen={menuOpen}></SideBar>
        <Switch>
          <Route exact path="/">
            <Main menuOpen={menuOpen} loading={loading}></Main>
          </Route>
          <Route path="/SingleCharacters">
            <SingleCharacter menuOpen={menuOpen} data={data} loading={loading}></SingleCharacter>
          </Route>
          <Route path="/Characters">
            <Characters menuOpen={menuOpen} characters={characters} loading={loading} ></Characters>
          </Route>
          <Route path="/Comics">
            <Comics menuOpen={menuOpen} comics={comics} loading={loading}></Comics>
          </Route>
          <Route path="/Series">
            <Series menuOpen={menuOpen} series={series} loading={loading}></Series>
          </Route>
          <Route path="/Events">
            <Events menuOpen={menuOpen} events={events} loading={loading}></Events>
          </Route>
          <Route path="/Stories">
            <Stories menuOpen={menuOpen} stories={stories} loading={loading}></Stories>
          </Route>
          <Route path="*">
            <Wrong />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App
