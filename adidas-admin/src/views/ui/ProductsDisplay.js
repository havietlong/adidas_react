import {
  Button,
  Row,
  Col,
} from "reactstrap";
import Blog from "../../components/dashboard/Blog";
import bg1 from "../../assets/images/bg/bg1.jpg";
import bg2 from "../../assets/images/bg/bg2.jpg";
import bg3 from "../../assets/images/bg/bg3.jpg";
import bg4 from "../../assets/images/bg/bg4.jpg";
import Modal from "./Modal";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


// const BlogData = [
//   {
//     image: bg1,
//     title: "This is simple blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg2,
//     title: "Lets be simple blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg3,
//     title: "Don't Lamp blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg4,
//     title: "Simple is beautiful",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
// ];

function FilterParam() {
  const { type, category } = useParams();
  console.log("The type is: " + type);
  console.log("The category is: " + category);

  return { type, category }; // Return the parameters as an object
}

const Cards = () => {
  const { type, category } = FilterParam();
  const [data, setData] = useState([]);

  useEffect(() => {

    const baseURL = 'http://127.0.0.1:8000/api/';

    if (type == null) {
      const path = `${baseURL}products`;
      console.log(path)
      fetch(path)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }
    else if (category === '' || category == null) {
      const path = `${baseURL}products/${type}`;
      console.log(path);
      fetch(path)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    } else if (category) {
      const path = `${baseURL}products/${type}/${category}`;
      console.log(path)
      fetch(path)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }


  }, [type, category]);
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}

      <Modal />

      <Row>
        {data.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.name_products}
              subtitle={blg.price_products}
              color={blg.btnbg}
              link={'/product_info/' + blg.id_products}
              del_link={'/product/delete/' + blg.id_products}
            />
          </Col>
        ))}
      </Row>

    </div>
  );
};

export default Cards;
