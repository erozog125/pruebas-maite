import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div id="sticker" className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <nav className="navbar navbar-default">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target=".bs-example-navbar-collapse-1"
                    aria-expanded="true"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>

                  <a
                    className="navbar-brand page-scroll sticky-logo"
                    href="index.html"
                  >
                    <h1>
                      <span>F</span>resh<span>S</span>mile<span>C</span>mills
                    </h1>
                  </a>
                </div>
                <div
                  className="collapse show navbar-collapse main-menu bs-example-navbar-collapse-1"
                  id="navbar-example"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li className="">
                      <Link to="/">
                        <a className="page-scroll" href="#home">
                          Inicio
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Nosotros">
                        <a className="page-scroll" href="#about">
                          Nosotros
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Procedimientos">
                        <a className="page-scroll">Procedimientos</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/promociones">
                        <a className="page-scroll" href="/#">
                          Promociones
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Blog">
                        <a className="page-scroll" href="/#">
                          Blog
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Clinica">
                        <a className="page-scroll" href="/#">
                          Clinica
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
