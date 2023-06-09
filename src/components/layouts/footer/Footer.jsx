import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div class="footer-area">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="footer-content">
                <div class="footer-head">
                  <div class="footer-logo">
                    <h2>
                      <span>F</span>resh<span> S</span>mile<span> C</span>mills
                    </h2>
                  </div>

                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </p>
                  <div class="footer-icons">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-google"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="footer-content">
                <div class="footer-head">
                  <h4>Informacion</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                  <div class="footer-contacts">
                    <p>
                      <span>Telefono:</span> +57 3204415807
                    </p>
                    <p>
                      <span>Email:</span> freshsmile@gmail.com
                    </p>
                    <p>
                      <span>Horario:</span> 7am-3pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="footer-content">
                <div class="footer-head">
                  <h4>Instagram</h4>
                  <div class="flicker-img">
                    <a href="#">
                      <img src="public/1.jpg" alt=""></img>
                    </a>
                    <a href="#">
                      <img src="public/2.jpg" alt=""></img>
                    </a>
                    <a href="#">
                      <img src="public/3.jpg" alt=""></img>
                    </a>
                    <a href="#">
                      <img src="public/4.jpg" alt=""></img>
                    </a>
                    <a href="#">
                      <img src="public/5.jpg" alt=""></img>
                    </a>
                    <a href="#">
                      <img src="public/6.jpg" alt=""></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-area-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="copyright text-center">
                <p>
                  &copy; Copyright <strong>Fresh Smile Cmills</strong>. All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
