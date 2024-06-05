import React, { useState } from 'react';
import { Modal, Box, Button, TextField, MenuItem } from '@mui/material';

const CreateTask = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskCategory, setTaskCategory] = useState('');

    const categories = [
        { label: 'Work', value: 'work' },
        { label: 'Personal', value: 'personal' },
        { label: 'Study', value: 'Study' },
        { label: 'Others', value: 'others' }
    ];

    const handleSave = () => {
        let taskObj = {
            Name: taskName,
            Description: taskDescription,
            Category: taskCategory,
        };
        save(taskObj);
        setTaskName('');
        setTaskDescription('');
        setTaskCategory('');
    };

    return (
        <Modal open={modal} onClose={toggle}>
            <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 1, margin: 'auto', width: 300 }}>
                <h2>Create Task</h2>
                <TextField
                    label="Task Name"
                    fullWidth
                    margin="normal"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <TextField
                    label="Task Description"
                    fullWidth
                    margin="normal"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
                <TextField
                    select
                    label="Category"
                    fullWidth
                    margin="normal"
                    value={taskCategory}
                    onChange={(e) => setTaskCategory(e.target.value)}
                >
                    {categories.map((category) => (
                        <MenuItem key={category.value} value={category.value}>
                            {category.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                    <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                    <Button variant="contained" color="secondary" onClick={toggle}>Cancel</Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default CreateTask;
