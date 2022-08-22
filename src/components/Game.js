import React from 'react'
import Board from './Board'

const Game = () => {
  return (
    <article className="game container mt-5">
    <section className="row">
      <div className="col-sm-8 game-board">
        <Board/>
      </div>
    </section>
  </article>
  )
}

export default Game