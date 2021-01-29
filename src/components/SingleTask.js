import {FaCheck} from 'react-icons/fa'

const SingleTask = ({ task, onDelete, onReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onReminder(task.id)}
    >
      <h3>
        <li>{task.task}</li>
        <FaCheck className='facheck' onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default SingleTask
