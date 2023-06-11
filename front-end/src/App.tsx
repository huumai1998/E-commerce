// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Footer, Navigation } from './components';
import { Main } from './pages';

function App() {

  return (
    <>
    <>
      <Router>
        <Navigation />
        <Routes>
          <>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        </Routes>
        <Footer />
      </Router>
    </>
    </>
  )
}

export default App
