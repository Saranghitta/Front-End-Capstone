import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage"
import Footer from "./Footer";


function App() {
  return (
    <>
      <div className='main-container'>
        <Header>
        </Header>
        <Router>
          <div>
            <Nav />
              <Routes>
                <Route path="/" element= {<HomePage/>} />
                <Route path="/reserve" element={<BookingPage/>}/>
              </Routes>
          </div>
        </Router>
        <Footer>
        </Footer>
      </div>
    </>
  );
}

export default App;
