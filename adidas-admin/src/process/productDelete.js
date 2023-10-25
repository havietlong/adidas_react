import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FilterParam() {
    const { id } = useParams();
    return { id }; // Return the parameters as an object
  }

function deleteByID(){
    const { id } = FilterParam();

    axios
        .delete(`http://127.0.0.1:8000/api/products/delete/${id}`)
        .then((response) => {
          console.log(response);
          window.location.replace('/products/men');
          // Create a new array of products with an additional "order_id" property
        //   this.products = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    
}

const productDelete = () => {
    deleteByID();
  return (
    <div>Deleting .. </div>
  )
}

export default productDelete