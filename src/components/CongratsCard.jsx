import PropTypes from 'prop-types';
import Congrats from '../images/congrats.svg';
import './CongratsCard.css';

function CongratsCard ({number=10 , setActualNumber }) {

    const handleNewGame = () => {
        setActualNumber(12)
    }

    return (
        
        <main className='congratscard'>
            <header>
                <img src={Congrats} alt='congrats' />
            </header>
            <article className='congrats-article'>
                <h1 className='congrats-h1'>Congrats! You completed the quiz.</h1>
                <p className='congrats-p '>You answer {number}/10 correctly</p>
                <button className='congrats-button' onClick={handleNewGame }>Play again</button>
            </article>
        </main>
        
    )
} 

CongratsCard.propTypes = {
    number: PropTypes.number.isRequired,
    setActualNumber: PropTypes.func.isRequired,
};

export default CongratsCard;