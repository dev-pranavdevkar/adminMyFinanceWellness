import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useForm } from 'react-hook-form';
import axiosInstance from 'src/config/service/axios';

export default function AddDescription() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { handleSubmit } = useForm();


  
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
      const response = await axiosInstance.post('api/addDescription', {
        name: inputValue,
      });
      // Handle the response as needed
      console.log("This is Data", response.data);
      handleClose();
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <Button variant='outlined' onClick={handleClickOpen}>
          Add New Description
        </Button>
        <Dialog onClose={handleClose} aria-labelledby='full-screen-dialog-title' open={open}>
          <DialogTitle id='full-screen-dialog-title'>
            <Typography variant='h6' component='span'>
              Modal title
            </Typography>
            <IconButton
              aria-label='close'
              onClick={handleClose}
              sx={{ top: 8, right: 10, position: 'absolute', color: 'grey.500' }}
            >
              {/* <Icon icon='bx:x' /> */}
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ '& + .MuiDialogActions-root': { p: (theme) => `${theme.spacing(3)} !important` } }}>
            <TextareaAutosize
              rows={4}
              placeholder="Enter description..."
              value={inputValue}
              onChange={handleInputChange}
              style={{ width: '100%', resize: 'none' }}
            />
          </DialogContent>
          <DialogActions>
            <Button type='submit' variant='contained' onClick={handleSubmit(onSubmit)}>
              Add Desc
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
