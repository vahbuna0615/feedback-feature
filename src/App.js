import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FeedbackFAB from './components/FeedbackFAB';
import LandingPage from './pages/LandingPage';
import InterviewQuestions from './pages/InterviewQuestions';
import ConceptCards from './pages/ConceptCards';
import PracticeQuestions from './pages/PracticeQuestions';
import Quizzes from './pages/Quizzes';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/dda' element={<LandingPage/>}></Route>
          <Route path='/concept-cards' element={<ConceptCards/>}></Route>
          <Route path='/practice-qs' element={<PracticeQuestions/>}></Route>
          <Route path='/' element={<InterviewQuestions/>}></Route>
          <Route path='/quizzes' element={<Quizzes/>}></Route>
        </Routes>
        <FeedbackFAB currentPage={'ffaf'}/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
