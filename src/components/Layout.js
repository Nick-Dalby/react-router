import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
      <h1>hello</h1>
      <Link to="/page-1">Page1</Link>
      <Link to="/page-2">Page2</Link>
      <Outlet />
    </main>
  )
}
export default Layout
