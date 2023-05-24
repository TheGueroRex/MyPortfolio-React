import React, { useState } from 'react';

function Projects() {
  
  const [selectedElement, setSelectedElement] = useState(null);

  const showInfoProject = (elementId) => {
    setSelectedElement(elementId);
  };

  return (
    <section id="projects">
      <div className="container title-section projects-title">
        <h2>
          <p className="es">Proyectos</p>
          <p className="en">Projects</p>
        </h2>
      </div>
      <div className="container projects-description">
        <p className="es">
          Estos son algunos proyectos escolores y personales que he realizado,
          en donde puse en practica mis conocimientos y para reforzar mis
          habilidades.
        </p>
        <p className="en">
          These are some school and personal projects that I have done, where I
          put my knowledge into practice and to reinforce my skills.
        </p>
      </div>

      <div className="container">
        <div className="frame-projects">
          <div className="projects-row projects-row-up">
            <article
              onClick={() => showInfoProject('proyect-1')}
              // className="project-item"
              className={`project-item ${selectedElement === 'proyect-1' ? 'project-item-active' : ''}`}
              style={{
                "--project-item-img":
                  "url(https://github.com/TheGueroRex/React-App-expenses-and-income-manager/blob/main/Preview.png?raw=true)",
              }}
            >
              <div className="project-item-info">
                <div className="project-item-title">
                  <h3>Project 1</h3>
                </div>
                <div className="project-item-description">
                  <p className="es">
                    Esta es un aplicación hecha con React y Tailwind CSS para la
                    administración de gastos e ingresos personales
                  </p>
                  <p className="en">
                    This is an application made with React and Tailwind CSS for
                    managing personal income and expenses.
                  </p>
                </div>
                <div className="project-item-btn">
                  <a
                    href="https://github.com/TheGueroRex/React-App-expenses-and-income-manager"
                    id="btn-project-github"
                    className="icon-github"
                    target="_blank"
                  ></a>
                  <a
                    href="https://theguerorex.github.io/React-App-expenses-and-income-manager/"
                    id="btn-project-link"
                    className="icon-link"
                    target="_blank"
                  ></a>
                </div>
              </div>
            </article>

            <article
              onClick={() => showInfoProject('proyect-2')}
              // className="project-item"
              className={`project-item ${selectedElement === 'proyect-2' ? 'project-item-active' : ''}`}
              style={{ "--project-item-img": "url(https://unsplash.it/600)" }}
            >
              <div className="project-item-info">
                <div className="project-item-title">
                  <h3>Project 2</h3>
                </div>
                <div className="project-item-description">
                  <p>
                    I am currently an element for preview, work is being done on
                    the templates to preview a real project.
                  </p>
                </div>
                <div className="project-item-btn">
                  <a
                    href="#projects"
                    id="btn-project-github"
                    className="icon-github"
                  ></a>
                </div>
              </div>
            </article>

            <article
              onClick={() => showInfoProject('proyect-3')}
              // className="project-item"
              className={`project-item ${selectedElement === 'proyect-3' ? 'project-item-active' : ''}`}
              style={{ "--project-item-img": "url(https://unsplash.it/700)" }}
            >
              <div className="project-item-info">
                <div className="project-item-title">
                  <h3>Project 3</h3>
                </div>
                <div className="project-item-description">
                  <p>
                    I am currently an element for preview, work is being done on
                    the templates to preview a real project.
                  </p>
                </div>
                <div className="project-item-btn">
                  <a
                    href="#projects"
                    id="btn-project-github"
                    className="icon-github"
                  ></a>
                </div>
              </div>
            </article>

            <article
              onClick={() => showInfoProject('proyect-4')}
              // className="project-item"
              className={`project-item ${selectedElement === 'proyect-4' ? 'project-item-active' : ''}`}
              style={{ "--project-item-img": "url(https://unsplash.it/800)" }}
            >
              <div className="project-item-info">
                <div className="project-item-title">
                  <h3>Project 4</h3>
                </div>
                <div className="project-item-description">
                  <p>
                    I am currently an element for preview, work is being done on
                    the templates to preview a real project.
                  </p>
                </div>
                <div className="project-item-btn">
                  <a
                    href="#projects"
                    id="btn-project-github"
                    className="icon-github"
                  ></a>
                </div>
              </div>
            </article>

            <article
              onClick={() => showInfoProject('proyect-5')}
              // className="project-item"
              className={`project-item ${selectedElement === 'proyect-5' ? 'project-item-active' : ''}`}
              style={{ "--project-item-img": "url(https://unsplash.it/1000)" }}
            >
              <div className="project-item-info">
                <div className="project-item-title">
                  <h3>Project 5</h3>
                </div>
                <div className="project-item-description">
                  <p>
                    I am currently an element for preview, work is being done on
                    the templates to preview a real project.
                  </p>
                </div>
                <div className="project-item-btn">
                  <a
                    href="#projects"
                    id="btn-project-github"
                    className="icon-github"
                  ></a>
                </div>
              </div>
            </article>
          </div>

          <div className="projects-row projects-row-down">
            <article
              onClick={() => showInfoProject('proyect-1')}
              // className="project-item"
              className={`project-item ${selectedElement === 'proyect-1' ? 'project-item-active' : ''}`}
              style={{
                "--project-item-img":
                  "url(https://github.com/TheGueroRex/React-App-expenses-and-income-manager/blob/main/Preview.png?raw=true)",
              }}
            >
              <div className="project-item-info">
                <div className="project-item-title">
                  <h3>Project 1</h3>
                </div>
                <div className="project-item-description">
                  <p className="es">
                    Esta es un aplicación hecha con React y Tailwind CSS para la
                    administración de gastos e ingresos personales
                  </p>
                  <p className="en">
                    This is an application made with React and Tailwind CSS for
                    managing personal income and expenses.
                  </p>
                </div>
                <div className="project-item-btn">
                  <a
                    href="https://github.com/TheGueroRex/React-App-expenses-and-income-manager"
                    id="btn-project-github"
                    className="icon-github"
                    target="_blank"
                  ></a>
                  <a
                    href="https://theguerorex.github.io/React-App-expenses-and-income-manager/"
                    id="btn-project-link"
                    className="icon-link"
                    target="_blank"
                  ></a>
                </div>
              </div>
            </article>

            <article
              onClick={() => showInfoProject('proyect-2')}
              // className="project-item"
              className={`project-item ${selectedElement === 'proyect-2' ? 'project-item-active' : ''}`}
              style={{ "--project-item-img": "url(https://unsplash.it/600)" }}
            >
              <div className="project-item-info">
                <div className="project-item-title">
                  <h3>Project 2</h3>
                </div>
                <div className="project-item-description">
                  <p>
                    I am currently an element for preview, work is being done on
                    the templates to preview a real project.
                  </p>
                </div>
                <div className="project-item-btn">
                  <a
                    href="#projects"
                    id="btn-project-github"
                    className="icon-github"
                  ></a>
                </div>
              </div>
            </article>

            <article
              onClick={() => showInfoProject('proyect-3')}
              // className="project-item"
              className={`project-item ${selectedElement === 'proyect-3' ? 'project-item-active' : ''}`}
              style={{ "--project-item-img": "url(https://unsplash.it/700)" }}
            >
              <div className="project-item-info">
                <div className="project-item-title">
                  <h3>Project 3</h3>
                </div>
                <div className="project-item-description">
                  <p>
                    I am currently an element for preview, work is being done on
                    the templates to preview a real project.
                  </p>
                </div>
                <div className="project-item-btn">
                  <a
                    href="#projects"
                    id="btn-project-github"
                    className="icon-github"
                  ></a>
                </div>
              </div>
            </article>

            <article
              onClick={() => showInfoProject('proyect-4')}
              // className="project-item"
              className={`project-item ${selectedElement === 'proyect-4' ? 'project-item-active' : ''}`}
              style={{ "--project-item-img": "url(https://unsplash.it/800)" }}
            >
              <div className="project-item-info">
                <div className="project-item-title">
                  <h3>Project 4</h3>
                </div>
                <div className="project-item-description">
                  <p>
                    I am currently an element for preview, work is being done on
                    the templates to preview a real project.
                  </p>
                </div>
                <div className="project-item-btn">
                  <a
                    href="#projects"
                    id="btn-project-github"
                    className="icon-github"
                  ></a>
                </div>
              </div>
            </article>

            <article
              onClick={() => showInfoProject('proyect-5')}
              // className="project-item"
              className={`project-item ${selectedElement === 'proyect-5' ? 'project-item-active' : ''}`}
              style={{ "--project-item-img": "url(https://unsplash.it/1000)" }}
            >
              <div className="project-item-info">
                <div className="project-item-title">
                  <h3>Project 5</h3>
                </div>
                <div className="project-item-description">
                  <p>
                    I am currently an element for preview, work is being done on
                    the templates to preview a real project.
                  </p>
                </div>
                <div className="project-item-btn">
                  <a
                    href="#projects"
                    id="btn-project-github"
                    className="icon-github"
                  ></a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
