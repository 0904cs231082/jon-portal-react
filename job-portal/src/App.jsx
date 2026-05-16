import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JobDetalis from './pages/JobDetails';
import SavedJobs from './pages/SavedJobs';

function App(){
  return(
    
    <>
    <h1>Hello</h1>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/job/:id' element={<JobDetalis/>}/>
      <Route path='/saved' element={<SavedJobs/>}/>
    </Routes>
    </>
  )
}

export default App;