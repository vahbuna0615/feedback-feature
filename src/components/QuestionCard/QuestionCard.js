import './QuestionCard.css'
import {AiFillEye, AiOutlineExclamationCircle} from 'react-icons/ai';

const QuestionCard = () => {
  return(
    <div className="ques-card-frame">
      <div className="ques-card">
        <div className="tags">
          <p>Design</p>
          <p>Technology</p>
        </div>
        <p className="question-headline">
          A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. 
          What is the value of the partnership to the travel startup?
        </p>
        <p className="question-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Dolore eaque debitis iusto perspiciatis aut deserunt quam? Mollitia assumenda quis debitis.
        </p>
        <div className="ques-card-footer">
          <div style={{display:'flex', alignItems:'center'}}><AiFillEye size={15}/> <p style={{marginLeft: '3px'}}>100 views</p></div>
          <div style={{display:'flex', alignItems:'center'}}><AiOutlineExclamationCircle size={15}/><p style={{marginLeft: '3px'}}>How should you word your answer?</p></div>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard;