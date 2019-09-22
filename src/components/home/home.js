import React, { Component } from 'react'

export default class ContentHome extends Component {
    render() {
      return (
        <div>
  <style dangerouslySetInnerHTML={{__html: " \n\t.fullscreen-bg {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\toverflow: hidden;\n\tz-index: -100;\n\t}\n\n\t.fullscreen-bg__video {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t}\n\n\t@media (min-aspect-ratio: 16/9) {\n\t.fullscreen-bg__video {\n\t\theight: 300%;\n\t\ttop: -100%;\n\t}\n\t}\n\n\t@media (max-aspect-ratio: 16/9) {\n\t.fullscreen-bg__video {\n\t\twidth: 300%;\n\t\tleft: -100%;\n\t}\n\t}\n\n\t@media (max-width: 767px) {\n\t/* .fullscreen-bg {\n\t\tbackground: url('./images/about.jpg') center center / cover no-repeat;\n\t} */\n\n\t.fullscreen-bg__video {\n\t\t/* display: none; */\n\t}\n\t}\n\t" }} />
  <div className="fullscreen-bg">
    <video loop muted autoPlay poster="images/about.jpg" className="fullscreen-bg__video">
      <source src="particles.mp4" type="video/mp4" />
    </video>
  </div>
  <div id="colorlib-page">
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="colorlib-navbar-brand">
              {/* <a class="colorlib-logo" href="index.html">KodiakDesing</a> */}
            </div>
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i style={{color: '#ffffff !important'}} /></a>
          </div>
        </div>
      </div>
    </header>
    <div id="colorlib-hero" className="js-fullheight">
      {/* <div class="owl-carousel"> */}
      <div className="item">
        <div className="hero-flex js-fullheight">
          <div className="col-three-forth">
            <div className="hero-img js-fullheight" style={{backgroundImage: 'url(images/img_bg_3.4jpg)'}} />
          </div>
          <div className="col-one-forth js-fullheight">
            {/* <h2 class="number">03/03</h2> */}
            <div className="display-t js-fullheight">
              <div className="display-tc js-fullheight">
                <div className="text-inner">
                  <div className="desc">
                    {/* <span class="tag">Descubrir</span> */}
                    {/* <h2>Descubre nuevas opciones</h2> */}
                    <img src="./images/logo.png" alt="" width="300px" /><br /><br />
                    <p><a href="work.html" className="btn-view">Ver portafolio <i className="icon-arrow-right3" /></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div>
		</div> */}
    </div>
  </div></div>


        )
    }
  } 