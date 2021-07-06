import React from 'react'


const Comics = ({ menuOpen, loading, comics }) => {




    if (comics === 0) {
        return (
            <section className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
                <h1>Error</h1>
            </section>
        );
    } else if (comics === 1) {

        return (
            <section className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
                <h1>This character does not have comics </h1>
            </section>
        );
    } else if (comics) {
        return (
            <section className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
                <h1>Comics</h1>
                <div className="card-columns">
                    {comics.map((comic) => {

                        const { id, thumbnail, title, description, characters, creators } = comic

                        return (
                            <div className="card flex-md-row p-3 mb-4 box-shadow h-md-250">

                                <div className="characterContainer">
                                    <img className="card-img-top img-thumbnail" src={thumbnail.path + "." + thumbnail.extension} alt={title} />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {title}
                                    </h4>
                                    <p className="card-text">
                                        {description ? description : ""}
                                    </p>
                                    <p className="card-text text-muted">
                                        {characters.items.map((character) => {
                                            return character.name.concat(",");
                                        })}
                                    </p>
                                    <p className="card-text text-muted">
                                        {creators.items.map((item) => {
                                            return item.name.concat(" (" + item.role + "), ");
                                        })}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <small>{comics["attributionText"]}</small>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    } else {
        return (
            <section className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
            </section>
        );
    }


}

export default Comics
