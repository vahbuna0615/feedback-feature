const FAbutton = (props) => {

  const propsFunc = props.onClick;
  const propsType = props.type;

  const handleClick = () => {
    propsFunc();

    switch(propsType) {
      case 'report-issue':
        return (<div>Report Issue</div>)
      case 'share-feedback':
        return (<div>Share Feedback</div>)
      default:
        return (<div>I give up</div>)
    }
  }
  
  return (
    <>
      <button onClick={handleClick} className={`FAbutton ${props.disabled ? 'closed' : 'open'} ${props.type}`}>
        <props.img size={25} color='#0F0F0F'/>
      </button>
    </>
  )
}

export default FAbutton;