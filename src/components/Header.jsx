import icons from "../assets/icons/main-icons/styles.css";
import { changeThemeAll } from "../utils/theme";
import { changeLanguage, menuList } from "../utils/main/general";

function Header() {
  return (
    <header id="header">
      <menu id="main-menu" className="main-menu-dark">
        <div id="start">
          <figure id="logo">
            <a href="index.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="124.006"
                height="124.006"
                viewBox="0 0 512 512"
              >
                <path
                  id="logo-svg"
                  className="logo"
                  d="M242.257,489.594c14.361,4.677,16.617,5.092,29.557-2.062,54.709-30.245,61.216-35.133,87.295-49.49,32.532-18.557,53.045-31.621,91.42-52.928,13.01-10.631,14.4-14.788,14.3-28.673-0.448-63.22-.119-164.332.134-205.031,0.036-5.921.006-15.149-17.6-26.192C392.848,91.026,285.2,29.215,267,20.811c-5.051-2.332-16.244-3.159-25.445,1.941-28.043,15.543-70.966,40.938-86.724,50.676,0,1.833,25.681,27.352,25.681,29.185C199.96,90.618,225.786,76,256.692,58.742c58.878,33.907,110.087,63.824,168.965,97.73,0,66.9-.312,131.251-0.312,198.148-59.337,34.365-110,64.74-169.34,99.105-58.421-33.907-111.233-68.511-169.653-102.418,0.458-67.813.542-97.685,1-165.5C86.726,176.634,86.02,176.319,97,170c6.588-4,17.969-15.256,27-14,14.773,2.054,9.978,20.076,10,25,0.184,40.459.507,21.854,0.161,26.321-0.425,30.321.333,127.707-.3,131.736H248.126c-0.061-8.521-.087-24.19-0.093-32.556,0-.531-76.736.847-76.736,0.317-0.008-20.029.094-34.547,0.094-55.543,0.324-70.493.1-47.265-.391-104.275-0.132-15.309-17.059-25.5-30-31-8.068-3.428-22.219-7.976-49,8-14.557,11.33-43.249,30.213-43.267,32.6-0.209,27.566-1.689,62.579-1.687,84.172V358.307c0.547,4.562.426,17.895,14.435,26.807C88.98,402.61,153.281,437.8,242.257,489.594ZM382.02,200.979H288.525v39.106c33.086-.2,57.4,0,90.487,0a3.639,3.639,0,0,1,3.008,3.61c0.155,10.575.086,16.058,0,24.666-1.617,2.609-2.7,3.209-4.813,3.008H288.525v64.374c-0.8,1.062-2.593,2.964-4.212,3.008-10.683.29-12.976,0.079-23.3,0-1.177.283-3.008-2.1-3.008-3.609V171.5a9.456,9.456,0,0,1,4.211-2.407H378.41c2.338,1.327,3.385,2.562,3.61,4.813C382.123,186.328,382.153,188.943,382.02,200.979Z"
                />
              </svg>
            </a>
          </figure>

          <div id="config">
            <ul>
              <li>
                <a id="btn-config" className="icon-cog"></a>
              </li>
              <li>
                <a
                  href="#"
                  id="btn-theme"
                  className="icon-adjust"
                  onClick={changeThemeAll}
                ></a>
                <span
                  id="effect-change-theme"
                  className="effect-change-theme"
                ></span>
              </li>
              <li>
                <a
                  id="btn-language"
                  className="english icon-lang"
                  onClick={changeLanguage}
                ></a>
              </li>
            </ul>
          </div>
        </div>

        <nav id="nav-bar">
          <button
            onClick={menuList}
            id="btn-menu-list"
            className="btn-menu-list"
            aria-label="Menu Button"
          >
            <div className="menu-icon-wrapper">
              <div className="menu-icon-line half first"></div>
              <div className="menu-icon-line"></div>
              <div className="menu-icon-line half last"></div>
            </div>
          </button>

          <ul id="nav-options">
            <li>
              <a href="#">
                <p className="es">Inicio</p>
                <p className="en">Home</p>
              </a>
            </li>
            <li>
              <a href="#about">
                <p className="es">Perfil</p>
                <p className="en">About</p>
              </a>
            </li>
            <li>
              <a href="#skills">
                <p className="es">Habilidades</p>
                <p className="en">Skills</p>
              </a>
            </li>
            <li>
              <a href="#projects">
                <p className="es">Proyectos</p>
                <p className="en">Projects</p>
              </a>
            </li>
            <li>
              <a href="#experience">
                <p className="es">Experiencia</p>
                <p className="en">Experience</p>
              </a>
            </li>
            <li>
              <a href="#contact">
                <p className="es">Contacto</p>
                <p className="en">Contact</p>
              </a>
            </li>
          </ul>

          <a
            id="btn-resume-header"
            className="btn btn-resume-header"
            href="cv.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resumen</span>
            <span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </span>
          </a>
        </nav>
      </menu>
    </header>
  );
}

export default Header;
