import React,{useState } from "react";
import "../App.css";
import CardOne  from '../components/1.jpg';
import CardTwo  from '../components/2.jpg';
import CardThree  from '../components/3.png';
import CardFour  from '../components/4.png';
import CardFive  from '../components/5.jpg';
import CardSix  from '../components/6.png';



function makeRandomArr() {
    return Math.random() - 0.5;
};

export default function RenderingCards() {
    const [cards,setCards] = useState([
        {
            src: CardOne,
            id: 1,
            className: 'mainCards',
            number: 1
        },
        {
            src: CardTwo,
            id:2,
            className: 'mainCards',
            number: 2
        },
        {
            src: CardThree,
            id: 3,
            className: 'mainCards',
            number: 3
        },
        {
            src: CardFour,
            id: 4,
            className: 'mainCards',
            number: 4
        },
        {
            src: CardFive,
            id: 5,
            className: 'mainCards',
            number: 5
        },
        {
            src: CardSix,
            id: 6,
            className: 'mainCards',
            number: 6
        },
        {
            src: CardOne,
            id: 7,
            className: 'mainCards',
            number: 1
        },
        {
            src: CardTwo,
            id: 8,
            className: 'mainCards',
            number: 2
        },
        {
            src: CardThree,
            id: 9,
            className: 'mainCards',
            number: 3
        },
        {
            src: CardFour,
            id: 10,
            className: 'mainCards',
            number: 4
        },
        {
            src: CardFive,
            id : 11,
            className: 'mainCards',
            number: 5
        },
        {
            src: CardSix,
            id: 12,
            className: 'mainCards',
            number: 6
        }
    ]);

    const [firstClick, setFirstClick] = useState(null);
    const [resultGame, setResultGame] = useState(null);

    function start() {
        const newCards = [...cards];
        newCards.sort(makeRandomArr);
        setResultGame(null);
        const newArr = newCards.map((element) => {
            return ({
                ...element,
                className: 'backgroundCards'
            })
        })
        setCards(newArr);
    }

    function replaceCard(element) {
        return cards.map((el) => {
            if(el.id === element.id ){
                return ({
                    ...el,
                    className: 'mainCards'
                })
            } else return el
        })
    }

    function game(element) {
        if(resultGame === 1 ) {
            return
        }
        
        if(firstClick == null) {
            setFirstClick(element.number) 
            const replaceCards = cards.map((el) => {
                if(el.id === element.id ){
                    return ({
                        ...el,
                        className: 'mainCards'
                    })
                } else return el
            })
            setCards(replaceCards)
        } else if(firstClick === element.number ) {
            alert(' Y WIN');
            setFirstClick(null);
            setCards(replaceCard(element));
            setResultGame(1);
        } else {
            alert('Y LOSE');
            setFirstClick(null);
            setCards(replaceCard(element));
            setResultGame(1);
        }
    }

    return(
        <>
            <button className="startGame" onClick={() => start()}>Start Game</button>
            <div>
                {
                    cards.map((element) => (
                        <img 
                            onClick={() => game(element)} 
                            className={element.className} 
                            src ={element.src}
                            key={element.id} 
                            alt= ''
                        />
                    ))
                }
            </div>
        </>
    )
}