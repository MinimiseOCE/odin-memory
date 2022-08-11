import React from 'react';
import { useState } from 'react';
import img1 from '../images/hammerhead.jpg'
import img2 from '../images/anchovies.jpg'
import img3 from '../images/barramundi.jpg'
import img4 from '../images/blobfish.jpg'
import img5 from '../images/blueShark.jpg'
import img6 from '../images/catfish.jpg'
import img7 from '../images/peapuffer.jpg'
import img8 from '../images/pollock.jpg'
import img9 from '../images/rockfish.jpg'
import img10 from '../images/whiting.jpg'

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
let score = 0;
let highScore = 0;
let cardList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
export default function Cards() {
    let [cards, setShuffle] = useState(cardList);
    const [currentScore, setScore] = useState(score)
    const [highestScore, setHighScore] = useState(highScore)

    function handleClick() {
        setShuffle(shuffle(cardList));
        setScore(score)
        if (score > highestScore) {
            setHighScore(score)
        }
    }
    return (
        <div className='cards' onClick={handleClick}>
            <div className='scores'>
                <h2>Score: {currentScore} </h2>
                <h2>High Score: {highestScore}</h2>
            </div><div className='row1'>
                <Card
                    id={cards[0]}
                />
                <Card
                    id={cards[1]}
                />
                <Card
                    id={cards[2]}
                />
                <Card
                    id={cards[3]}
                />
                <Card
                    id={cards[4]}
                />
            </div>
            <div className='row2'>
                <Card
                    id={cards[5]}
                />
                <Card
                    id={cards[6]}
                />
                <Card
                    id={cards[7]}
                />
                <Card
                    id={cards[8]}
                />
                <Card
                    id={cards[9]}
                />
            </div>
        </div>
    )
}

let cardsClicked = []

function Card({ id }) {
    function handleClick() {
        if (cardsClicked.includes(id)) {
            score = 0;
            cardsClicked = []
        }
        else {
            cardsClicked.push(id)
            score++
        }
        cardList = shuffle(cardList)

    }

    return (
        <div >
            <img
                className='card'
                src={id}
                alt='hammerhead'
                onClick={handleClick}>
            </img>
        </div>
    )
}