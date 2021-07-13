import React from 'react'

const Intro = () => {



    const playAnimation = () => {
        let bg = document.getElementById("bg");
        let bgNum = 0;

        const marvelInterval = setInterval(function () {


            bgNum = (bgNum % 20) + 1;
            bg.style.background = `url(https://himalayasingh.github.io/marvel/img/img-${bgNum}.jpg)`


        }, 100);

        setTimeout(function () {
            clearInterval(marvelInterval);
        }, 12000);
    }

    React.useEffect(() => {
        playAnimation();

    }, [])



    return (
        <div id="intro">
            <div id="marvel">MARVEL</div>
            <div id="bg"></div>


            <div id="hidden">
                <img src="https://himalayasingh.github.io/marvel/img/img-1.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-2.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-3.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-4.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-5.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-6.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-7.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-8.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-9.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-10.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-11.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-12.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-13.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-14.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-15.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-16.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-17.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-18.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-19.jpg" alt="back"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-20.jpg" alt="back"></img>
            </div>
        </div>
    )
}

export default Intro

