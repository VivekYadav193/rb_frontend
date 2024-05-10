import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/restaurants" element={<Restaurant/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
