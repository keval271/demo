import logo from './logo.svg';
import './App.css';
import './Media.css';

// React Routing
import { Routes, Route } from "react-router-dom"

// import Home from "./Home";
// import Tour from "./Tour";
// import Destination from "./Destination";
// import Pages from "./Pages";
// import Blog from "./Blog";
// import Contact from "./Contact";

// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'





// Icons
// import '../node_modules/font-awesome/css/font-awesome.min.css'



import Home from './component/Home';  
import Tour from './component/Tour';
import Destination from './component/Destination';
import Pages from './component/Pages';
import Blog from './component/Blog';
import Contacts from './component/Contacts';
import Navbar from './component/Navbar';




function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour/>} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>



    


      /* <Home />
      <Tour />
      <Destination />
      <Pages />
      <Blog />
      <Contact /> */
  );
}

export default App;
