import React,{useState,useEffect} from 'react';
// img
import mail from "../../Gificon/mail.gif";
import email from "../../Gificon/email.gif";
import confetti from "../../Gificon/confetti.gif";
import consultation from "../../Gificon/consultation.gif";
//function for validation 
import { validationError } from '../../Validation/validation';
//Link for single page application 
import { Link } from 'react-router-dom';

//Component
const WelcomeComponent = () => {
  //use state
  // state for active page of slider
  const [currentSlide, setCurrentSlide] = useState(0);
  // state for input data to validation function
  const [inputData , setInpuData] = useState({
    phoneNumber: "",
    email: "",
    userName: "",
  });
  //state for focus management
  const [focusControl , setFocusControl] = useState({
    phoneNumber: false,
    email: false,
    userName: false,
  })
  //state for error messages from validation function
  const [errorMessage,setErrorMessage] = useState();
  //using use effects for validation
  useEffect(()=>{
    setErrorMessage(validationError(inputData))
  },[inputData,focusControl])
  //next function for slider
  const nextSlide = () => {
    setCurrentSlide((prevState) => (prevState + 1));
  };
  //prev function for slider
  const prevSlide = () => {
    setCurrentSlide((prevState) => (prevState -1));
  };
  //seting state input data
  const inputHandeler = (e)=>{
    setInpuData({...inputData , 
    [e.target.name] : e.target.value  
    });
  }
  //functions for foucsed input
  const focusHandeler =(e)=>{
    setFocusControl({...focusControl , 
    [e.target.name] : true})
  }
  //submit handeler 
  const submitHandeler = ()=>{
    if(inputData.phoneNumber && inputData.email && inputData.userName){
      nextSlide()
    }else{
      setFocusControl({
        phoneNumber: true,
        email: true,
        userName: true,
      })
    }
  }
  //JSX
   return (
     <div className="w-full h-full flex justify-center items-center flex-col">
      <h1 className=' text-3xl text-white absolute top-16'>NexGeram</h1>
      {console.log(errorMessage)}
      {/* //slide1 */}
        {currentSlide === 0 &&
        <section className='flex flex-col items-center '>
                <img className=' w-40 flex items-center justify-center' src={mail} alt=""/>
                <p className=' text-center text-white text-xs leading-snug w-96'>Welcome to our messenger! <br/>
                 We're excited to have you on board.
                 Start connecting with friends, sharing moments,br
                  and enjoying seamless communication.
                 If you have any questions or need assistance, feel free to reach out. Happy messaging!</p>
        </section>}

      {/* //slide2 */}
        {currentSlide === 1 &&
        <section className='flex flex-col items-center '>
                <img className=' w-40' src={consultation} alt=""/>
                <p className='text-xs text-white text-center leading-normal w-96'>Messenger is a communication platform that allows users to connect and exchange messages in real-time. It provides features such as instant messaging,file sharing, channel ,and group chats.
                     With its user-friendly interface and wide range of functionalities,
                     Messenger enables seamless communication between individuals or groups across different devices.</p>
        </section>}

      {/* //slide3 */}
        {currentSlide === 2 &&
        <section className='flex flex-col items-center '>
                <img className=' w-40' src={email} alt=""/>
                <p className='text-xs text-white w-96 text-center leading-normal'>To provide you with the best experience, we kindly ask for some information during the signup process. This helps us personalize your account, tailor our services to your needs, and ensure the security of your data. Rest assured that we value your privacy and will handle your information responsibly. Thank you for understanding and joining our community!</p>
                <div className='flex flex-col'>
                  <div className=' relative m-2'>
                      <input onFocus={focusHandeler} type="email" name='email' value={inputData.email} onChange={inputHandeler} className='bg-gray-700 rounded-md m-2 text-xs w-56 h-7 pl-3 outline-none text-white' placeholder='Email'/>
                      <p className="absolute -bottom-3 opacity-80 text-red-600 text-xs left-3 w-72 ">{errorMessage.emailTest && focusControl.email && `Error:${errorMessage.emailTest}`}</p>
                  </div>
                  <div className=' relative m-2'>
                      <input onFocus={focusHandeler} type="text"  name='userName' value={inputData.userName} onChange={inputHandeler}className='bg-gray-700 rounded-md m-2 text-xs w-56 h-7 pl-3 outline-none text-white' placeholder='User name'/>
                      <p className="absolute -bottom-3 opacity-80 text-red-600 text-xs left-3 w-72 ">{errorMessage.userName && focusControl.userName && `Error: ${errorMessage.userName}`}</p>
                  </div>
                  <div className=' relative m-2'>
                      <input onFocus={focusHandeler} type="phone" name='phoneNumber' value={inputData.phoneNumber} onChange={inputHandeler} className='bg-gray-700 rounded-md m-2 text-xs w-56 h-7 pl-3 outline-none text-white'  placeholder='Phone Number'/>
                      <p className="absolute -bottom-3 opacity-80 text-red-600 text-xs left-3 w-72  leading-snug">{errorMessage.phoneNumberTest && focusControl.phoneNumber  && `Error: ${errorMessage.phoneNumberTest}`}</p>
                  </div>
                </div>
        </section>}

      {/* //slide4 */}
        {currentSlide === 3 &&
        <section className='flex flex-col items-center '>
                <img className=' w-40' src={confetti} alt=""/>
                <p className='text-center text-white text-sm leading-snug w-96'>Welcome to our platform! We're thrilled to have you as a new member.
                    Feel free to explore all the features and functionalities we offer.
                    If you have any questions or need assistance, don't hesitate to reach out.
                    Happy exploring!</p>
        </section>}

      {/* //BTNs  */}
        <div className=' w-4/5 max-w-lg flex justify-between absolute bottom-32'>
          {currentSlide === 3 ? null : <button className={currentSlide === 0 ? ' w-16 h-8 bg-cyan-500 cursor-default opacity-70 text-white text-xs rounded-md':"w-16 h-8 bg-cyan-500 text-white text-xs rounded-md"} onClick={currentSlide !==0 ? prevSlide : null }>Back</button>}
            {currentSlide === 2 ?
            <button className={currentSlide === 3 ? ' w-16 h-8 cursor-default bg-cyan-500 opacity-70 text-white text-xs rounded-md':"w-16 h-8 bg-cyan-500 text-white text-xs rounded-md"} onClick={submitHandeler}>Next</button> :
            <button className="w-16 h-8 bg-cyan-500 text-white text-xs rounded-md" onClick={currentSlide !==3 && nextSlide}>{currentSlide===3 ? <Link to={'/user'}>Start messaging</Link> : "Next"}</button> }
            
        </div>
      </div>
    );
};

export default WelcomeComponent;