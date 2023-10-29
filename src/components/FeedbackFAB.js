import { useState } from "react";
import FAbutton from "./FAbutton";
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
      setOptions([{type: 'contact-us', img: LuMessagesSquare}]);
    } else if (props.currentPage === 'conceptCards'){
      setOptions([{type: 'report-issue', img: BsFlagFill}, {type: 'share-feedback', img: MdThumbsUpDown}, {type: 'give-suggestions', img: MdEditNote}]);
    } else {
      setOptions([{type: 'report-issue', img: BsFlagFill}, {type: 'share-feedback', img: MdThumbsUpDown}, {type: 'give-suggestions', img: MdEditNote}, {type: 'contact-us', img: LuMessagesSquare}])
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
          <FAbutton onClick={onOptionClick} disabled={isDisabled} type={option.type} img={option.img}/>
        )
      })}
      <FAbutton onClick={closeOptions} disabled={isDisabled} type={'close-action'} img={RxCross2}/>
      <FAbutton onClick={openOptions} disabled={!isDisabled} type={'main-action'} img={RiFileEditFill}/>
    </div>
  )

}

export default FeedbackFAB;