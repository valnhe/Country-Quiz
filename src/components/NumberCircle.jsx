import PropTypes from 'prop-types';
import './NumberCircle.css';


function NumberCicle ({ numberlist , actualNumber }) {

    return (
        <>
            <button className={numberlist <= actualNumber ? "active list" : "list"}>{numberlist}</button>
        </>
    )
} 

NumberCicle.propTypes = {
    actualNumber: PropTypes.number.isRequired,
    numberlist: PropTypes.number.isRequired,
};

export default NumberCicle;