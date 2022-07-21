import Research from './Components/Research/Research';
import './App.css'
import Project from './SanityClient/Project';
import NavBar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import Event from './Components/Events/Event';
import Gallery from './Components/Gallery/Gallery';
import Collabration from './Components/Collabration/collabration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import People from './Components/People/People';
import Footer from './Components/Footer/Footer';
// import project from '../../Sanity/schemas/project';

const App = () => {
  return <div className='App'>
     
     <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/research' element={<Research/>} />
        <Route path='/projects' element={<Project />} />
        <Route path='/events' element={<Event />} />
        {/* <Route path='/goats' component={Goats} /> */}
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/people' element={<People />} />
        <Route path='/collabration' element={<Collabration/>} />
       </Routes>
      <Footer />
    </BrowserRouter>
    </div>;
};

export default App;