import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
      return (
        <nav id="colorlib-main-nav" role="navigation">
  <a href="#a" className="js-colorlib-nav-toggle colorlib-nav-toggle active">
    <i />
  </a>
  <div className="js-fullheight colorlib-table">
    <div className="colorlib-table-cell js-fullheight">
      <div className="row">
        <div className="col-md-12">
          <ul>
            <li className="active">
              <a href="/">Inicio</a>
            </li> 
            <li>
              <a href="/Portfolio">Portafolio</a>
            </li>
            <li>
              <a href="/Blog">Blog</a>
            </li>
            <li>
              <a href="/About">Acerca de nosotros</a>
            </li>
            <li>
              <a href="/Contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2 className="head-title">Gallery</h2>
          <a
            href="images/work-1.jpg"
            className="gallery image-popup-link text-center"
            style={{ backgroundImage: "url(images/work-1.jpg)" }}
          >
            <span>
              <i className="icon-search3" />
            </span>
          </a>
          <a
            href="images/work-2.jpg"
            className="gallery image-popup-link text-center"
            style={{ backgroundImage: "url(images/work-2.jpg)" }}
          >
            <span>
              <i className="icon-search3" />
            </span>
          </a>
          <a
            href="images/work-3.jpg"
            className="gallery image-popup-link text-center"
            style={{ backgroundImage: "url(images/work-3.jpg)" }}
          >
            <span>
              <i className="icon-search3" />
            </span>
          </a>
          <a
            href="images/work-4.jpg"
            className="gallery image-popup-link text-center"
            style={{ backgroundImage: "url(images/work-4.jpg)" }}
          >
            <span>
              <i className="icon-search3" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

        )
    }
  } 