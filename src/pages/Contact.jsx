function Contact() {
  return (
    <section id="contact">
        
        <div className="bg-colored-moons">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="1920" height="850" preserveAspectRatio="none" viewBox="0 0 1920 850">
            <g clipPath="url(&quot;#SvgjsClipPath1437&quot;)" fill="none">
                <circle className="bg-moon-animation" r="42.775" cx="61.01" cy="1.13" fill="rgba(0, 238, 247, 1)"></circle>
                <circle className="bg-moon-animation" r="24" cx="1344.24" cy="715.2" fill="rgba(248, 171, 3, 1)"></circle>
                <circle className="bg-moon-animation" r="47.57" cx="1543.66" cy="788.6" fill="rgba(0, 238, 247, 1)"></circle>
                <circle className="bg-moon-animation" r="76.4" cx="241.55" cy="820.21" fill="rgba(99, 83, 245, 1)"></circle>
                <circle className="bg-moon-animation" r="35.425" cx="1315.52" cy="622.21" fill="rgba(99, 83, 245, 1)"></circle>
                <circle className="bg-moon-animation" r="71.31" cx="1915" cy="812.09" fill="rgba(99, 83, 245, 1)"></circle>
                <circle className="bg-moon-animation" r="52.065" cx="1658.39" cy="109.93" fill="url(#SvgjsLinearGradient1438)"></circle>
                <circle className="bg-moon-animation" r="22.77" cx="340.13" cy="532.05" fill="rgba(248, 171, 3, 1)"></circle>
            </g>
            <defs>
                <clipPath id="SvgjsClipPath1437">
                    <rect width="1920" height="850" x="0" y="0"></rect>
                </clipPath>
                <linearGradient x1="1762.5200000000002" y1="5.800000000000011" x2="1554.2600000000002" y2="214.06" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1438">
                    <stop stopColor="#32325d" offset="0.1"></stop>
                    <stop stopColor="rgba(155, 81, 224, 1)" offset="0.9"></stop>
                </linearGradient>
            </defs>
        </svg>
        </div>

        <div className="container title-section contact-title">
          <h2>
            <p className="es">Contactame</p>
            <p className="en">Get in Touch</p>
          </h2>
        </div>
        <div className="container">
          <div className="frame-contact">

            <canvas id="canvas"></canvas>

            <div className="frame-form">

              <form id="form-contact" className="form-contact" action="https://formspree.io/f/myyvazek" method="POST">
                
                <div className="form-input">
                  <input type="text" name="Nombre" id="name" required="required" />
                  <label><p className="es">Nombre</p><p className="en">Name</p></label>
                </div>
                <div className="form-input">
                  <input type="text" name="Email" id="mail" required="required" />
                  <label>Email</label>
                </div>
                <div className="form-input">
                  <input type="text" name="Telefono" id="phone" required="required" />
                  <label><p className="es">Telefono</p><p className="en">Phone</p></label>
                </div>
                <div className="form-input">
                  <textarea name="Mensaje" id="message" cols="30" rows="10" required="required"></textarea>
                  <label><p className="es">Mensaje</p><p className="en">Message</p></label>
                </div>

                <button type="submit" id="btn-contact" className="ready">
  
                  <div className="message submitMessage">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.77193 11.1754C3.36257 10.7661 3.12866 10.3041 3.07018 9.78947C3.02339 9.27485 3.1462 8.80117 3.4386 8.36842C3.73099 7.93567 4.15789 7.63158 4.7193 7.45614L17.4737 3.70175C18.0585 3.52632 18.6023 3.55556 19.1053 3.78947C19.6199 4.0117 19.9883 4.38012 20.2105 4.89474C20.4444 5.39766 20.4737 5.94152 20.2982 6.52632L16.5439 19.2632C16.3801 19.8246 16.0819 20.2573 15.6491 20.5614C15.2164 20.8538 14.7368 20.9766 14.2105 20.9298C13.6959 20.8713 13.2339 20.6374 12.8246 20.2281L9 16.4211L13.7018 11.7018C13.9006 11.5146 14 11.2807 14 11C14 10.7193 13.9006 10.4854 13.7018 10.2982C13.5146 10.0994 13.2807 10 13 10C12.7193 10 12.4854 10.0994 12.2982 10.2982L7.57895 15L3.77193 11.1754Z" fill="#6353f5"/>
                    </svg>

                    <span className="button-text"><p className="es">Contactar</p><p className="en">Contact</p></span>
                  </div>
                  
                  <div className="message loadingMessage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17">
                      <circle className="loadingCircle" cx="2.2" cy="10" r="2"/>
                      <circle className="loadingCircle" cx="9.5" cy="10" r="2"/>
                      <circle className="loadingCircle" cx="16.8" cy="10" r="2"/>
                    </svg>
                  </div>
                  
                  <div className="message successMessage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 11">
                      <polyline stroke="currentColor" points="1.4,5.8 5.1,9.5 11.6,2.1 "/>
                    </svg> <span className="button-text"><p className="es">Enviado</p><p className="en">Send</p></span>
                  </div>
                  
                </button>

              </form>

              <ul>
                <li className="contact-btn-social">
                  <a href="https://wa.me/527731295131" className="icon-whatsapp" target="_blank" rel="noopener noreferrer"></a>
                </li>
                <li className="contact-btn-social">
                  <a href="https://www.facebook.com/DevLuisFernandoMC/" className="icon-facebook-f" target="_blank" rel="noopener noreferrer"></a>
                </li>
                <li className="contact-btn-social">
                  <a href="https://www.linkedin.com/in/luis-fernando-mendoza-0b188b19a/" className="icon-linkedin-in" target="_blank" rel="noopener noreferrer"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>
  )
}

export default Contact