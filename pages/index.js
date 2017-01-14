import React       from 'react'
import Meta        from '../components/meta'
import Header      from '../components/header'
import Footer      from '../components/footer'
import HomeStats   from '../components/home-stats'
import DatasetList from '../components/dataset-list'

export default class extends React.Component {
  render () {
    return (
      <div>
        <Meta />
        <Header />
        <hr className="mw5 ml5 bb bw1 b--black-10" />
        <HomeStats />
        <hr className="mw5 ml5 bb bw1 b--black-10" />
        <DatasetList />
        <Footer />
      </div>
    )
  }
}
