import {menuListNone} from '../utils/main/general'

function NavBar() {
  
  return (
    <nav id="nav-bar-list" className="nav-bar-list">
      <ul className="menu-list">
        <li className="menu-list-item">
          <a onClick={menuListNone} className="menu-list-item-option" href="#"><p className="es">Inicio</p><p className="en">Home</p></a>
        </li>
        <li className="menu-list-item">
          <a onClick={menuListNone} className="menu-list-item-option" href="#about"><p className="es">Perfil</p><p className="en">About</p></a>
        </li>
        <li className="menu-list-item">
          <a onClick={menuListNone} className="menu-list-item-option" href="#skills"><p className="es">Habilidades</p><p className="en">Skills</p></a>
        </li>
        <li className="menu-list-item">
          <a onClick={menuListNone} className="menu-list-item-option" href="#projects"><p className="es">Proyectos</p><p className="en">Projects</p></a>
        </li>
        <li className="menu-list-item">
          <a onClick={menuListNone} className="menu-list-item-option" href="#experience"><p className="es">Experiencia</p><p className="en">Experience</p></a>
        </li>
        <li className="menu-list-item">
          <a onClick={menuListNone} className="menu-list-item-option" href="#contact"><p className="es">Contacto</p><p className="en">Contact</p></a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar