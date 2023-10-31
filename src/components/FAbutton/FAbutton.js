import './FAbutton.css'

const FAbutton = (props) => {

  return (
    <div style={{display:'flex', alignItems:'center'}}>
      <div className={`button-name ${props.disabled ? 'closed' : 'open'}`} style={props.name ? null: {opacity:'0'}}>{props.name}</div>
      <button onClick={props.onClick} className={`FAbutton ${props.disabled ? 'closed' : 'open'} ${props.type}`}>
        <props.img size={25} color='#0F0F0F'/>
      </button>
    </div>
  )
}

export default FAbutton;