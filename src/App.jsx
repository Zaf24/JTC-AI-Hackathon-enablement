import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Stages from './pages/Stages'
import Stage0Step from './pages/Stage0Step'
import Stage1Overview from './pages/Stage1Overview'
import Stage1Step1 from './pages/Stage1Step1'
import Stage1Step2 from './pages/Stage1Step2'
import Stage1Step3 from './pages/Stage1Step3'
import Stage2Overview from './pages/Stage2Overview'
import Stage2Step1 from './pages/Stage2Step1'
import Stage2Step2 from './pages/Stage2Step2'
import Stage2Step3 from './pages/Stage2Step3'
import Stage3Overview from './pages/Stage3Overview'
import Stage3Step1 from './pages/Stage3Step1'
import Stage3Step2 from './pages/Stage3Step2'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/stage/0/step" element={<Stage0Step />} />
        <Route path="/stage/1" element={<Stage1Overview />} />
        <Route path="/stage/1/step/1.1" element={<Stage1Step1 />} />
        <Route path="/stage/1/step/1.2" element={<Stage1Step2 />} />
        <Route path="/stage/1/step/1.3" element={<Stage1Step3 />} />
        <Route path="/stage/2" element={<Stage2Overview />} />
        <Route path="/stage/2/step/2.1" element={<Stage2Step1 />} />
        <Route path="/stage/2/step/2.2" element={<Stage2Step2 />} />
        <Route path="/stage/2/step/2.3" element={<Stage2Step3 />} />
        <Route path="/stage/3" element={<Stage3Overview />} />
        <Route path="/stage/3/step/3.1" element={<Stage3Step1 />} />
        <Route path="/stage/3/step/3.2" element={<Stage3Step2 />} />
      </Routes>
    </Layout>
  )
}

export default App
