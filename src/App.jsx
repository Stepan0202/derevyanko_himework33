import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Smile from './Components/Smile'


function App() {
  
  const backEndInnerSmiles = [
    {smileID: "0", smile: '😎', rating: useState(0)},
    {smileID: "1", smile: '😳', rating: useState(0)},
    {smileID: "2", smile: '😚', rating: useState(0)},
    {smileID: "3", smile: '🥹', rating: useState(0)},
    {smileID: "4", smile: '😂', rating: useState(0)},
    {smileID: "5", smile: '😇', rating: useState(0)},
    {smileID: "6", smile: '🥳', rating: useState(0)},
    {smileID: "7", smile: '😍', rating: useState(0)},
    {smileID: "8", smile: '😜', rating: useState(0)}
  ]
  const [bestSmile, setBestSmile] = useState('');
  function getBestSmile(){
        backEndInnerSmiles.forEach(element => {
          console.table(element)
        })

      let maxIndex = 0;
      let maxElement =  backEndInnerSmiles[0].rating[0];
      backEndInnerSmiles.map((element, index) => {
        if(element.rating[0] > maxElement){
          maxElement = element.rating[0];
          maxIndex = index;
        }
      })
    console.log(maxIndex);
    setBestSmile(backEndInnerSmiles[maxIndex].smile)
  }
  return (
    <>
    <div className="smilesContainer">
      {backEndInnerSmiles.map(smileObj => {
        return <Smile smileID={smileObj.smileID} smile={smileObj.smile} updateCount={smileObj.rating[1]}/>
      })}
    </div>
    <button className="btn" onClick={getBestSmile}>Get the best smile ever</button>
      {bestSmile && <div className="bestSmile">{bestSmile}</div>}
    </>
  )
}

export default App
