import react from "react";
import React from "react";
import Die from "../components/Die"
import Confetti from "react-confetti";

export default function Game(){

    function randomDice(){
        const arr=[]
        for(let i=0 ; i<10 ; i++){
            arr.push({
                id: i+1,
                value: Math.ceil(Math.random()*6),
                isHeld: false
            })
        }
        return arr
    }

    const[dices, setDices] = React.useState(randomDice())

    const dies = dices.map(die => {
        return <Die key={die.id} value={die.value} held={die.isHeld} hold={() => holdDice(die.id)}/>
    })

    function rollDice(){
        if(tenzies){
            setTenzies(false)
            setDices(randomDice())
        }
        else{
            setDices(prev => prev.map(die => {
                return die.isHeld? die : {
                    ...die,
                    value : Math.ceil(Math.random()*6)
                }
            }))
        }
    }

    function holdDice(id){
        setDices(prev => prev.map( die => {
            if(die.id === id){
                return{
                    ...die,
                    isHeld : !die.isHeld
                }
            }
            else{
                return die
            }
        } ) )
    }

    const[tenzies, setTenzies] = react.useState(false)

    react.useEffect(()=>{
        //every function ckeck all the array based on the giving condition and return wether true or false
        //so first i was checking if all the dices are held the i get the value of one of the (the first for example)
        // and make sure that all of them have the same value, so if al of them have the same value and they 
        //all held then we can say that the user is win!
        const allHeld = dices.every(die => die.isHeld === true)
        const firstVal = dices[0].value
        const allSame = dices.every(die => die.value === firstVal)
        if(allHeld && allSame){
            setTenzies(true)
        }
    }, [dices])

    


    return(
        <div className="Game">
            <h1 className="title">Tenzies</h1>
            <h2 className="paragraph">Roll until all dice are the same.Click each die to freeze it 
                at its current value between rolls.</h2>

            <div className="dies">
                {dies}
            </div>
            {tenzies && <Confetti />}
            <button className="rollButton" onClick={rollDice}>{tenzies?"New Game" : "Roll"}</button>

        </div>
    )
}