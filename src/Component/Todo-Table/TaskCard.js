
import './TaskCard.css'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import { DatePicker } from 'antd';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Radio } from '@mui/material';
import { useSelector } from 'react-redux';


const headCells = [
    {
        label: '',
    },
    {
        label: 'Title',
    },
    {
        label: 'Discription',
    },
    {
        label: 'Due Date',
    },
    {
        label: 'Importance',
    },
];
export default function TaskCard() {


    const tasks = useSelector(state => state?.todo?.tasks)
    const [taskList, setTaskList] = useState(tasks);
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [showCompleted, setShowCompleted] = useState(true);



    useEffect(() => {
        if (Object.keys(tasks).length > 0) {
            setTaskList((prevTasks) => [...prevTasks, {
                id: 1 + prevTasks.length, title: tasks.task, description: tasks.description, isCompleted
                    : false, dueDate: "", importance: ""
            }]);
        }
    }, [tasks])

    const handleDateChange = (prevTaskId, taskId, date) => {
        const dueDate = date
        const updatedTaskList = taskList.filter((task) => task.id !== prevTaskId).map((task) => {

            if (task?.isCompleted === true) {
                const updatedTaskList = completedTasks.map((task) => {
                    if (task.id === taskId) {
                        return { ...task, "dueDate": dueDate };
                    }
                    return task;
                })
                setCompletedTasks(updatedTaskList);
            }

            if (task.id === taskId) {
                return { ...task, "dueDate": dueDate };
            }
            return task;
        })
        setTaskList(updatedTaskList);
    };

    const handleStarClick = (prevTaskId, taskId) => {
        const updatedTaskList = taskList.filter((task) => task.id !== prevTaskId)
            .map((task) => {

                if (task?.isCompleted === true) {
                    const updatedTaskList = completedTasks.map((task) => {
                        if (task.id === taskId) {
                            return { ...task, "importance": !task.importance };
                        }
                        return task;
                    })
                    setCompletedTasks(updatedTaskList);
                }

                if (task.id === taskId) {
                    return { ...task, "importance": !task.importance };
                }
                return task;
            });
        setTaskList(updatedTaskList);
    };


    const HandleChange = (event, id) => {

        const updatedTaskList = taskList.map((task) => {
            if (task?.isCompleted === true) {
                const updatedTaskList = completedTasks.map((task) => {
                    if (task.id === id) {
                        return { ...task, "title": event.target.value };
                    }
                    return task;
                })
                setCompletedTasks(updatedTaskList);
            }

            if (task.id === id) {
                return { ...task, "title": event.target.value };
            }
            return task;
        });
        setTaskList(updatedTaskList);
    }

    const HandleDiscriptionChange = (event, id) => {

        const updatedTaskList = taskList.map((task) => {
            if (task?.isCompleted === true) {
                const updatedTaskList = completedTasks.map((task) => {
                    if (task.id === id) {
                        return { ...task, "description": event.target.value };
                    }
                    return task;
                })
                setCompletedTasks(updatedTaskList);
            }

            if (task.id === id) {
                return { ...task, "description": event.target.value };
            }
            return task;
        });
        setTaskList(updatedTaskList);
    }

    const handleClick = (event, id) => {
        const updatedTaskList = taskList.map((task) => {
            if (task.id === id) {
                return { ...task, "isCompleted": !task.isCompleted };
            }
            return task;
        });
        const task = updatedTaskList.find((t) => t.id === id);
        console.log(task, completedTasks, 'rrrrtask')
        if (task && !task.isCompleted) {
            setCompletedTasks(completedTasks.filter((t) => t.id !== id));
        } else {
            setCompletedTasks([...completedTasks, task]);
        }
        setTaskList(updatedTaskList);
    };

    const handleShowCompleted = () => {
        setShowCompleted(!showCompleted);
    };



    return (
        <Box sx={{ width: '100%' }}>
            {taskList.length > 0 && <Paper sx={{ width: '100%', mb: 2, mt: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <TableHead>
                            <TableRow>
                                {headCells.map((headCell) => (
                                    <TableCell>
                                        {headCell.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {taskList?.filter((task) => task.isCompleted === false)?.reverse()?.map((row, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover

                                        role="checkbox"
                                        aria-checked={row.isCompleted}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={row.isCompleted}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Radio
                                                color="primary"
                                                onClick={(event) => handleClick(event, row.id)}
                                                checked={row.isCompleted}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                                sx={{
                                                    "& .MuiSvgIcon-root": {
                                                        color: "#1976d2", // Change this value to your desired color
                                                    },
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                        >
                                            <input
                                                type="text"
                                                value={row.title}
                                                onChange={(event) => HandleChange(event, row.id)}
                                                placeholder="Enter a title"
                                                style={{ width: '100%' }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                        >
                                            <input
                                                type="text"
                                                value={row.description}
                                                onChange={(event) => HandleDiscriptionChange(event, row.id)}
                                                placeholder="Enter a discription"
                                                style={{ width: '100%' }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <DatePicker
                                                value={row.dueDate}
                                                onChange={(date) => handleDateChange(selectedTaskId, row.id, date)}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <IconButton
                                                aria-label="toggle importance"
                                                onClick={() => handleStarClick(selectedTaskId, row.id)}
                                            >
                                                {row.importance ? <StarIcon color="primary" /> : <StarBorderIcon color="primary" />}
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>}
            {completedTasks.length > 0 && (
                <>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Button onClick={handleShowCompleted}>
                            {showCompleted ?
                                <KeyboardArrowDownIcon sx={{ color: "#000" }} /> : <KeyboardArrowRightIcon sx={{ color: "#000" }} />}
                        </Button>
                        <Typography variant="h6">Completed ({completedTasks.length})</Typography>
                    </Box>
                    {showCompleted && (
                        <Paper sx={{ width: '100%', mb: 2 }}>
                            <TableContainer>
                                <Table
                                    sx={{ minWidth: 750 }}
                                    aria-labelledby="tableTitle"
                                    size={'medium'}
                                >
                                    <TableHead>
                                        <TableRow>
                                            {headCells.map((headCell) => (
                                                <TableCell>
                                                    {headCell.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {completedTasks?.map((row, index) => {
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover

                                                    role="checkbox"
                                                    aria-checked={row?.isCompleted}
                                                    tabIndex={-1}
                                                    key={row.id}
                                                    selected={row?.isCompleted}
                                                    sx={{ cursor: 'pointer' }}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Radio
                                                            color="primary"
                                                            onClick={(event) => handleClick(event, row.id)}
                                                            checked={row?.isCompleted}
                                                            inputProps={{
                                                                'aria-labelledby': labelId,
                                                            }}
                                                            sx={{
                                                                color: row.isCompleted ? '#1976d2' : 'action.active',
                                                                '&.Mui-checked': {
                                                                    color: '#1976d2',
                                                                },
                                                                '& .MuiSvgIcon-root': {
                                                                    fontSize: 24,
                                                                },
                                                            }}
                                                        />
                                                    </TableCell>
                                                    <TableCell
                                                        component="th"
                                                        id={labelId}
                                                        scope="row"
                                                    >
                                                        <input
                                                            type="text"
                                                            value={row.title}
                                                            onChange={(event) => HandleChange(event, row.id)}
                                                            placeholder="Enter a title"
                                                            style={{ width: '100%', textDecoration: 'line-through' }}
                                                        />
                                                    </TableCell>
                                                    <TableCell
                                                        component="th"
                                                        id={labelId}
                                                        scope="row"
                                                    >
                                                        <input
                                                            type="text"
                                                            value={row.description}
                                                            onChange={(event) => HandleDiscriptionChange(event, row.id)}
                                                            placeholder="Enter a discription"
                                                            style={{ width: '100%' }}
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <DatePicker
                                                            value={row.dueDate}
                                                            onChange={(date) => handleDateChange(selectedTaskId, row.id, date)}
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <IconButton
                                                            aria-label="toggle importance"
                                                            onClick={() => handleStarClick(selectedTaskId, row.id)}
                                                        >
                                                            {row.importance ? <StarIcon color="primary" /> : <StarBorderIcon color="primary" />}
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    )}
                </>
            )}
        </Box>
    );
}
