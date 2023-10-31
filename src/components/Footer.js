const Footer = () => {
  return (
    <div className="footer-menu">
      <div className='about-us'>
        <p style={{fontSize:'20px'}}>About Us - </p>
        <p style={{maxWidth:'300px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Molestias eligendi quas cumque labore veniam in,
           commodi officiis placeat eveniet ut?
        </p>
      </div>
      <div className="contact-info" style={{marginLeft:'3px'}}>
        <p style={{fontSize:'20px'}}>Contact Info - </p>
        <p>Phone - 9XXXXXXXXX, 8XXXXXXXXX</p>
        <p>Email - johndoe@email.com</p>
      </div>
    </div>
  )
}

export default Footer;