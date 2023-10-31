import './AnswerCard.css';
import { FaRegCircleUser } from 'react-icons/fa6';
import { MdEditNote } from 'react-icons/md';
import {BiLike} from 'react-icons/bi';
import {PiChatCenteredDotsLight} from 'react-icons/pi';

const AnswerCard = () => {
  return (
    <div className='ans-card-frame'>
      <div className='ans-card'>
        <div className='ans-header'>
          <div style={{display:'flex', alignItems:'center'}}>
            <FaRegCircleUser size={40}/>
            <div style={{marginLeft:'8px', fontSize:'13px'}}>
              <p>John Doe (You)</p>
              <p>Jun 27, 2023</p>
            </div>
          </div>
          <div style={{display:'flex', alignItems:'center'}}>
            <MdEditNote size={30}/>
            <p>Edit</p>
          </div>
        </div>
        <p className='answer-desc'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Quia soluta quae vero corrupti vel incidunt neque velit itaque, enim accusantium deserunt quos laudantium, quidem at! 
          Quasi perferendis odio blanditiis labore!
        </p>
        <div className='ans-footer'>
          <div style={{display:'flex', flex:'2', justifyContent:'center', alignItems:'center'}}>
            <BiLike size={20}/>
            <p style={{margin:'0 8px'}}>Like</p>
            <PiChatCenteredDotsLight size={20}/>
          </div>
          <input style={{minWidth:'150px', margin: '0 3px', flex:'3', borderRadius: '3px', height:'30px', backgroundColor:'#DEE7FF', border: '1px solid black', fontFamily:'Inter'}} type="text" placeholder='Add a comment'/>
          <button style={{flex:'1', margin:'0 10px', backgroundColor:'#F8F8F8', fontFamily:'Inter', borderRadius:'5px', border:'1px solid black', padding:'10px'}}>Post</button>
        </div>
      </div>
    </div>
  )
}

export default AnswerCard;