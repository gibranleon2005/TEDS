import { useState } from 'react'
import { imageDB } from './data/imageData'
import pageLogo from './assets/logo.svg'
import './App.css'

function App() {
  return (
    <>
      <section id="header">
        <section id="headerLeft">
          <button type="button" className="link">
            SiteMap
          </button>
          <button type="button" className="link">
            TaskFlows
          </button>
          <button type="button" className="link">
            Atencion
          </button>
          <button type="button" className="link">
            Diagnostica
          </button>
          <button type="button" className="link">
            ExperienceStack
          </button>
        </section>

        <section id="headerRight">
          <img src={pageLogo} id="pageLogo" alt="Logo de la pagina" />
        </section>
      </section>

      <section id="body">
        <div className="objects">
        </div>

        <section className="grid-objects">
          {imageDB.map((imagen) =>
          (
            <article key={imagen.id} className="object-card">
              <img src={imagen.url} alt={imagen.titulo} />
            </article>
          ))}
        </section>
      </section >
    </>
  )
}

export default App
