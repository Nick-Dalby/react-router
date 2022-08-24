import { Route, Routes } from 'react-router-dom'
import Page01 from './components/Page01'
import Page02 from './components/Page02'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/page-1" element={<Page01 />} />
        <Route path="/page-2" element={<Page02 />} />
      </Route>
    </Routes>
  )
}

export default App
