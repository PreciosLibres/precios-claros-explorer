import React from 'react'

import Meta from '../components/meta'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Divider from '../components/divider'
import Counter from '../components/counter'
import DatasetList from '../components/datasets-list'

import stats from '../static/data/stats.json'
import datasets from '../static/data/datasets.json'

export default () => (
  <div>
    <Meta title="Home" />
    <Hero />
    <Divider />
    <DatasetList datasets={ datasets } />
    <Divider />
    <Counter data={ stats }  />
    <Footer />
  </div>
)
