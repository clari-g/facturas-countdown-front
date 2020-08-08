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
import React, { useState } from 'react';

import ReactDatetime from 'react-datetime';

// reactstrap components
import {
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Form,
  Alert,
  UncontrolledAlert,
} from 'reactstrap';

// core components
import FacturasNavbar from 'components/Navbars/FacturasNavbar.js';
import FacturasHeaderComponent from 'components/Headers/FacturasHeaderComponent.js';
import FacturasFooter from 'components/Footers/FacturasFooter.js';
import Axios from 'axios';
import $ from 'jquery';

class FacturasRegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _ok: false,
      _error: false,
      fields: {},
      errors: {},
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

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //name
    if (!fields['name']) {
      formIsValid = false;
      errors['name'] = 'Campo obligatorio';
    }

    if (typeof fields['name'] !== 'undefined') {
      if (!fields['name'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['name'] = 'Solo Letras';
      }
    }

    //lastname
    if (!fields['lastname']) {
      formIsValid = false;
      errors['lastname'] = 'Campo obligatorio';
    }

    if (typeof fields['lastname'] !== 'undefined') {
      if (!fields['lastname'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['lastname'] = 'Solo Letras';
      }
    }

    //date_birthday
    if (!fields['date_birthday']) {
      formIsValid = false;
      errors['date_birthday'] = 'Campo obligatorio';
    }

    //Email
    if (!fields['email']) {
      formIsValid = false;
      errors['email'] = 'Campo obligatorio';
    }

    if (typeof fields['email'] !== 'undefined') {
      let lastAtPos = fields['email'].lastIndexOf('@');
      let lastDotPos = fields['email'].lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields['email'].indexOf('@@') === -1 &&
          lastDotPos > 2 &&
          fields['email'].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors['email'] = 'Email invalido';
      }
    }

    //phone
    if (!fields['phone']) {
      formIsValid = false;
      errors['phone'] = 'Campo obligatorio';
    }

    if (typeof fields['phone'] !== 'undefined') {
      if (!fields['phone'].match(/549[0-9]{10}/)) {
        formIsValid = false;
        errors['phone'] = 'Número inválido (13 números en total)';
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      this.sendForm();
    } else {
      this.setState({ _error: true });
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    if (e._isAMomentObject) {
      fields[field] = e.format('YYYY-MM-DD');
    } else {
      fields[field] = e.target?.value ? e.target.value : '';
    }

    this.setState({ fields });
  }

  sendForm() {
    var apiBaseUrl = 'http://localhost:3000/usuarios/create';
    const self = this;
    Axios.post(apiBaseUrl, this.state.fields)
      .then(
        function (response) {
          self.clearForm();
          self.setState({ _ok: true });
          self.setState({ _error: false });
          $('html, body').animate(
            {
              scrollTop: 0,
            },
            750
          );
        },
        (error) => {
          console.log(error);
          self.setState({ _error: true });
        }
      )
      .catch(function (error) {
        console.log(error);
        self.setState({ _error: true });
      });
  }

  clearForm() {
    // limpia el formulario
    const fields = {};
    const errors = {};
    this.setState({ fields: fields, errors: errors });
    $('input, textarea, #date_birthday').val('');
  }

  render() {
    return (
      <>
        <FacturasNavbar />
        <FacturasHeaderComponent />
        <UncontrolledAlert
          color='success'
          isOpen={this.state._ok}
          toggle={() => {
            this.setState({ _ok: false });
          }}
        >
          <b>Gracias por registrarte!</b> Fuiste agregado con exito a la base de datos.
        </UncontrolledAlert>

        <UncontrolledAlert
          color='danger'
          isOpen={this.state._error}
          toggle={() => {
            this.setState({ _error: false });
          }}
        >
          <b>Un erro ah ocurrido.</b> Contactate con un administrador.
        </UncontrolledAlert>

        <div className='main'>
          <div className='section landing-section' id='registro'>
            <Container>
              <Row>
                <Col className='ml-auto mr-auto' md='8'>
                  <h2 className='text-center'>Registro</h2>
                  <Form
                    name='contact-form'
                    className='contact-form'
                    onSubmit={this.contactSubmit.bind(this)}
                    autoComplete='off'
                  >
                    <Row>
                      <Col md='4'>
                        <label>Nombre</label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='nc-icon nc-single-02' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Nombre'
                            type='text'
                            ref='name'
                            maxLength='30'
                            id='name'
                            onChange={this.handleChange.bind(this, 'name')}
                            value={this.state.fields['name']}
                          />
                        </InputGroup>
                        <span style={{ color: 'red' }}>{this.state.errors['name']}</span>
                      </Col>
                      <Col md='4'>
                        <label>Apellido</label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='nc-icon nc-single-02' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Apellido'
                            ref='lastname'
                            maxLength='30'
                            id='lastname'
                            onChange={this.handleChange.bind(this, 'lastname')}
                            value={this.state.fields['lastname']}
                          />
                        </InputGroup>
                        <span style={{ color: 'red' }}>{this.state.errors['lastname']}</span>
                      </Col>

                      <Col md='4'>
                        <label>Fecha de Nacimiento</label>
                        <Row>
                          <Col sm='12'>
                            <FormGroup>
                              <InputGroup className='date' id='datetimepicker'>
                                <ReactDatetime
                                  inputProps={{
                                    id: 'date_birthday',
                                    placeholder: 'Fecha de Nacimiento',
                                  }}
                                  dateFormat='YYYY-MM-DD'
                                  timeFormat={false}
                                  onChange={this.handleChange.bind(this, 'date_birthday')}
                                  closeOnSelect='true'
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
                            <span style={{ color: 'red' }}>{this.state.errors['date_birthday']}</span>
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
                          <Input
                            placeholder='Email'
                            refs='email'
                            type='text'
                            maxLength='30'
                            onChange={this.handleChange.bind(this, 'email')}
                            value={this.state.fields['email']}
                          />
                        </InputGroup>
                        <span style={{ color: 'red' }}>{this.state.errors['email']}</span>
                      </Col>
                      <Col md='6'>
                        <label>Celular</label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='nc-icon nc-mobile' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type='number'
                            placeholder='54 9 341 5 555 555 (sin espacios)'
                            onChange={this.handleChange.bind(this, 'phone')}
                            value={this.state.fields['phone']}
                          />
                        </InputGroup>
                        <span style={{ color: 'red' }}>{this.state.errors['phone']}</span>
                      </Col>
                    </Row>
                    <label>Descripción</label>
                    <Input
                      placeholder='Dejanos una descripción corta sobre vos!'
                      type='textarea'
                      maxLength='300'
                      onChange={this.handleChange.bind(this, 'description')}
                      value={this.state.fields['description']}
                    />

                    <Row>
                      <Col className='ml-auto mr-auto' md='2'>
                        <Button className='btn-fill' color='primary' size='lg' id='submit'>
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
