import React, { Component } from 'react'

export default class ContentHome extends Component {
    render() {
      return (
        <div id="colorlib-page">
  <header>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="colorlib-navbar-brand">
            <a className="colorlib-logo" href="/">
              KodiakDesing
            </a>
          </div>
          <a href="#a" className="js-colorlib-nav-toggle colorlib-nav-toggle">
            <i />
          </a>
        </div>
      </div>
    </div>
  </header>
  <div id="colorlib-hero" className="js-fullheight">
    <div className="owl-carousel">
      <div className="item">
        <div className="hero-flex js-fullheight">
          <div className="col-three-forth">
            <div
              className="hero-img js-fullheight"
              style={{ backgroundImage: "url(images/slider_home/2651929.png)" }}
            />
          </div>
          <div className="col-one-forth js-fullheight">
            <div className="display-t js-fullheight">
              <div className="display-tc js-fullheight">
                {/* <h2 class="number">01/03</h2> */}
                <div className="text-inner">
                  <div className="desc">
                    <span className="tag">Bienvenido</span>
                    <h2>DESARROLLO WEB.</h2>
                    <p>
                    Concepto claro + Diseño atractivo + Desarrollo preciso = ¡Página web asombrosa! Para esto, nos apoyamos en metodologías ágiles como Kanban, Scrum, conversión en mente, y otros.
                    </p>
                    <p>
                      <a href="/Portfolio" className="btn-view">
                        Ver portafolio <i className="icon-arrow-right3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="hero-flex js-fullheight">
          <div className="col-three-forth">
            <div
              className="hero-img js-fullheight"
              style={{ backgroundImage: "url(images/slider_home/340668-PA9Q77-236.png)" }}
            />
          </div>
          <div className="col-one-forth js-fullheight">
            <div className="display-t js-fullheight">
              <div className="display-tc js-fullheight">
                {/* <h2 class="number">02/03</h2> */}
                <div className="text-inner">
                  <div className="desc">
                    {/* <span class="tag">Photography</span> */}
                    <h2>DESARROLLO DE APLICACIONES.</h2>
                    <p>
                    Más de 15.900 horas de desarrollo...y contando. iOS, Android, API’s, cloud backend… Nómbralo, y ¡lo hacemos!
                    </p>
                    <p>
                      <a href="/Portfolio" className="btn-view">
                        Ver portafolio <i className="icon-arrow-right3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="hero-flex js-fullheight">
          <div className="col-three-forth">
            <div
              className="hero-img js-fullheight"
              style={{ backgroundImage: "url(images/slider_home/2849327.png)" }}
            />
          </div>
          <div className="col-one-forth js-fullheight">
            {/* <h2 class="number">03/03</h2> */}
            <div className="display-t js-fullheight">
              <div className="display-tc js-fullheight">
                <div className="text-inner">
                  <div className="desc">
                    <span className="tag">Descubrir</span>
                    <h2>Posicionamiento en Google + Redes</h2>
                    <p>
                    Convertimos a tu Empresa en un referente del segmento pagando solo por clic o resultado.
                    </p>
                    <p>
                      <a href="/Portfolio" className="btn-view">
                        Ver portafolio <i className="icon-arrow-right3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
  } 