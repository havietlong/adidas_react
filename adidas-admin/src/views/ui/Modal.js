import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import axios from 'axios';

function Example(args) {
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
            description: description,
            category: category,
            type: type
        }
        console.log(payload)
        axios
            .post(`http://127.0.0.1:8000/api/products/add`, payload)
            .then((response) => {
                console.log(response);

            })
            .catch(error => {
                console.error(error);
            });

    }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '20px' }}>
                Add +
            </Button>
            <Modal size="xl" isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="exampleEmail">Product's name</Label>
                            <Input
                                id="exampleEmail"
                                name="name"
                                placeholder="name"
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
                                placeholder="price"
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
                                onChange={(e) => setDescription(e.target.value)} placeholder="description" id="exampleText" name="description" type="textarea" />
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
                        <ModalFooter>
                            <Button color="primary" type='submit' onClick={toggle}>
                                Do Something
                            </Button>{' '}
                            <Button color="secondary" onClick={toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Form>
                </ModalBody>

            </Modal>
        </div>
    );
}

export default Example;