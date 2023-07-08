import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from 'axios';
import axiosInstance from 'src/config/service/axios';

const EditDescription = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  

  useEffect(() => {
    if (id) {
      console.log('klkl',id)
      // Set the initial value when `id` is available
      setInputValue(id);
    }
  }, [id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = async () => {
    try {
      const response = await axiosInstance.post(`api/editDescription?id=${id}`, {
        name: inputValue,
      });
      // Handle the response as needed
      console.log(response.data);
      handleClose();
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>
          <Typography variant='h6' component='span'>
            Edit Description
          </Typography>
          <IconButton aria-label='close' onClick={handleClose}>
            {/* Close button icon */}
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextareaAutosize
            rows={4}
            placeholder='Enter description...'
            value={inputValue}
            onChange={handleInputChange}
            style={{ width: '100%', resize: 'none' }}
          />
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={onSubmit}>
            Update Description
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditDescription;
