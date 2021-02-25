import {FaTrashAlt} from 'react-icons/fa'

const SingleTask = ({ task, onDelete, onReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? "done" : ""}`}
      onDoubleClick={() => onReminder(task.id)}
    >
      <h3>
        <li>{task.task}</li>
        <FaTrashAlt className='fatrash' onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default SingleTask
