import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from "./Components/About";
import Class from './Components/Class';
import Footer from "./Components/Footer";
import Header from './Components/Header';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Payment from './Components/Payment';
import Price from './Components/Price';
import Register from './Components/Register';
import Service from "./Components/Service";
import SignIn from './Components/SignIn';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/Payment" element={<Payment />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Class" element={<><Header title="Class" /> <Class /></>} />
        <Route exact path="/Price" element={<><Header title="Price" /> <Price /></>} />
        <Route exact path="/Service" element={<><Header title="Service" /> <Service /></>} />
        <Route exact path='/About' element={<><Header title="About Us" /> <About /></>} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;