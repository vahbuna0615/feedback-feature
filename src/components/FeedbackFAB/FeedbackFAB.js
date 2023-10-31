import { useState } from "react";
import './FeedbackFAB.css';
import FAbutton from "../FAbutton/FAbutton";
import { BsFlagFill } from 'react-icons/bs';
import { MdThumbsUpDown } from 'react-icons/md';
import { MdEditNote } from 'react-icons/md';
import { LuMessagesSquare } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { RiFileEditFill } from 'react-icons/ri';

const FeedbackFAB = (props) => {
  const [isDisabled, setDisabled] = useState(true);
  const [divClass, setDivClass] = useState('FAbox');
  const [options, setOptions] = useState([]);

  const openOptions = () => {
    setDisabled(false);
    if (props.currentPage === 'landingPage'){
      setOptions([{name: 'Contact Us', type: 'contact-us', img: LuMessagesSquare}]);
    } else if (props.currentPage === 'conceptCards'){
      setOptions([{name: 'Report Issue', type: 'report-issue', img: BsFlagFill}, {name: 'Share Feedback', type: 'share-feedback', img: MdThumbsUpDown}, {name: 'Give Suggestions', type: 'give-suggestions', img: MdEditNote}]);
    } else {
      setOptions([{name: 'Report Issue', type: 'report-issue', img: BsFlagFill}, {name: 'Share Feedback', type: 'share-feedback', img: MdThumbsUpDown}, {name: 'Give Suggestions', type: 'give-suggestions', img: MdEditNote}, {name: 'Contact Us', type: 'contact-us', img: LuMessagesSquare}])
    }
  }

  const closeOptions = () => {
    setDisabled(true);
    setDivClass('FAbox')
  }

  const onOptionClick = () => {
    setDivClass('FAbox selec');
  }

  return (
      <div className={divClass}>

        {options.map((option) => {
          return (
            <FAbutton onClick={onOptionClick} disabled={isDisabled} name={option.name} type={option.type} img={option.img}/>
          )
        })}
        <FAbutton onClick={closeOptions} disabled={isDisabled} type={'close-action'} img={RxCross2}/>
        <FAbutton onClick={openOptions} disabled={!isDisabled} type={'main-action'} img={RiFileEditFill}/>
      </div>
  )

}

export default FeedbackFAB;