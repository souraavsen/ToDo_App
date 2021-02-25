import PropTypes from 'prop-types'
const Button = ({ classname, color, text, onClick }) => {
    return (
      <div>
            <button onClick={onClick} className={classname} style={{ backgroundColor: color }}>{text}
                
            </button>
      </div>
    );
}

Button.defaultProps = {
    color:'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    classname: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
