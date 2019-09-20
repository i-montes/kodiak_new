import React, { Component } from 'react'

export default class ContactContent extends Component {
    render() {
      return (
        <div id="colorlib-page">
  <header>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="colorlib-navbar-brand">
            <a className="colorlib-logo" href="/">KodiakDesing</a>
          </div>
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
        </div>
      </div>
    </div>
  </header>
  <div id="colorlib-contact">
    <div className="container">
      <div className="row text-center">
        <h2 className="bold">Contact</h2>
      </div>
      <div className="row">
        <div className="col-md-12 col-md-offset-0">
          <div className="row">
            <div className="col-md-4 animate-box">
              <h3>My Address</h3>
              <ul className="contact-info">
                <li><span><i className="icon-map5" /></span>88 West 21th Street, Suite 721 New York NY 10016</li>
                <li><span><i className="icon-phone4" /></span>+ 1235 2355 98</li>
                <li><span><i className="icon-envelope2" /></span><a href="#">info@yoursite.com</a></li>
                <li><span><i className="icon-globe3" /></span><a href="#">www.yoursite.com</a></li>
              </ul>
            </div>
            <div className="col-md-7 col-md-push-1 animate-box">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea name className="form-control" id cols={30} rows={7} placeholder="Message" defaultValue={""} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="submit" defaultValue="Send Message" className="btn btn-primary btn-submit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="colorlib-subscribe">
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
          <h2>Subscribe Newsletter</h2>
          <p>Subscribe our newsletter and get latest update</p>
        </div>
      </div>
      <div className="row animate-box">
        <div className="col-md-6 col-md-offset-3">
          <div className="row">
            <div className="col-md-12">
              <form className="form-inline qbstp-header-subscribe">
                <div className="col-three-forth">
                  <div className="form-group">
                    <input type="text" className="form-control" id="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="col-one-third">
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">Subscribe Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-pb-sm text-center">
            <div className="row">
              <div className="col-md-10">
                <h2>Office</h2>
                <p>291 South 21th Street, <br /> Suite 721 New York NY 10016</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-pb-sm text-center">
            <h2>Get in Touch</h2>
            <p><a href="#">noah@info.com</a></p>
          </div>
          <div className="col-md-4 col-pb-sm text-center">
            <h2>Social</h2>
            <p className="colorlib-social-icons">
              <a href="#"><i className="icon-facebook4" /></a>
              <a href="#"><i className="icon-twitter3" /></a>
              <a href="#"><i className="icon-googleplus" /></a>
              <a href="#"><i className="icon-dribbble2" /></a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              <span className="block">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}<br /></span> 
              <span className="block">Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

        )
    }
  } 