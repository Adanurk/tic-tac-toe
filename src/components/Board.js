import React, { useState } from 'react'
import Square from './Square';

const Board = () => {
    const [squares, setSquares] = useState((Array(9)).fill(null));
    const [isX, setIsX] = useState(true);

    const handleClick = (i) => {
      if(calculateWinner(squares) || squares[i]){
        //! why squares[i] here => to prevent change when user clicked
        return
      }
        squares[i] = isX ? "X" : "O";
        setSquares(squares)
        setIsX(!isX)
        // console.log(squares);
        //! ['X', null, null, null, null, null, null, null, null]
    }

    const calculateWinner = (squares) => {
      const winningPatterns = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

        for(let i = 0; i < winningPatterns.length; i++){
          const [a,b,c] = winningPatterns[i];
          if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            console.log(squares[a]);
            return squares[a]
        }
      }
      return null
    }

    const winner = calculateWinner(squares);
    
    let status = winner ? `Winner: ${winner}` : `Next player: ${isX ? `X` : `O`}`;

    const handleRestart = () => {
      setIsX(true);
      setSquares(Array(9).fill(null))
    }

  return (
      <>
    <div className="status h2 text-center">{status}</div>
        <div className="board">
                <Square value={squares[0]} onClick={()=> handleClick(0)}/>
                <Square value={squares[1]} onClick={()=> handleClick(1)}/>
                <Square value={squares[2]} onClick={()=> handleClick(2)}/>
                <Square value={squares[3]} onClick={()=> handleClick(3)}/>
                <Square value={squares[4]} onClick={()=> handleClick(4)}/>
                <Square value={squares[5]} onClick={()=> handleClick(5)}/>
                <Square value={squares[6]} onClick={()=> handleClick(6)}/>
                <Square value={squares[7]} onClick={()=> handleClick(7)}/>
                <Square value={squares[8]} onClick={()=> handleClick(8)}/>
        </div>
        <button onClick={handleRestart} className="text-center" style={{margin:"12px auto", width:"200px", display:"block", borderRadius:"5px"}}>Restart</button>
    </>
  )
}
export default Board;