import './Smile.css'
import { useState } from 'react';
function Smile(props){
    const [count, setCount] = useState(0);
    function increaseCounter(){
        setCount(count+1);
        props.updateCount(count+1);
    }
    function decreasCounter(){
        setCount(count-1);
        props.updateCount(count-1);
    }
    return (
        <div className="smile">
            <div className="smile__img">{props.smile}</div>
            <div className="smile__btnBlock">
                <button className="btn btn_unlike" onClick={decreasCounter}>👎</button>
                <span className="count">{count}</span>
                <button className="btn btn_like" onClick={increaseCounter}>👍</button>
            </div>
        </div>
    )
}
export default Smile;