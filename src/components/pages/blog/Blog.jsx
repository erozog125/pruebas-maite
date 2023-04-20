import React from "react";

export const Blog = () => {
  return (
    <div class="blog-page area-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="page-head-blog">
              <div class="single-blog-page">
                <form action="#">
                  <div class="search-option">
                    <input type="text" placeholder="Search..."></input>
                    <button class="button" type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div class="single-blog-page">
                <div class="left-blog">
                  <h4>Post Recientes</h4>
                  <div class="recent-post">
                    <div class="recent-single-post">
                      <div class="post-img">
                        <a href="#">
                          <img
                            src="https://www.ragaortodoncia.com/wp-content/uploads/2021/07/que-es-ortodoncia-baja-friccion-raga-1024x1024.jpg"
                            alt="Ortodoncia_Brackets"
                          />
                        </a>
                      </div>
                      <div class="pst-content">
                        <p>
                          <a href="#"> Ortodoncia con brackets</a>
                        </p>
                      </div>
                    </div>

                    <div class="recent-single-post">
                      <div class="post-img">
                        <a href="#">
                          <img
                            src="https://clinicablasi.com/wp-content/uploads/2018/11/invisaling-ortodoncia.jpg"
                            alt="Ortodoncia_Invisible"
                          />
                        </a>
                      </div>
                      <div class="pst-content">
                        <p>
                          <a href="#"> Ortodoncia invisible</a>
                        </p>
                      </div>
                    </div>

                    <div class="recent-single-post">
                      <div class="post-img">
                        <a href="#">
                          <img
                            src="https://bisodontologia.com/wp-content/uploads/2017/11/Estetica-Dental-Costado-300x300.jpg"
                            alt="Blanco_Dental"
                          />
                        </a>
                      </div>
                      <div class="pst-content">
                        <p>
                          <a href="#"> Blanqueamiento dental</a>
                        </p>
                      </div>
                    </div>

                    <div class="recent-single-post">
                      <div class="post-img">
                        <a href="#">
                          <img
                            src="https://www.dentoral.co/wp-content/uploads/2020/09/proceso-implante-dental-dentoral.jpg"
                            alt="Implan_Dental"
                          />
                        </a>
                      </div>
                      <div class="pst-content">
                        <p>
                          <a href="#"> Implantes Dentales</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-blog-page">
                <div class="left-blog">
                  <h4>Categorias</h4>
                  <ul>
                    <li>
                      <a href="#">Ortodoncia de Brackets</a>
                    </li>
                    <li>
                      <a href="#">Ortodoncia Invisible</a>
                    </li>
                    <li>
                      <a href="#">Blanqueamiento Dental</a>
                    </li>
                    <li>
                      <a href="#">Caries</a>
                    </li>
                    <li>
                      <a href="#">Ferula Dental</a>
                    </li>
                    <li>
                      <a href="#">Extraccion de Muelas</a>
                    </li>
                    <li>
                      <a href="#">Implantes Dentales</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div class="single-blog-page">
              <div class="left-blog">
                <h4>archive</h4>
                <ul>
                  <li>
                    <a href="#">07 July 2016</a>
                  </li>
                  <li>
                    <a href="#">29 June 2016</a>
                  </li>
                  <li>
                    <a href="#">13 May 2016</a>
                  </li>
                  <li>
                    <a href="#">20 March 2016</a>
                  </li>
                  <li>
                    <a href="#">09 Fabruary 2016</a>
                  </li>
                </ul>
              </div>
            </div> */}
              <div class="single-blog-page">
                <div class="left-tags blog-tags">
                  <div class="popular-tag left-side-tags left-blog">
                    <h4>Publicaciones</h4>
                    <ul>
                      <li>
                        <a href="#">Ferula Dental</a>
                      </li>
                      <li>
                        <a href="#">Caries</a>
                      </li>
                      <li>
                        <a href="#">Implantes Dentales</a>
                      </li>
                      <li>
                        <a href="#">Extraccion de Muelas</a>
                      </li>
                      <li>
                        <a href="#">Ortodoncia Invisible</a>
                      </li>
                      <li>
                        <a href="#">Tratamiento Periodontal</a>
                      </li>
                      <li>
                        <a href="#">Protesis Dental</a>
                      </li>
                      <li>
                        <a href="#">Ortodoncia de Brackets</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-8 col-sm-8 col-xs-12">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="single-blog">
                  <div class="single-blog-img">
                    <a href="blog-details.html">
                      <img
                        src="https://www.ragaortodoncia.com/wp-content/uploads/2021/07/que-es-ortodoncia-baja-friccion-raga-1024x1024.jpg"
                        alt="Ortodoncia_Brackets"
                      />
                    </a>
                  </div>
                  <div class="blog-meta">
                    <span class="comments-type">
                      <i class="fa fa-comment-o"></i>
                      <a href="#">11 comentarios</a>
                    </span>
                    <span class="date-type">
                      <i class="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div class="blog-text">
                    <h4>
                      <a href="#">Ortodoncia con brackets</a>
                    </h4>
                    <p>
                      Los tratamientos de ortodoncia están enfocados a la
                      corrección de la mordida, consiguiendo que los dientes
                      encajen a la perfección. Con una dentadura nivelada y
                      alineada la sonrisa no solo resulta más armónica, sino que
                      disfrutarás de una correcta distribución de las cargas
                      masticatorias.
                    </p>
                  </div>
                  <span>
                    <a href="blog-details.html" class="ready-btn">
                      Leer mas
                    </a>
                  </span>
                </div>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="single-blog">
                  <div class="single-blog-img">
                    <a href="blog-details.html">
                      <img
                        src="https://clinicablasi.com/wp-content/uploads/2018/11/invisaling-ortodoncia.jpg"
                        alt="Ortodoncia_Invisible"
                      />
                    </a>
                  </div>
                  <div class="blog-meta">
                    <span class="comments-type">
                      <i class="fa fa-comment-o"></i>
                      <a href="#">7 comentarios</a>
                    </span>
                    <span class="date-type">
                      <i class="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div class="blog-text">
                    <h4>
                      <a href="#">Ortodoncia Invisible</a>
                    </h4>
                    <p>
                      La ortodoncia invisible es un tipo de ortodoncia que
                      corrige la posición de los dientes sin la necesidad de
                      poner brackets; se diferencia de los tratamientos
                      tradicionales ya que en este tipo de tratamiento se
                      utilizan unos alineadores hechos de plástico, que son unas
                      placas transparentes de quitar y poner, las cuales deben
                      ser usadas el mayor tiempo posible.
                    </p>
                  </div>
                  <span>
                    <a href="blog-details.html" class="ready-btn">
                      Leer mas
                    </a>
                  </span>
                </div>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="single-blog">
                  <div class="single-blog-img">
                    <a href="blog-details.html">
                      <img src="img/blog/3.jpg" alt="" />
                    </a>
                  </div>
                  <div class="blog-meta">
                    <span class="comments-type">
                      <i class="fa fa-comment-o"></i>
                      <a href="#">13 comentarios</a>
                    </span>
                    <span class="date-type">
                      <i class="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div class="blog-text">
                    <h4>
                      <a href="#">Acerca De Nosotros</a>
                    </h4>
                    <p>
                      En el 2022 el equipo de trabajo tomo la decisión de crear
                      una pagina web con el fin de que las clínicas
                      odontológicas tengan un sistema más avanzado, para lograr
                      fusionar las especialidades de la odontología en varias
                      sedes de la región y lograr llamar el interés de otros
                      profesionales allegados en otros consultorios de sedes
                      cercanas en la región, con estándares de calidad en la
                      odontología actual y finalmente siendo Fresh Smile Cmills
                      nuestro unico proyecto.
                    </p>
                  </div>
                  <span>
                    <a href="blog-details.html" class="ready-btn">
                      Leer mas
                    </a>
                  </span>
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="single-blog">
                  <div class="single-blog-img">
                    <a href="blog-details.html">
                      <img src="img/blog/4.jpg" alt="" />
                    </a>
                  </div>
                  <div class="blog-meta">
                    <span class="comments-type">
                      <i class="fa fa-comment-o"></i>
                      <a href="#">1 comentarios</a>
                    </span>
                    <span class="date-type">
                      <i class="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div class="blog-text">
                    <h4>
                      <a href="#">Ortodoncia para niños</a>
                    </h4>
                    <p>
                      La ortodoncia en niños lo hacemos con el mayor cuidado y
                      responsabilidad en nuestros pequeños pacientes para que se
                      sientan seguros y tranquilos a la hora de realizar cuyo
                      procedimiento citado.
                    </p>
                  </div>
                  <span>
                    <a href="blog-details.html" class="ready-btn">
                      Leer mas
                    </a>
                  </span>
                </div>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="single-blog">
                  <div class="single-blog-img">
                    <a href="blog-details.html">
                      <img src="img/blog/5.jpg" alt="" />
                    </a>
                  </div>
                  <div class="blog-meta">
                    <span class="comments-type">
                      <i class="fa fa-comment-o"></i>
                      <a href="#">10 comentarios</a>
                    </span>
                    <span class="date-type">
                      <i class="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div class="blog-text">
                    <h4>
                      <a href="#">Procedimientos en brackets</a>
                    </h4>
                    <p>
                      Todo tratamiento de ortodoncia tiene un proceso desde que
                      acudes a tu ortodoncista, hasta que tu problema dentario
                      queda solucionado. En este artículo, vamos a ver cómo y
                      cuáles son dichas etapas. El proceso de ortodoncia implica
                      un conjunto de movimientos dentarios que se realizan para
                      mejorar la estética, función y masticación de tu boca.
                      Éste se divide en varias etapas hasta conseguir la sonrisa
                      deseada.
                    </p>
                  </div>
                  <span>
                    <a href="blog-details.html" class="ready-btn">
                      Leer mas
                    </a>
                  </span>
                </div>
              </div>
              <div class="blog-pagination">
                <ul class="pagination">
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li class="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
