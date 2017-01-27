import Page from '../components/inner-page'
import ProjectItem from '../components/card'

import projects from '../static/data/projects.json'

export default () => (
  <div>
    <Page title="Open Source">
      <p className="w-100 w-100-m w-50-l lh-copy mb5">
        A lo largo del proceso de apertura de los datos de Precios Libres
        desarrollamos un set de herramientas y abrimos el código a la
        comunidad para que <b>programadores</b>, <b>economistas</b>, <b>periodistas</b> o cualquier
        interesado pueda colaborar en alguno de los proyectos.
      </p>
      <div className="cf">
        {
          projects.map((project, i) => (
            <ProjectItem key={ i }
              title={ project.title }
              description={ project.description }
              url={ project.url }
            />
          ))
        }
      </div>
    </Page>
  </div>
)
