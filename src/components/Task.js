import SingleTask from './SingleTask' 

const Task = ({ tasks, onDelete, onReminder }) => {
  return (
    <>
      {tasks.map((variable) => (
        <SingleTask
          key={variable.id}
          task={variable}
          onDelete={onDelete}
          onReminder={onReminder}
        />
      ))}
    </>
  );
};

export default Task
