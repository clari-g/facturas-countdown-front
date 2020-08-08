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
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

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

import $ from 'jquery';

// core components

class FacturasHeaderComponent extends React.Component {
  pageHeader = React.createRef();
  months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isBirthday: false,
      items: [],
      dob: null,
      days: null,
      weeks: null,
    };
  }

  updateScroll = () => {
    if (window.innerWidth < 991) {
      let windowScrollTop = window.pageYOffset / 3;
      this.pageHeader.current.style.transform = 'translate3d(0,' + windowScrollTop + 'px,0)';
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.updateScroll);

    fetch('http://localhost:3000/getProximaFecha')
      //fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            // Test API
            // items: result.results,
            // dob: new Date(new Date(result.results.dob.date).toDateString()),
            // Facturas API
            items: result.items,
            dob: new Date(new Date(result.items.date_birthday).toDateString()),
          });

          let tmpDate = new Date(new Date().toDateString());
          this.state.dob.setFullYear(tmpDate.getFullYear());

          let days = (this.state.dob.getTime() - tmpDate.getTime()) / (1000 * 3600 * 24);
          let weeks = Math.round((this.state.dob.getTime() - tmpDate.getTime()) / (7 * 24 * 60 * 60 * 1000));

          if (weeks < 0) {
            this.setState({
              weeks: 99,
            });
          } else {
            this.setState({
              weeks: weeks,
            });
          }

          if (days < 0) {
            this.setState({
              days: 99,
            });
          } else {
            this.setState({
              days: days,
            });
          }

          // Modo Cumple
          if (days === 0) {
            this.setState({
              isBirthday: true,
            });
            this.party();
          }

          console.log(result);
          console.log(days, weeks);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

    $(document).ready(function () {
      $('[anchor="#register"]').click(function () {
        $('html, body').animate(
          {
            scrollTop: $('#registro').offset().top,
          },
          750
        );
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScroll);
  }

  party() {
    let colors = ['red', 'yellow', 'blue'];
    let size = 3;
    let startPos = -1;
    let speed = 2000;
    let cantidad = 100;

    setInterval(function () {
      let color = colors[Math.floor(Math.random() * 3 + 0)];
      let w = window.innerWidth;
      let h = window.innerHeight;

      let e = document.createElement('span');
      $(e).css('display', 'inline-block');
      $(e).css('width', size + 'px');
      $(e).css('height', size + 'px');
      $(e).css('background', color);
      $(e).css('position', 'fixed');
      $(e).css('top', startPos + 'px');
      $(e).css('left', Math.floor(Math.random() * w + 0) + 'px');
      $(e).css('z-index', '1000');
      $(e).animate({ top: h + 'px' }, speed, 'linear', function () {
        this.remove();
      });
      $('html').append(e);
    }, cantidad);
  }

  render() {
    const { error, isLoaded, isBirthday, items, dob, days, weeks } = this.state;
    if (error) {
      return (
        <>
          <div
            style={{
              // backgroundImage: 'url(' + require('assets/img/daniel-olahh.jpg') + ')',
              backgroundImage: 'url(' + require('assets/img/bg1.jpg') + ')',
            }}
            className='page-header'
            data-parallax={true}
            ref={this.pageHeader}
          >
            <div className='filter' />
            <Container>
              <div className='motto text-center'>
                <h1>Error {error.message}</h1>
              </div>
              <div className='motto text-right'>
                <Button anchor='#register' className='btn-round mr-1' color='neutral' outline>
                  <span>
                    <i className='nc-icon nc-minimal-down' /> Registro
                  </span>
                </Button>
              </div>
            </Container>
          </div>
        </>
      );
    } else if (!isLoaded) {
      return (
        <>
          <div
            style={{
              // backgroundImage: 'url(' + require('assets/img/daniel-olahh.jpg') + ')',
              backgroundImage: 'url(' + require('assets/img/bg1.jpg') + ')',
            }}
            className='page-header'
            data-parallax={true}
            ref={this.pageHeader}
          >
            <div className='filter' />
            <Container>
              <div className='motto text-center'>
                <h1>Cargando ...</h1>
              </div>
              <div className='motto text-right'>
                <Button anchor='#register' className='btn-round mr-1' color='neutral' outline>
                  <span>
                    <i className='nc-icon nc-minimal-down' /> Registro
                  </span>
                </Button>
              </div>
            </Container>
          </div>
        </>
      );
    } else if (isBirthday) {
      return (
        <>
          <div
            style={{
              // backgroundImage: 'url(' + require('assets/img/daniel-olahh.jpg') + ')',
              backgroundImage: 'url(' + require('assets/img/bg1.jpg') + ')',
            }}
            className='page-header'
            data-parallax={true}
            ref={this.pageHeader}
          >
            <div className='filter' />
            <Container>
              <div className='motto text-center'>
                <h1>
                  <b>¡ Feliz Cumpleaños !</b>
                </h1>
                <h1>
                  {items.name} {items.lastname}
                </h1>
                <br />
                <h3>
                  {dob.getDate()} de {this.months[dob.getMonth()]}
                </h3>
                <br />
              </div>
              <div className='motto text-right'>
                <Button anchor='#register' className='btn-round mr-1' color='neutral' outline>
                  <span>
                    <i className='nc-icon nc-minimal-down' /> Registro
                  </span>
                </Button>
              </div>
            </Container>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            style={{
              // backgroundImage: 'url(' + require('assets/img/daniel-olahh.jpg') + ')',
              backgroundImage: 'url(' + require('assets/img/bg1.jpg') + ')',
            }}
            className='page-header'
            data-parallax={true}
            ref={this.pageHeader}
          >
            <div className='filter' />
            <Container>
              <div className='motto text-center'>
                <h1>
                  Próximo:
                  <b>
                    {' ' + items.name} {items.lastname}
                  </b>
                </h1>
                <h2>
                  {dob.getDate()} de {this.months[dob.getMonth()]}
                </h2>
                <br />
                <h3>Aprox {weeks} semanas</h3>
                <h1>
                  <b>{days} DIAS</b>
                </h1>
              </div>
              <div className='motto text-right'>
                <Button anchor='#register' className='btn-round mr-1' color='neutral' outline>
                  <span>
                    <i className='nc-icon nc-minimal-down' /> Registro
                  </span>
                </Button>
              </div>
            </Container>
          </div>
        </>
      );
    }
  }
}

export default FacturasHeaderComponent;
