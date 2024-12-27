import React, { useState } from 'react'
import './App.css'

function App() {

  const win =[
    [0,1,2],   
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]    
  ]

function Checkwin(){
    let c0 = document.getElementById('cell0').innerHTML
    let c1 = document.getElementById('cell1').innerHTML
    let c2 = document.getElementById('cell2').innerHTML
    let c3 = document.getElementById('cell3').innerHTML
    let c4 = document.getElementById('cell4').innerHTML
    let c5 = document.getElementById('cell5').innerHTML
    let c6 = document.getElementById('cell6').innerHTML
    let c7 = document.getElementById('cell7').innerHTML
    let c8 = document.getElementById('cell8').innerHTML
    
    if((c0==player  && c1==player  && c2 == player)||
        (c3==player && c4==player && c5 == player)||
        (c6==player && c7==player && c8 == player)||
        (c0==player && c4==player && c8 == player)||
        (c0==player && c3==player && c6 == player)||
        (c1==player && c4==player && c7 == player)||
        (c2==player && c5==player && c8 == player)||
        (c2==player && c4==player && c6 == player)){
      
          document.getElementById('result').innerHTML = player +" is the winner"
    }
  }

  const[player, setPlayer] = useState('O')

  function Add(index,value){
    if(player=='X'){
      value=player
      document.getElementById(index).innerHTML=player
      Checkwin()
      setPlayer('O')
    }
    else{
      document.getElementById(index).innerHTML=player
      Checkwin()
      setPlayer('X')
    }
    
    
  }
  

  return (
    <div className="main">
      <h1>Tic Tac Toe</h1>
        <div className="board">
          
            <div className="cell" id="cell0" onClick={()=>{Add('cell0','c0')}}></div>

            <div className="cell" id="cell1" onClick={()=>{Add('cell1')}}></div>
            <div className="cell" id="cell2" onClick={()=>{Add('cell2')}}></div>
            <div className="cell" id="cell3" onClick={()=>{Add('cell3')}}></div>
            <div className="cell" id="cell4" onClick={()=>{Add('cell4')}}></div>
            <div className="cell" id="cell5" onClick={()=>{Add('cell5')}}></div>
            <div className="cell" id="cell6" onClick={()=>{Add('cell6')}}></div>
            <div className="cell" id="cell7" onClick={()=>{Add('cell7')}}></div>
            <div className="cell" id="cell8" onClick={()=>{Add('cell8')}}></div>
        </div>
        <h1>Player {player}'s turn</h1>
        <button onClick={()=>{window.location="/"}}>Restart</button>
        <h1 id="result"></h1>
    </div>
  )
}
export default App