function Asides() {
  return (
    <div>
      <aside id="social" className="aside-social">
        <div className="box-social">
          <ul>
            <li>
              <a
                href="https://wa.me/527731295131"
                className="icon-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/DevLuisFernandoMC/"
                className="icon-facebook-f"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/luis-fernando-mendoza-0b188b19a/"
                className="icon-linkedin-in"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
          </ul>
          <span></span>
        </div>
      </aside>

      <aside id="email" className="aside-email">
        <div className="box-email">
          <a href="mailto:luifermen_07@outlook.com" className="icon-email">
            luifermen_07@outlook.com
          </a>
          <span></span>
        </div>
      </aside>
    </div>
  );
}

export default Asides;
