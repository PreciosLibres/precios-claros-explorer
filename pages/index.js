import React from 'react'

import Hero from '../components/hero'
import Page from '../components/home-page'
import Divider from '../components/divider'
import Counter from '../components/counter'
import DatasetList from '../components/datasets-list'

import stats from '../static/data/stats.json'
import datasets from '../static/data/datasets.json'

export default () => (
  <div>
    <Page title="Inicio">
      <Hero />
      <Divider />
      <DatasetList datasets={ datasets } />
      <Divider />
      <Counter data={ stats }  />
    </Page>
  </div>
)
