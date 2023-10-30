import './QuestionCard.css'

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
          <div>100 views</div>
          <div>How should you word your answer?</div>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard;