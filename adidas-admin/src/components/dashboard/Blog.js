import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Blog = (props) => {
  return (
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText className="mt-3">{props.text}</CardText>
        <div className="d-flex justify-content-between">
        <Link to={props.link}><Button color={props.color}>Edit</Button></Link>
        <Link to={props.del_link}><Button color={props.color}><i class="bi bi-trash3-fill"></i></Button></Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default Blog;
