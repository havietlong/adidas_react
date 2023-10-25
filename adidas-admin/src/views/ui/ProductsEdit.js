import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  // FormText,
} from "reactstrap";
// import Blog from "../../components/dashboard/Blog";
// import bg1 from "../../assets/images/bg/bg1.jpg";
// import bg2 from "../../assets/images/bg/bg2.jpg";
// import bg3 from "../../assets/images/bg/bg3.jpg";
// import bg4 from "../../assets/images/bg/bg4.jpg";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
// import { Products } from "../../../../adidas-react/src/containers/Products/Products";


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
  const { id } = useParams();
  return { id }; // Return the parameters as an object
}

const Cards = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  // const [name, setName] = useState("");
  // const [name, setName] = useState("");
  // const nameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      name: name,
      price: price,
      description:description,
      category:category,
      type:type
    }
    console.log(payload)
    axios
    .put(`http://127.0.0.1:8000/api/products/update/${id}`, payload)
    .then((response) => {
      console.log(response);
  
    })
    .catch(error => {
      console.error(error);
    });

  }

  
  const [data, setData] = useState([]);
  const { id } = FilterParam();


  useEffect(() => {
    

    const baseURL = 'http://127.0.0.1:8000/api/';

    const path = `${baseURL}product_info/${id}`;
    fetch(path)
      .then(response => response.json()) // Assuming the response can be parsed as JSON
      .then(data => { setData(data[0]); })
      .catch(error => console.error(error));
  }, [id]);


  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}

      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Form Example
            </CardTitle>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="exampleEmail">Product's name</Label>
                  <Input
                    id="exampleEmail"                
                    name="name"
                    placeholder={data.name_products || ''}
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>
                {/* <span>{nameRef}</span> */}
                <FormGroup>
                  <Label for="examplePassword">Price</Label>
                  <Input
                    id="examplePassword"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    name="price"
                    placeholder={data.price_products || ''}
                    type="number"
                  />
                </FormGroup>

                {/* <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input
                  id="exampleSelectMulti"
                  multiple
                  name="selectMulti"
                  type="select"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
                </FormGroup> */}
                <FormGroup>
                  <Label for="exampleText">Description</Label>
                  <Input value={description}
                    onChange={(e) => setDescription(e.target.value)} placeholder={data.description_products || ''} id="exampleText" name="description" type="textarea" />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleSelect">Categories</Label>
                  <Input value={category}
         
         onChange={(e) => setCategory(e.target.value)} id="exampleSelect" name="category" type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="exampleSelect">Type</Label>
                  <Input value={type}
         
                    onChange={(e) => setType(e.target.value)} id="exampleSelect" name="type" type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>

                {/* <FormGroup>
                  <Label for="exampleFile">File</Label>
                  <Input id="exampleFile" name="file" type="file" />
                  <FormText>
                    This is some placeholder block-level help text for the above
                    input. It's a bit lighter and easily wraps to a new line.
                  </FormText>
                </FormGroup> */}
                {/* <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check className="form-label">
                    Option one is this and that—be sure to include why it's
                    great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check className="form-label">
                    Option two can be something else and selecting it will
                    deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Input disabled name="radio1" type="radio" />{" "}
                  <Label check>Option three is disabled</Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check className="form-label">
                <Input type="checkbox" /> <Label check>Check me out</Label>
              </FormGroup> */}
                <Button className="mt-2">Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </div>
  );
};

export default Cards;
