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
        <HomeStats />
        <DatasetList />
        <Footer />
      </div>
    )
  }
}
