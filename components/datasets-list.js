import DatasetItem from './card'

export default ({ datasets=[] }) => (
  <div>
    <div className="cf">
      <h3 className="f6 ttu tracked mb4">
        <i className="fa fa-file-archive-o mr1" aria-hidden="true"></i>
        Datasets Publicados ({ datasets != null ? datasets.length : '0'  })
      </h3>
      {
        datasets.map((dataset, i) => (
          <DatasetItem key={ i }
            title={ dataset.title }
            description={ dataset.description }
            url={ dataset.url }
            button_text={ dataset.button_text }
          />
        ))
      }
    </div>
  </div>
)
