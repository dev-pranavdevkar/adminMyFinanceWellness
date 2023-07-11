import React, { useEffect, useState } from 'react';
import axiosInstance from 'src/config/service/axios';
import 'bootstrap/dist/css/bootstrap.css';
import EditDescription from './editDescription';

const DescriptionList = () => {
  const [descriptions, setDescriptions] = useState([]);

  const fetchData = () => {
    axiosInstance
      .get('api/getAllDescription')
      .then((response) => {
        setDescriptions(response.data.data.Description);
        console.log('descriptions', response.data.data.Description);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Descriptions</h1>
      {Array.isArray(descriptions) && descriptions.length ? (
        <div className='row'>
          {descriptions.map((description, index) => (
            <div className='col-lg-4' key={index}>
              <div className='h-100 my-3'>
                <div className='card'>
                  <div className='card-header'>
                    <h5 className='card-title'>{description.id}</h5>
                  </div>
                  <div className='card-body'>
                    <p>
                      {description.name}
                    </p>
                  </div>
                  <div className='card-footer d-flex justify-content-between'>
                   <EditDescription id={description.id} />
                  

                  </div>
                </div>
              </div>
            </div>
          ))}


        </div>
      ) : (
        <p>No data found</p>
      )}
    
      
    </div>
  );
};

export default DescriptionList;
