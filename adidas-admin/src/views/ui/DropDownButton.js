import React, { useState } from 'react';
import axios from 'axios';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function DropDownButton({ direction,id, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);


  function handleCancel(id){
    console.log('clicked');
    axios.post('http://127.0.0.1:8000/api/orders/cancel/'+id)
    .then((response) => {
        console.log(response);
        window.location.reload();
        // Create a new array of products with an additional "order_id" property
      //   this.products = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
}

function handleApprove(id){
  console.log('clicked');
  axios.post('http://127.0.0.1:8000/api/orders/approve/'+id)
  .then((response) => {
      console.log(response);
      window.location.reload();
      // Create a new array of products with an additional "order_id" property
    //   this.products = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Action</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem header>Actions</DropdownItem>
          <DropdownItem><a href={'/admin/order_detail/'+ id} style={{textDecoration:'none',color:'gray'}}>View</a></DropdownItem>
          <DropdownItem><button onClick={() => handleCancel(id)} style={{backgroundColor:'transparent',border:'none'}}>Cancel</button></DropdownItem>
          <DropdownItem><button onClick={() => handleApprove(id)} style={{backgroundColor:'transparent',border:'none'}}>Approve</button></DropdownItem>
          {/* <DropdownItem text>Dropdown Item Text</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

DropDownButton.propTypes = {
  direction: PropTypes.string,
};

export default DropDownButton;