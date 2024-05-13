import { Box, FormControl, OutlinedInput, Paper, makeStyles } from '@mui/material'
import React, { useState } from 'react'
import PlusInput from '../../Component/PlusI-icon-field/PlusInput';
import TaskCard from '../../Component/Todo-Table/TaskCard';

const TodoList = () => {

//     const [tododata, setTododata] = useState(""); 
//   const [tasks, setTasks] = useState([]);

//   const handleAddTask = (event) => {
//     event.preventDefault(); 
//     if (tododata.trim() !== "") { 
//       setTasks(tododata);
//       setTododata(""); 
//     }
//   };
//     const HandleChange = (event) => {
//         setTododata(event.target.value);
//     }
    

    return (

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: "100%",
                },
                padding: "20px"
            }}
        >
            {/* <Paper elevation={3} style={{ padding: "16px", marginTop: "14px", backgroundColor: 'ghostwhite' }} > */}
                <form noValidate autoComplete="off">
                    <FormControl sx={{ width: '100%' }}>
                        <PlusInput 
                        // tododata={tododata}
                        // HandleChange={HandleChange} 
                        // handleAddTask={handleAddTask}
                        />
                    </FormControl>
                        <TaskCard  />
                </form>
            {/* </Paper> */}
        </Box>
    )
}

export default TodoList