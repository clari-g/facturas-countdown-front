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
import ReactDOM from 'react-dom';

import ReactDatetime from 'react-datetime';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  FormGroup,
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
import FacturasHeaderComponent from 'components/Headers/FacturasHeaderComponent.js';
import FacturasFooter from 'components/Footers/FacturasFooter.js';

class FacturasRegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };

    document.documentElement.classList.remove('nav-open');
  }

  componentDidMount() {
    document.body.classList.add('profile-page');

    this.setState({
      isLoaded: true,
    });
  }

  componentWillUnmount() {
    document.body.classList.remove('profile-page');
  }

  render() {
    return (
      <>
        <FacturasNavbar />
        <FacturasHeaderComponent />
        <div className='main'>
          <div className='section landing-section'>
            <Container>
              <Row>
                <Col className='ml-auto mr-auto' md='8'>
                  <h2 className='text-center'>Registro</h2>
                  <Form className='contact-form'>
                    <Row>
                      <Col md='4'>
                        <label>Nombre</label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='nc-icon nc-single-02' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder='Nombre' type='text' />
                        </InputGroup>
                      </Col>
                      <Col md='4'>
                        <label>Apellido</label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='nc-icon nc-single-02' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder='Apellido' type='text' />
                        </InputGroup>
                      </Col>

                      <Col md='4'>
                        <label>Fecha de Nacimiento</label>
                        <Row>
                          <Col sm='12'>
                            <FormGroup>
                              <InputGroup className='date' id='datetimepicker'>
                                <ReactDatetime
                                  inputProps={{
                                    placeholder: 'Fecha de Nacimiento',
                                  }}
                                />
                                <InputGroupAddon addonType='append'>
                                  <InputGroupText>
                                    <span className='glyphicon glyphicon-calendar'>
                                      <i aria-hidden={true} className='fa fa-calendar' />
                                    </span>
                                  </InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
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
                      <Col md='6'>
                        <label>Celular</label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='nc-icon nc-mobile' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder='341 5 555 555' type='text' />
                        </InputGroup>
                      </Col>
                    </Row>
                    <label>Descripción</label>
                    <Input placeholder='Tell us your thoughts and feelings...' type='textarea' rows='1' />

                    <Row>
                      <Col className='ml-auto mr-auto' md='2'>
                        <Button className='btn-fill' color='primary' size='lg'>
                          Enviar
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
}

export default FacturasRegisterComponent;
