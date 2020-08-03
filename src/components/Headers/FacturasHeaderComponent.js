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
      items: [],
      dob: Date,
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

    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
            dob: new Date(result.results[0].dob.date),
          });
          let tmpDate = new Date();
          this.state.dob.setFullYear(tmpDate.getFullYear());
          let days = Math.floor((this.state.dob.getTime() - tmpDate.getTime()) / (1000 * 60 * 60 * 24));
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
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScroll);
  }

  render() {
    const { error, isLoaded, items, dob, days, weeks } = this.state;
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
                <Button href='#' className='btn-round mr-1' color='neutral' target='_blank' outline>
                  Registro
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
                <Button href='#' className='btn-round mr-1' color='neutral' target='_blank' outline>
                  Registro
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
                  Próximo: {items[0].name.first} {items[0].name.last}
                </h1>
                <h3>
                  {dob.getDate()} de {this.months[dob.getMonth()]}
                </h3>
                <br />
                <h3>Aprox {weeks} semanas</h3>
                <h2>{days} DIAS</h2>
              </div>
              <div className='motto text-right'>
                <Button href='#' className='btn-round mr-1' color='neutral' target='_blank' outline>
                  Registro
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
