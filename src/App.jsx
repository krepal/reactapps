import{BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Websiteheader from "./components/Websiteheader";
import About from "./pages/About";
import Menubutton from "./components/Menubutton";
import Clubs from "./pages/Clubs";
import Projects from './pages/Projects';
import Internships from './pages/Internships';
import CSandDSCourses from "./pages/CSandDSCourses";
import Compsci577 from "./pages/compsci577"
import SearchBar from './components/SearchBar'

function App() {
  return (
    
    <>
    <BrowserRouter>
      <Routes>
          <Route index element = {<Home/> }/>
          <Route path = "about" element = {<About/>}/>
          <Route path = "clubs" element = {<Clubs/>}/>
          <Route path = "projects" element = {<Projects/>}/>
          <Route path = "internships" element = {<Internships/>}/>
          <Route path = "courses" element = {<CSandDSCourses/>}/> 
            <Route path = "courses/compsci577" element =  {<Compsci577/>}/> 
      </Routes>
    </BrowserRouter>

    {/* <div className = "App">
      <SearchBar placeholder = "Type something"/>
    </div> */}

    </>

    
    
  )
}

export default App
