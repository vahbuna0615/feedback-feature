import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeedbackFAB from '../components/FeedbackFAB/FeedbackFAB';

const UnderConstruction = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <FontAwesomeIcon icon={faPersonDigging} size="3x"/>
      <h2>Page under construction</h2>
      <FeedbackFAB currentPage={'conceptCards'}/>
    </div>
  )
}

export default UnderConstruction;