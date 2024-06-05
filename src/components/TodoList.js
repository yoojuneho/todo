import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';
import { Container, Typography, Fab, Grid, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [filterCategory, setFilterCategory] = useState('');

    useEffect(() => {
        const arr = localStorage.getItem("taskList");
        if (arr) {
            const obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, []);

    const deleteTask = (index) => {
        const tempList = [...taskList];
        tempList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
    };

    const updateListArray = (obj, index) => {
        const tempList = [...taskList];
        tempList[index] = obj;
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
    };

    const toggle = () => {
        setModal(!modal);
    };

    const saveTask = (taskObj) => {
        const tempList = [...taskList];
        tempList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);
    };

    const handleCategoryChange = (event) => {
        setFilterCategory(event.target.value);
    };

    const filteredTaskList = filterCategory ? taskList.filter(task => task.Category === filterCategory) : taskList;

    return (
        <Container>
            <Typography variant="h3" component="h3" align="center" gutterBottom>
                Todo List
            </Typography>
            <Fab
                color="primary"
                aria-label="add"
                onClick={() => setModal(true)}
                sx={{ display: 'block', margin: '20px auto' }}
            >
                <AddIcon />
            </Fab>
            <FormControl fullWidth margin="normal">
                <InputLabel id="category-select-label">Filter by Category</InputLabel>
                <Select
                    labelId="category-select-label"
                    value={filterCategory}
                    onChange={handleCategoryChange}
                    label="Filter by Category"
                >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    <MenuItem value="work">Work</MenuItem>
                    <MenuItem value="personal">Personal</MenuItem>
                    <MenuItem value="Study">Study</MenuItem>
                    <MenuItem value="others">Others</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3}>
                {filteredTaskList.map((obj, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            taskObj={obj}
                            index={index}
                            deleteTask={deleteTask}
                            updateListArray={updateListArray}
                        />
                    </Grid>
                ))}
            </Grid>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </Container>
    );
};

export default TodoList;
