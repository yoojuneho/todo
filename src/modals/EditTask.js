import React, { useState } from 'react';
import { Modal, Box, Button, TextField, MenuItem } from '@mui/material';

const categories = ["Work", "Personal", "Study", "Others"];

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
    const [taskName, setTaskName] = useState(taskObj.Name);
    const [taskDescription, setTaskDescription] = useState(taskObj.Description);
    const [taskCategory, setTaskCategory] = useState(taskObj.Category);

    const handleUpdate = () => {
        let updatedTask = {};
        updatedTask["Name"] = taskName;
        updatedTask["Description"] = taskDescription;
        updatedTask["Category"] = taskCategory;
        updateTask(updatedTask);
    };

    return (
        <Modal open={modal} onClose={toggle}>
            <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 1, margin: 'auto', width: 300 }}>
                <h2>Edit Task</h2>
                <TextField label="Task Name" fullWidth margin="normal" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                <TextField label="Task Description" fullWidth margin="normal" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                <TextField
                    select
                    label="Category"
                    fullWidth
                    margin="normal"
                    value={taskCategory}
                    onChange={(e) => setTaskCategory(e.target.value)}
                >
                    {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </TextField>
                <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
            </Box>
        </Modal>
    );
};

export default EditTask;
