import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Recommerce from "./pages/Recommerce";
import Home from "./pages/Home";
import Watches from "./pages/Watches";
import Electronics from "./pages/Electronics";
import Footwears from "./pages/Footwears";
import SportsFitness from "./pages/SportsFitness";
import HomeFurniture from "./pages/HomeFurniture";
import formPage from "./pages/formPage";
import FormPage from "./pages/formPage";
const App=() =>{
  const options=['Option 1','Option 2']
  return (
    <Router>
    <div className="bg-[#e6f1fc]">

      {/* Navbar */}
      <Navbar options={options}/>
        <Routes>
        {/* <Route path='/' element={<Deals/>} /> */}
      <Route path='/' element={<Home/>}/>
      <Route path='/Recommerce' element={<Recommerce/>}/>
      <Route path='/Watches' element={<Watches/>}/>
      <Route path='/Electronics' element={<Electronics/>}/>
      <Route path='/Footwears' element={<Footwears/>}/>
      <Route path='/Sports & Fitness' element={<SportsFitness/>}/>
      <Route path='/Home & Furniture' element={<HomeFurniture/>}/>
      <Route path='/formPage' element={<FormPage/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
