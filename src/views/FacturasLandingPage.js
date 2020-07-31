/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import FacturasNavbar from 'components/Navbars/FacturasNavbar.js';
import FacturasLandingPageHeader from 'components/Headers/FacturasLandingPageHeader.js';
import FacturasFooter from 'components/Footers/FacturasFooter.js';

function FacturasLandingPage() {
  document.documentElement.classList.remove('nav-open');
  React.useEffect(() => {
    document.body.classList.add('profile-page');
    return function cleanup() {
      document.body.classList.remove('profile-page');
    };
  });
  return (
    <>
      <FacturasNavbar />
      <FacturasLandingPageHeader />
      <div className='main'>
        <div className='section landing-section'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' md='8'>
                <h2 className='text-center'>Keep in touch?</h2>
                <Form className='contact-form'>
                  <Row>
                    <Col md='6'>
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='nc-icon nc-single-02' />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder='Name' type='text' />
                      </InputGroup>
                    </Col>
                    <Col md='6'>
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='nc-icon nc-email-85' />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder='Email' type='text' />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input placeholder='Tell us your thoughts and feelings...' type='textarea' rows='4' />
                  <Row>
                    <Col className='ml-auto mr-auto' md='4'>
                      <Button className='btn-fill' color='danger' size='lg'>
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FacturasFooter />
    </>
  );
}

export default FacturasLandingPage;
