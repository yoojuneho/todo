import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
import { Card as MuiCard, CardContent, Typography, Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const categoryColors = {
        work: { primaryColor: "#5D93E1", secondaryColor: "#ECF3FC" },
        personal: { primaryColor: "#F9D288", secondaryColor: "#FEFAF1" },
        shopping: { primaryColor: "#5DC250", secondaryColor: "#F2FAF1" },
        others: { primaryColor: "#F48687", secondaryColor: "#FDF1F1" }
    };

    const colors = categoryColors[taskObj.Category] || categoryColors['others'];

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    return (
        <MuiCard sx={{ margin: 2, boxShadow: 3, borderRadius: 2, backgroundColor: colors.secondaryColor }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{ backgroundColor: colors.primaryColor, borderRadius: 1, color: '#fff', padding: 1, textAlign: 'center' }}>
                    {taskObj.Name}
                </Typography>
                <Typography variant="body2" component="p" sx={{ marginTop: 2 }}>
                    {taskObj.Description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<EditIcon />}
                        sx={{ marginRight: 1 }}
                        onClick={toggle}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </Box>
            </CardContent>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </MuiCard>
    );
};

export default Card;
