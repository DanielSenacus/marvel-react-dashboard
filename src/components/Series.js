import React from 'react'

const Series = ({ menuOpen, series, loading }) => {


    if (series === 0) {
        return (
            <section className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
                <h1>Error</h1>
            </section>
        );

    } else if (series === 1) {
        <section className={menuOpen ? 'content content-active' : 'content'}>
            {loading && <h1>Cargando...</h1>}
            <h1>this character dont have series </h1>
        </section>

    } else if (series) {

        return (
            <section className={menuOpen ? 'content content-active' : 'content'}>
                {loading && <h1>Cargando...</h1>}
                <h1>Series</h1>
                <div className="card-columns">
                    {series.map((item) => {

                        const { id, thumbnail, title, description, characters, creators } = item

                        return (
                            <div className="card flex-md-row p-3 mb-4 box-shadow h-md-250">
                                <a href="">
                                    <img className="card-img-top" src={thumbnail.path + "." + thumbnail.extension} alt={title} />
                                </a>
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
                                {/* <div className="card-footer">
                                    <small>{comics["attributionText"]}</small>
                                </div> */}
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    } else {
        return (
            <section className={menuOpen ? 'content content-active' : 'content'}>
                <h1>salchi</h1>
            </section>
        );
    }

}

export default Series
