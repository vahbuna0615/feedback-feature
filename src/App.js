import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InterviewQuestions from './pages/InterviewQuestions';
import Footer from './components/Footer';
import UnderConstruction from './pages/UnderConstruction';


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<InterviewQuestions/>}></Route>
          <Route path='/concept-cards' element={<UnderConstruction/>}></Route>
          <Route path='/practice-qs' element={<UnderConstruction/>}></Route>
          <Route path='/quizzes' element={<UnderConstruction/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
