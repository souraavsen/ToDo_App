import PropTypes from 'prop-types'
import Button from './Button'
import { FaClipboardList } from "react-icons/fa";


const Header = (props) => {
  // const onClick = () => {
  //   console.log("Clicked")
  // }

  return (
    <header className='header'>
      <h1 className='todo_circle'>
        <FaClipboardList />
        TO-DO List
      </h1>
      <Button
        classname='btn'
        color={props.changebtn ? "#FE2E2E" : "#1fd1d1"}
        text={props.changebtn ? "Cancle" : "Add Task"}
        onClick={props.onshowAddBtn}
      />
    </header>
  );
};

export default Header;
