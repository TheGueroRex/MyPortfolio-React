import favicon from '../assets/icons/favicon.png'

function Experience() {
  return (
    <section id="experience">
          <div className="container title-section experience-title">
            <h2>
              <p className="es">Experiencia</p>
              <p className="en">Experience</p>
            </h2>
          </div>
          <div className="container">
            <div className="frame-experience">
  
              <div className="works-time-line">
                <span className="line-span"></span>
                <figure className="works-avtar-user">
                  <img src={favicon} alt="" />
                </figure>
                <div className="work-item work-1">
                  <div className="work-item-info">
                    <div className="work-item-title">
                      <h3>ITSOEH</h3>
                    </div>
                    <div className="work-item-description">
                      <p className="es">Desarrollador/Investigador</p>
                      <p className="en">Developer/Researcher</p>
                    </div>
                    <div className="work-item-date">
                      <h4><p className="es">Enero 2022 - Junio 2022</p><p className="en">January 2022 - June 2022s</p></h4>
                    </div>
                  </div>
                  <span className="triangle-left"></span>
                </div>
                <div className="work-item work-item-right work-2">
                  <span className="triangle-right"></span>
                  <div className="work-item-info work-item-info-right">
                    <div className="work-item-title">
                      <h3>Freelancer</h3>
                    </div>
                    <div className="work-item-description">
                      <p className="es">Desarrollo de proyectos personales</p>
                      <p className="en">Development of personal projects</p>
                    </div>
                    <div className="work-item-date">
                      <h4><p className="es">Septiembre 2022 - Actualidad</p><p className="en">September 2022 - Present</p></h4>
                    </div>
                  </div>
                </div>
                <div className="work-item work-3">
                  <div className="work-item-info">
                    <div className="work-item-title" style={{height : "60px"}}>
                      <h3><p className="es">Por descubrir</p><p className="en">to discover</p></h3>
                    </div>
                    {/* <div className="work-item-description">
                      <p>Puesto en empresa</p>
                    </div>
                    <div className="work-item-date">
                      <h4>Perido</h4>
                    </div> */}
                  </div>
                  <span className="triangle-left"></span>
                </div>
              </div>

            </div>
          </div>
        </section>
  )
}

export default Experience