import SingleTask from './SingleTask' 

const Task = ({ tasks, onDelete, onReminder }) => {
  return (
    <>
      {tasks.map((variable) => (
        // Maap(task) here map exactally worked line a for loop of python and variable is the variable of loop
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
