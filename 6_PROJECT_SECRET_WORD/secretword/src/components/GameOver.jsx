import "./GameOver.css"

import PropTypes from 'prop-types';

const GameOver = ({ retry, score }) => {
  return (
    <div className="gameOver">
      <h1>Fim de jogo!</h1>
      <h2 className="score">
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

GameOver.propTypes = {
    retry: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
};

export default GameOver