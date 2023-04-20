import React from "react";
import { Slider } from "../../layouts/slider/Slider";


export const Home = () => {
  return (
    <>
    <Slider />
    <div id="blog" className="blog-area">
      <div className="blog-inner area-padding" />
      <div className="blog-overly"></div>
      <div className="container " />
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="section-headline text-center">
            <h2>Bienvenidos a Clinica Fresh Smile</h2>
          </div>
        </div>
      </div>
      <div className="row" />
      <center>
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="single-blog">
            <div className="single-blog-img">
              <a href="blog.html">
                <img
                  className="image-inicio"
                  src="public/calendar.png"
                  alt=""
                />
              </a>
            </div>
            <br></br>
            <div className="blog-text">
              <h4>
                <a href="blog.html">Agenda Tu Cita</a>
              </h4>
              {/* <p>
                 Disfruta de nuestro procedimiento del Blanqueamiento dental con un 50% incluido con tu
                 paquete de ortodoncia , que esperas pregunta por el tuyo.
                </p> */}
            </div>
            <span>
              <a href="blog.html" className="ready-btn">
                Màs informaciòn
              </a>
            </span>
          </div>
        </div>
      </center>

      <center>
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="single-blog">
            <div className="single-blog-img">
              <a href="blog.html">
                <img className="image-inicio" src="public/dental.png" alt="" />
              </a>
            </div>
            <br></br>
            <div className="blog-text">
              <h4>
                <a href="blog.html">Tu Sede Más Cercana</a>
              </h4>
              {/* <p>
                  Obten tu evaluaciòn de Ortodoncia totalmente gratis yse atentido con nuestros profesionales
                </p> */}
            </div>
            <span>
              <a href="blog.html" className="ready-btn">
                Màs informaciòn
              </a>
            </span>
          </div>
        </div>
      </center>
      <center>
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="single-blog">
            <div className="single-blog-img">
              <a href="blog.html">
                <img className="image-inicio" src="public/equipo.png" alt="" />
              </a>
            </div>
            <br></br>
            <div className="blog-text">
              <h4>
                <a href="./src/assets/componentes/nosotros/">Sobre Nosotros</a>
              </h4>
              {/* <p>
                  Obten tu evaluaciòn de Ortodoncia totalmente gratis yse atentido con nuestros profesionales
                </p> */}
            </div>
            <span>
              <a href="blog.html" className="ready-btn">
                Màs informaciòn
              </a>
            </span>
          </div>
        </div>
      </center>

      <div id="team" className="our-team-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center"></div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>{" "}
        <div className="suscribe-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
                <div className="suscribe-text text-center">
                  <h3>Descubre Tu Clinica Más Cercana</h3>
                  <a className="sus-btn" href="#">
                    Agenda tu cita
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
<div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single-blog">
              <div className="single-blog-img">
                <a href="blog.html">
                    <img src="public/diseñosonrisa.jpg" alt=""/>
                  </a>
              </div>
              
              <div className="blog-text">
                <h4>
                   <a href="blog.html">Evaluaciòn Ortodòncia + Radiografia panoramica Gratis
                   Agenda tu cupo.</a>
                  </h4>
                <p>
                  Obten tu evaluaciòn de Ortodoncia totalmente gratis yse atentido con nuestros profesionales
                </p>
              </div>
              <span>
                  <a href="blog.html" className="ready-btn">Màs informaciòn</a>
                </span>
            </div>
          
          </div> */}
        {/* <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single-blog">
              <div className="single-blog-img">
                <a href="blog.html">
                    <img src="public/diseñosonrisa.jpg" alt=""/>
                  </a>
              </div>
              
              <div className="blog-text">
                <h4>
                   <a href="blog.html">Evaluaciòn Ortodòncia + Radiografia panoramica Gratis
                   Agenda tu cupo.</a>
                  </h4>
                <p>
                  Obten tu evaluaciòn de Ortodoncia totalmente gratis yse atentido con nuestros profesionales
                </p>
              </div>
              <span>
                  <a href="blog.html" className="ready-btn">Màs informaciòn</a>
                </span>
            </div>
          
          </div> */}
        {/* <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single-blog">
              <div className="single-blog-img">
                <a href="blog.html">
                    <img src="public/diseñosonrisa.jpg" alt=""/>
                  </a>
              </div>
              
              <div className="blog-text">
                <h4>
                   <a href="blog.html">Evaluaciòn Ortodòncia + Radiografia panoramica Gratis
                   Agenda tu cupo.</a>
                  </h4>
                <p>
                  Obten tu evaluaciòn de Ortodoncia totalmente gratis yse atentido con nuestros profesionales
                </p>
              </div>
              <span>
                  <a href="blog.html" className="ready-btn">Màs informaciòn</a>
                </span>
            </div>
          
          </div> */}
        <center>
          <div className="card">
            <img src="public/implantes.jpg" alt="" />
            <div className="card-body">
              <h2>
                <a href="blog.html">Los Implantes Dentales</a>
              </h2>
              {/* <p>dsfsd</p> */}
              {/* <a href="blog.html" className="ready-btn">VER MÁS</a> */}
            </div>
          </div>

          <div className="card">
            <img src="public/blanqueamientos.jpg" alt="" />
            <div className="card-body">
              <h2>
                <a href="blog.html">Blanqueamiento Dental</a>
              </h2>
              {/* <p>dsfsd</p> */}
              {/* <a href="blog.html" className="ready-btn">VER MÁS</a> */}
            </div>
          </div>

          <div className="card">
            <img src="public/diseñosonrisa.jpg" alt="" />
            <div className="card-body">
              <h2>
                <a href="blog.html">Diseños De Sonrisa</a>
              </h2>
              {/* <p>dsfsd</p> */}
              {/* <a href="blog.html" className="ready-btn">VER MÁS</a> */}
            </div>
          </div>
        </center>
        <div id="blog" className="blog-area">
          <div className="blog-inner area-padding">
            <div className="blog-overly"></div>
            <div className="container ">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="section-headline text-center">
                    <h2>Aquí Puedes Aprender Todo De La Ortodoncia</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <a href="clinica.html">
                        <img className="" src="public/periodoncia.jpg" alt="" />
                      </a>
                    </div>
                    <div className="blog-meta">
                      <span className="comments-type">
                        <i className="fa fa-comment-o"></i>
                        <a href="#">13 comments</a>
                      </span>
                      <span className="date-type">
                        <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                      </span>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <a href="blog.html">¿Qué es Periodoncia?</a>
                      </h4>
                    </div>
                    <span>
                      <a href="blog.html" className="ready-btn">
                        Leer
                      </a>
                    </span>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <a href="clinica.html">
                        <img className="" src="public/carillas2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="blog-meta">
                      <span className="comments-type">
                        <i className="fa fa-comment-o"></i>
                        <a href="#">13 comments</a>
                      </span>
                      <span className="date-type">
                        <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                      </span>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <a href="blog.html">¿Qué son Carillas?</a>
                      </h4>
                    </div>
                    <span>
                      <a href="blog.html" className="ready-btn">
                        Leer
                      </a>
                    </span>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <a href="clinica.html">
                        <img className="" src="public/endodoncia.png" alt="" />
                      </a>
                    </div>
                    <div className="blog-meta">
                      <span className="comments-type">
                        <i className="fa fa-comment-o"></i>
                        <a href="#">13 comments</a>
                      </span>
                      <span className="date-type">
                        <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                      </span>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <a href="blog.html">Endodoncia</a>
                      </h4>
                    </div>
                    <span>
                      <a href="blog.html" className="ready-btn">
                        Leer
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>{" "}
        <div className="suscribe-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
                <div className="suscribe-text text-center">
                  <h3>Descubre Tu Clinica Más Cercana</h3>
                  <a className="sus-btn" href="#">
                    Ver Clinicas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <center>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single-blog">
              <div className="single-blog-img">
                <a href="blog.html">
                  <img className="sedes" src="public/sede1.png" alt="" />
                </a>
              </div>
              <br></br>
              <div className="blog-text">
                <h4>
                  <a href="blog.html">Armenia</a>
                </h4>
                {/* <p>
                  Obten tu evaluaciòn de Ortodoncia totalmente gratis yse atentido con nuestros profesionales
                </p> */}
              </div>
              {/* <span>
                  <a href="blog.html" className="ready-btn">Màs informaciòn</a>
                </span> */}
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single-blog">
              <div className="single-blog-img">
                <a href="blog.html">
                  <img className="sedes" src="public/sede.png" alt="" />
                </a>
              </div>
              <br></br>
              <div className="blog-text">
                <h4>
                  <a href="blog.html">Tebaida</a>
                </h4>
                {/* <p>
                  Obten tu evaluaciòn de Ortodoncia totalmente gratis yse atentido con nuestros profesionales
                </p> */}
              </div>
              {/* <span>
                  <a href="blog.html" className="ready-btn">Màs informaciòn</a>
                </span> */}
            </div>
          </div>

          <div className="">
            <div className="single-blog">
              <div className="single-blog-img">
                <a href="blog.html">
                  <img className="sedes" src="public/sede3.png" alt="" />
                </a>
              </div>
              <br></br>
              <div className="blog-text">
                <h4>
                  <a href="blog.html">Génova</a>
                </h4>

                {/* <p>
                  Obten tu evaluaciòn de Ortodoncia totalmente gratis yse atentido con nuestros profesionales
                </p> */}
              </div>
              {/* <span>
                  <a href="blog.html" className="ready-btn">Màs informaciòn</a>
                </span> */}
            </div>
          </div>
        </center>
        <div id="portfolio" className="portfolio-area area-padding fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Galeria</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="awesome-project-content">
                <div className="col-md-4 col-sm-4 col-xs-12 design development">
                  <div className="single-awesome-project">
                    <div className="awesome-img">
                      <a href="#">
                        <img src="public/galeria9.jpg" alt="" />
                      </a>
                      <div className="add-actions text-center">
                        <div className="project-dec">
                          <a
                            className="venobox"
                            data-gall="myGallery"
                            href="public/galeria9.jpg"
                          >
                            <h4>Clinica</h4>
                            <span>Fresh Smile </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-12 design">
                  <div className="single-awesome-project">
                    <div className="awesome-img">
                      <a href="#">
                        <img src="public/galeria8.jpg" alt="" />
                      </a>
                      <div className="add-actions text-center">
                        <div className="project-dec">
                          <a
                            className="venobox"
                            data-gall="myGallery"
                            href="public/galeria8.jpg"
                          >
                            <h4>Clinica</h4>
                            <span>Fresh Smile </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-12 photo">
                  <div className="single-awesome-project">
                    <div className="awesome-img">
                      <a href="#">
                        <img src="public/galeria7.jpg" alt="" />
                      </a>
                      <div className="add-actions text-center">
                        <div className="project-dec">
                          <a
                            className="venobox"
                            data-gall="myGallery"
                            href="public/galeria7.jpg"
                          >
                            <h4>Clinica</h4>
                            <span>Fresh Smile </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-12 design">
                  <div className="single-awesome-project">
                    <div className="awesome-img">
                      <a href="#">
                        <img src="public/galeria4.jpg" alt="" />
                      </a>
                      <div className="add-actions text-center">
                        <div className="project-dec">
                          <a
                            className="venobox"
                            data-gall="myGallery"
                            href="public/galeria4.jpg"
                          >
                            <h4>Clinica</h4>
                            <span>Fresh Smile </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-12 photo development">
                  <div className="single-awesome-project">
                    <div className="awesome-img">
                      <a href="#">
                        <img src="public/galeria2.jpg" alt="" />
                      </a>
                      <div className="add-actions text-center">
                        <div className="project-dec">
                          <a
                            className="venobox"
                            data-gall="myGallery"
                            href="public/galeria2.jpg"
                          >
                            <h4>Creative Team</h4>
                            <span>Web design</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-12 development">
                  <div className="single-awesome-project">
                    <div className="awesome-img">
                      <a href="#">
                        <img src="public/galeria1.jpg" alt="" />
                      </a>
                      <div className="add-actions text-center text-center">
                        <div className="project-dec">
                          <a
                            className="venobox"
                            data-gall="myGallery"
                            href="public/galeria.1jpg"
                          >
                            <h4>Beautiful Flower</h4>
                            <span>Web Development</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-4 col-sm-4 col-xs-12 design photo">
          <div className="single-awesome-project">
            <div className="awesome-img">
              <a href="#"><img src="public/galeria1.jpg" alt="" /></a>
              <div className="add-actions text-center">
                <div className="project-dec">
                  <a className="venobox" data-gall="myGallery" href="public/galeria1.jpg">
                    <h4>Night Hill</h4>
                    <span>Photoshop</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <footer>
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="footer-content">
                  <div className="footer-head">
                    <div className="footer-logo">
                      <h2>
                        <span>F</span>resh<span> S</span>mile<span> C</span>
                        mills
                      </h2>
                    </div>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis.
                    </p>
                    <div className="footer-icons">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="footer-content">
                  <div className="footer-head">
                    <h4>Informacion</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                    <div className="footer-contacts">
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

              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="footer-content">
                  <div className="footer-head">
                    <h4>Instagram</h4>
                    <div className="flicker-img">
                      <a href="#">
                        <img src="public/blanqueamientos.jpg" alt=""></img>
                      </a>
                      <a href="#">
                        <img src="public/diseñosonrisa.jpg" alt=""></img>
                      </a>
                      <a href="#">
                        <img src="public/implantes.jpg" alt=""></img>
                      </a>
                      <a href="#">
                        <img src="public/img3.jpg" alt=""></img>
                      </a>
                      <a href="#">
                        <img src="public/img2.jpg" alt=""></img>
                      </a>
                      <a href="#">
                        <img src="public/image3.jpg" alt=""></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="copyright text-center">
                  <p>
                    &copy; Copyright <strong>Fresh Smile Cmills</strong>. All
                    Rights Reserved
                  </p>
                </div>
                <div className="credits">
                  Designed by{" "}
                  <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      </div>
    </div>
    </>
  );
};
