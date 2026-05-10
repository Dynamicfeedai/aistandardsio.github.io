import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Standards from './pages/Standards'
import StandardDetail from './pages/StandardDetail'
import Implementations from './pages/Implementations'
import ImplementationDetail from './pages/ImplementationDetail'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="standards" element={<Standards />} />
        <Route path="standards/:slug" element={<StandardDetail />} />
        <Route path="implementations" element={<Implementations />} />
        <Route path="implementations/:slug" element={<ImplementationDetail />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}
