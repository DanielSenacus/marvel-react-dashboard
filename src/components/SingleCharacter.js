import React from 'react'

const SingleCharacter = ({ menuOpen, data, loading }) => {

    if (data === []) {
        // do shit

        return (
            <main className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
            </main>
        );
    }

    else if (data === 1) {
        return (
            <main className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
                <h1>Error</h1>
            </main>
        );
    }

    else if (data === 0) {
        return (

            <main className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
                <h1>Ese personaje no existe</h1>
            </main>
        );
    }
    else {
        const characterAtributtes = data["data"].results[0];


        const { comics, description, events, id, name, thumbnail, series, stories, } = characterAtributtes;



        return (
            <main className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
                <h1>{name}</h1>;
                <div className="card flex-md-row mb-4 box-shadow h-md-250" id="characterCard">
                    <div className="charcterImage">
                        <img className="card-img-right flex-auto d-md-block img-fluid" src={thumbnail.path + "." + thumbnail.extension} />
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
                            {data["attributionText"]}
                        </p>
                    </div>
                </div>
            </main>
        );
    }
};

export default SingleCharacter
