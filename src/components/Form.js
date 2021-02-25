import { useState } from "react";

const Form = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!task) {
      alert("Please add Task");
      return;
    }
      
    if (!date) {
      alert("Please add Date");
      return;
    }

    addTask({ task, date, reminder });

    setTask("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Add Task</label>
        <input
          type='text'
          placeholder='Add Your Task'
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></input>
      </div>
      <div className='form-control'>
        <label>Add Date</label>
        <input
          type='text'
          placeholder='Add Exact Date'
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input>
      </div>
      {/* <div className='form-control form-control-check'>
        <label>Add Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        ></input>
      </div> */}

      <input className='btn btn-block' type='submit' value='Save'></input>
    </form>
  );
};

export default Form;
