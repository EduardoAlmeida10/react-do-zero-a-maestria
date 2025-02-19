//Css
import './App.css'
// React
import { useCallback, useEffect, useState } from 'react'
// Data
import { wordsList } from "./data/words.js"
// Components
import StartScreen from './components/StartScreen'
import GameOver from './components/GameOver.jsx'
import Game from './components/Game.jsx'

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

const guessesQty = 3;
let cont = 0;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLatters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words])

  // starts the secret word game
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates();

    // pick word and pick category
    const { category, word } = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
    cont++;
    console.log(cont)
  }, [pickWordAndCategory])

  // process the letter input
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLatters((actualGessedLetters) => [
        ...actualGessedLetters,
        normalizedLetter
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ]);

      setGuesses((actualGesses) => actualGesses - 1);
    }
  }

  const clearLetterStates = () => {
    setGuessedLatters([]);
    setWrongLetters([]);
  }

  // check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      // reset all states
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // check win condition
  useEffect(() => {

    const uniqueLetters = [... new Set(letters)];
    
    // win codition
    if(guessedLetters.length === uniqueLetters.length && cont > 0){
      startGame();
      setScore((actualScore) => actualScore += 100);
    }

  }, [guessedLetters, letters, startGame])

  // restarts the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
    cont = 0;
  }

  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' &&
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  )
}

export default App
