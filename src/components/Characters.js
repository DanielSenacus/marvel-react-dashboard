const Characters = ({ menuOpen, characters, loading }) => {


    // return <h1></h1>;

    if (characters == null) {
        // do shit

        return (
            <main className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
            </main>
        );
    }

    else if (characters === 1) {
        return (
            <main className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
                <h1>Error</h1>
            </main>
        );
    }

    else if (characters === 0) {
        return (

            <main className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
                <h1>Ese personaje no existe</h1>
            </main>
        );
    }
    else {

        const characterAtributtes = characters;

        // console.log(characterAtributtes);

        return (

            <main className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
                <h1>Characters</h1>
                {
                    characterAtributtes.map((character) => {


                        const { comics, description, events, id, name, thumbnail, series, stories, } = character;

                        return (
                            <div className="">
                                <h1>{name}</h1>;
                                <div className="card flex-md-row mb-4 box-shadow h-md-250" id="characterCard">
                                    <div className="card characterImage">
                                        <img className="card-img-right img-thumbnail" src={thumbnail.path + "." + thumbnail.extension} />
                                    </div>
                                    <div className="card-body d-flex flex-column align-items-start">
                                        <h3>{name}</h3>
                                        <p className="card-text mb-3" id="characterDescription">
                                            {description ? description : ""}
                                        </p>
                                        <p className="text-muted mb-3" id="comicsAvailable">
                                            Comics: {comics.available}  <br />
                                            Series: {series.available} <br />
                                            Stories: {series.available}<br />
                                            Events: {events.available}
                                        </p>
                                        <p className="mb-1 text-muted" id="characterInfoAttribution">
                                            {characters["attributionText"]}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        );
                    })
                }
            </main>
        );

    }
};

export default Characters;