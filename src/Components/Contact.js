import ContactClass from "./ContactClass";
const address = {
    name:'Swiggy LTD',
    location:'H.Q - MUMBAI',
    contactNo:'0091-123456789',
    email:'contact@swiggy.com'
}
const Contact = () =>{
    return(
        <div className="contact-div">

            <ContactClass data = {address} />

        </div>
    )
}

export default Contact;