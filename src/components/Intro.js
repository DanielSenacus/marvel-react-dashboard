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
            <div id="marvel">MARVEL API</div>
            <div id="bg"></div>


            <div id="hidden">
                <img src="https://himalayasingh.github.io/marvel/img/img-1.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-2.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-3.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-4.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-5.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-6.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-7.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-8.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-9.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-10.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-11.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-12.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-13.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-14.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-15.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-16.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-17.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-18.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-19.jpg"></img>
                <img src="https://himalayasingh.github.io/marvel/img/img-20.jpg"></img>
            </div>
        </div>
    )
}

export default Intro

