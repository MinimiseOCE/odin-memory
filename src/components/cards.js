import React from 'react';
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

function Card({ id }) {
    return (
        <div >
            <img
                className='card'
                src={id}
                alt='hammerhead'>
            </img>
        </div>
    )
}

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

let cardList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
shuffle(cardList)

export default function Cards() {
    return (
        <div className='cards'>
            <div className='row1'>
                <Card
                    id={cardList[0]}
                />
                <Card
                    id={cardList[1]}
                />
                <Card
                    id={cardList[2]}
                />
                <Card
                    id={cardList[3]}
                />
                <Card
                    id={cardList[4]}
                />
            </div>
            <div className='row2'>
                <Card
                    id={cardList[5]}
                />
                <Card
                    id={cardList[6]}
                />
                <Card
                    id={cardList[7]}
                />
                <Card
                    id={cardList[8]}
                />
                <Card
                    id={cardList[9]}
                />
            </div>
        </div>
    )
}