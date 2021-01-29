import PropTypes from 'prop-types'
import Button from './Button'


const Header = (props) => {
  // const onClick = () => {
  //   console.log("Clicked")
  // }

  return (
    <header className='header'>
      <h1 className='todo_circle'>{props.title}</h1>
      <Button
        classname='btn'
        color={props.changebtn ? "#FE2E2E" : "steelblue"}
        text={props.changebtn ? "Cancle" : "Add Task"}
        onClick={props.onshowAddBtn}
      />
    </header>
  );
};

Header.defaultProps = {
    title:'TO-DO List'
}

Header.prototype = {
  title: PropTypes.string.isRequired
}

// CSS using variable
//<h1 style={ headingstyle}>{ props.title}</h1>
// add this in header tag
// const headingstyle = {
//   color: "orange",
//   backgroundColor: "black",
// };

export default Header;
