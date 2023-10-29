import './App.css';
import Navbar from './components/Navbar';
import FeedbackFAB from './components/FeedbackFAB';

function App() {

  return (
    <>
      <Navbar/>
      <FeedbackFAB currentPage={'ffaf'}/>
    </>
  );
}

export default App;
