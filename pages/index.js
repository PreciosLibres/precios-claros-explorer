import React from 'react'

import Page from '../components/layout/home'
import Divider from '../components/ui/divider'
import Counter from '../components/counter'
import DatasetList from '../components/datasets-list'

import stats from '../_src/data/stats.json'
import datasets from '../_src/data/datasets.json'

export default () => (
  <div>
    <Page title="Inicio">
      <DatasetList datasets={ datasets } />
      <Divider />
      <Counter data={ stats }  />
    </Page>
  </div>
)
