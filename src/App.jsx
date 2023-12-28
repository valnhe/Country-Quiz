import { useState , useEffect } from 'react'
import { getWorldRank } from './services/Countries.js'
import { doQuestion } from './services/Questions.js'

import CongratsCard from './components/CongratsCard';
import NumberCircle from './components/NumberCircle'
import AnswerCard from './components/AnswerCard';
import './App.css'


function App() {

  const getRandomElements = (array, count) => {
    const shuffledArray = [...array].sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  };

  const [points, setPoints] = useState(0);
  const [countries, setCountries] = useState([]);
  const [question, setQuestion] = useState({});
  const [actualNumber, setActualNumber] = useState(1);
  const [toAnswer, setToAnswer] = useState(false);

  useEffect(() => {
    const fetchDataAndInitialize = async () => {
      const data = await getWorldRank();
      setCountries(data);
      setQuestion(doQuestion(getRandomElements(data, 40)));
    };

    fetchDataAndInitialize();
  }, []);

  useEffect(() => {
    if (actualNumber === 12) {
      setQuestion(doQuestion(getRandomElements(countries, 40)));
      setActualNumber(1);
    }
  }, [actualNumber, countries]);
  

  return (

    <>
      {actualNumber === 11 ? <CongratsCard number={points} setActualNumber={setActualNumber} /> : null}

      {actualNumber < 11 &&
        <main className='main-game'>
          <h1>Country Quiz</h1>
            <nav>
              {[...Array(10)].map((_, index) => (
                  <NumberCircle key={index} numberlist={index+1} actualNumber={actualNumber}/>
                ))}
            </nav>
            <article>
              <h2>{question[actualNumber-1]?.question? question[actualNumber-1].question : ""}</h2>
              <section className='buttons-question'>
                {question[actualNumber-1]?.answers?.map(( answer , index) => (
                  <AnswerCard key={index} answer={answer.answer} isCorrect={question[actualNumber-1].correct === answer.answer} toAnswer={toAnswer} setToAnswer={setToAnswer} setActualNumber={setActualNumber} setPoints={setPoints}/>
                ))}
              </section>
            </article>
          </main>
        }
    
    </>
  )
}

export default App
