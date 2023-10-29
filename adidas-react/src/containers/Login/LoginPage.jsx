import {React, useState} from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Form } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
        email:email,
        password:password
    }
    console.log(payload)
    axios
        .post(`http://127.0.0.1:8000/api/login/validate`, payload)
        .then((response) => {
            console.log(response);
            if(response.data.message === "Login successful as Admin"){
              const userData = response.data.user;
              localStorage.setItem('admin', JSON.stringify(userData));
            }else if (response.data.message === "Login successful"){
              const userData = response.data.user;
              localStorage.setItem('user', JSON.stringify(userData));
              window.location.replace("/");
            }

        })
        .catch(error => {
            console.error(error);
        });

}

  return (
    <MDBContainer className="my-5"> 

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
              <Form onSubmit={handleSubmit}>
                <MDBInput  value={email}
                                onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput  value={password}
                                onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBBtn type='submit' className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
              </Form>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;