import Link from 'next/prefetch'

import Logo from './logo'
import Nav from './nav'

export default () => (
  <div>
    <header className="bg-white black-80 tc pv4 mb5 avenir">
      <Logo />
      <Nav />
    </header>
  </div>
)
