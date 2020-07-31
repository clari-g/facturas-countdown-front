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
import { Button, Container } from 'reactstrap';

// core components

function FacturasLandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform = 'translate3d(0,' + windowScrollTop + 'px,0)';
      };
      window.addEventListener('scroll', updateScroll);
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          // backgroundImage: 'url(' + require('assets/img/daniel-olahh.jpg') + ')',
          backgroundImage: 'url(' + require('assets/img/bg1.jpg') + ')',
        }}
        className='page-header'
        data-parallax={true}
        ref={pageHeader}
      >
        <div className='filter' />
        <Container>
          <div className='motto text-center'>
            <h1>Próximo: AAA AAA</h1>
            <h3>31 de Diciembre 2020</h3>
            <br />
            <h3>Aprox 123 semanas</h3>
            <h2>99 DIAS</h2>
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

export default FacturasLandingPageHeader;
