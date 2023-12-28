import { useState , useEffect} from 'react';
import PropTypes from 'prop-types';

import Correct from '../images/Check_round_fill.svg';
import Incorrect from '../images/Close_round_fill.svg';
import './AnswerCard.css';

function AnswerCard ({ answer , isCorrect , toAnswer , setToAnswer , setActualNumber , setPoints}) {

    const [answerEmoji, setAnswerEmoji] = useState('');
    const [clikedAnswer, setClikedAnswer] = useState(false);

    useEffect(() => {
        if (toAnswer && isCorrect) {
          setAnswerEmoji('correct');
    
          const timeoutId = setTimeout(() => {
            setAnswerEmoji('');
          }, 2000);
    
          return () => clearTimeout(timeoutId);
        } 
      }, [toAnswer, isCorrect, setPoints]);
    
      const handleClick = () => {
        if(!toAnswer) {
            if (isCorrect) {
                setAnswerEmoji('correct');
                setPoints(prev => prev + 1);
            } else {
                setAnswerEmoji('incorrect');
            }
            setToAnswer(true);
            setClikedAnswer(true);
        }

        setTimeout(() => {
          setToAnswer(false);
          setClikedAnswer(false);
          setAnswerEmoji('');
          setActualNumber((prev) => prev + 1);
        }, 2000);
      };

  return (
    <button onClick={handleClick} className={clikedAnswer ? 'base-button active' : 'base-button'}>{answer} {answerEmoji === 'correct' ? <CorrectAnswer/> : answerEmoji === 'incorrect' ? <IncorrectAnswer/> : ''}</button>
  )
}

AnswerCard.propTypes = {
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isCorrect: PropTypes.bool.isRequired,
    toAnswer: PropTypes.bool.isRequired,
    setToAnswer: PropTypes.func.isRequired,
    setActualNumber: PropTypes.func.isRequired,
    setPoints: PropTypes.func.isRequired,   
};

export default AnswerCard;

function CorrectAnswer () {
    return (
        <img src={Correct} alt='correct' />
    )
}

function IncorrectAnswer () {
    return (
        <img src={Incorrect} alt='incorrect' />
    )
}