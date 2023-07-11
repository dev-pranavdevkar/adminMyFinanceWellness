import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

const DeleteDescription = ({ id }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://api.balajient.biz/api/deleteDescriptionById?id=${id}`);
 
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <Button variant="outlined" onClick={handleDelete}>
      Delete 
    </Button>
  );
};

export default DeleteDescription;
