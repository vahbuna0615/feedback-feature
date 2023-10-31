import QuestionCard from "../components/QuestionCard/QuestionCard";
import {IoMdArrowDropdown} from 'react-icons/io';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import AnswerCard from "../components/AnswerCard/AnswerCard";
import FeedbackFAB from '../components/FeedbackFAB/FeedbackFAB';

const InterviewQuestions = () => {
  return(
    <>
      <div style={{display:'flex', fontSize:'22px', alignItems:'center'}}>
        <AiOutlineArrowLeft size={30}/>
        <p style={{marginLeft:'5px'}}>Back to Questions</p>
      </div>
      <QuestionCard/>
      <div style={{display:"flex", justifyContent:'space-around', margin: '15px 0'}}>
        <p>Answers (23)</p>
        <div style={{display:"flex"}}>
          <p>Sort By:</p>
          <button style={{backgroundColor:'#F8F8F8', border:'none', borderRadius:'3px', marginLeft:'5px'}}>
            <p style={{fontFamily:'Inter', fontSize: '12px'}}>Popular <IoMdArrowDropdown/></p>
          </button>
        </div>
      </div>
      <AnswerCard/>
      <FeedbackFAB currentPage={'interviewQuestions'}/>
    </>
  )

}

export default InterviewQuestions;