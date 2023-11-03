import { useState,useEffect } from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Link } from "react-router-dom";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

// const tableData = [
//   {
//     avatar: user1,
//     name: "Hanna Gover",
//     email: "hgover@gmail.com",
//     project: "Flexy React",
//     status: "pending",
//     weeks: "35",
//     budget: "95K",
//   },
//   {
//     avatar: user2,
//     name: "Hanna Gover",
//     email: "hgover@gmail.com",
//     project: "Lading pro React",
//     status: "done",
//     weeks: "35",
//     budget: "95K",
//   },
//   {
//     avatar: user3,
//     name: "Hanna Gover",
//     email: "hgover@gmail.com",
//     project: "Elite React",
//     status: "holt",
//     weeks: "35",
//     budget: "95K",
//   },
//   {
//     avatar: user4,
//     name: "Hanna Gover",
//     email: "hgover@gmail.com",
//     project: "Flexy React",
//     status: "pending",
//     weeks: "35",
//     budget: "95K",
//   },
//   {
//     avatar: user5,
//     name: "Hanna Gover",
//     email: "hgover@gmail.com",
//     project: "Ample React",
//     status: "done",
//     weeks: "35",
//     budget: "95K",
//   },
// ];

const   ProjectTables = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      const baseURL = 'http://127.0.0.1:8000/api/';
      const path = 'admin/orders'; // Replace with the actual API endpoint

      fetch(baseURL + path)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setData(data);})
          .catch((error) => console.error(error));
  }, []);

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

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Orders</CardTitle>
          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle> */}

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Receiver</th>
                <th>Phone Number</th>
                <th>Status</th>
                <th>Time</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order.id_orders} className="border-top">
                  {/* <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td> */}
                  <td>{order.id_orders}</td>
                  <td>{order.receiver_orders}</td>
                  <td>0{order.phoneNumber_orders}</td>
                  <td>
                    {order.status_orders == 1 ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : order.status_orders == 2 ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{order.created_at_orders}</td>
                  <td>{order.price_orders}</td>
                  <a href={'/admin/order_detail/'+order.id_orders} >View</a>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
