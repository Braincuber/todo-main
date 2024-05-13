import React, { useState } from 'react'
import './PlusInput.css';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { addTask } from '../../redux/actions/todoAction';
import { useDispatch } from 'react-redux';

const PlusInput = () => {
  const dispatch = useDispatch()
  const [tododata, setTododata] = useState("");
  const [todoDiscription, setTodoDiscription] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();
    if (tododata.trim() !== "") {
      dispatch(addTask({ task: tododata, description: todoDiscription }));
      setTododata("");
      setTodoDiscription("")
    }
  };
  const HandleChange = (event) => {
    setTododata(event.target.value);
  }
  const HandleDiscriptionChange = (event) => {
    setTodoDiscription(event.target.value);
  }

  return (
    <>
      <div className="plus-input">
        <div className="plus-icon" style={{ cursor: 'pointer', color: 'blue', display: 'flex' }}>
          {tododata.trim() !== "" ? <RadioButtonUncheckedIcon sx={{ fontSize: 25 }} /> : <AddIcon sx={{ fontSize: 30 }} />}

        </div>
        <input
          type="text"
          value={tododata}
          onChange={HandleChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleAddTask(event);
            }
          }}
          placeholder="Enter a title"
        />
      </div>
      {tododata && <div className="plus-input">
        <div className="plus-icon" style={{ cursor: 'pointer', color: 'blue', display: 'flex' }}>
          {todoDiscription.trim() !== "" ? <RadioButtonUncheckedIcon sx={{ fontSize: 25 }} /> : <AddIcon sx={{ fontSize: 30 }} />}

        </div>
        <input
          type="text"
          value={todoDiscription}
          onChange={HandleDiscriptionChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleAddTask(event);
            }
          }}
          placeholder="Enter a discription"
        />
      </div>}
    </>
  );
};

export default PlusInput