const FAbutton = (props) => {

  let nameClass = 'FAbutton ';

  if (props.disabled) {
    nameClass += 'open ';
  }
  const propsFunc = props.onClick

  const handleClick = (e) => {
    propsFunc();
  }
  
  return (
    <>
      <button onClick={handleClick} className={nameClass + props.type}>
        <props.img size={30} color='#0F0F0F'/>
      </button>
    </>
  )
}

export default FAbutton;