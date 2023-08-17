import React,{useState} from 'react';
import mail from "../../Gificon/mail.gif";
import email from "../../Gificon/email.gif";
import confetti from "../../Gificon/confetti.gif";
import consultation from "../../Gificon/consultation.gif";
const WelcomeComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prevState) => (prevState + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevState) => (prevState -1));
  };
  const nothing = () => {

  };
   return (
     <div className="w-full h-full flex justify-center items-center flex-col">
        {currentSlide === 0 &&
        <section className='flex flex-col items-center '>
                <img className=' w-40 flex items-center justify-center' src={mail} alt=""/>
                <p className=' text-center text-white'>Welcome to our messenger! <br/>
                 We're excited to have you on board.<br/>
                 Start connecting with friends, sharing moments, and enjoying seamless communication.<br/>
                 If you have any questions or need assistance, feel free to reach out. Happy messaging!</p>
        </section>}
        {currentSlide === 1 &&
        <section>
                <img className=' w-40' src={consultation} alt=""/>
        </section>}
        {currentSlide === 2 &&
        <section>
                <img className=' w-40' src={email} alt=""/>
        </section>}
        {currentSlide === 3 &&
        <section>
                <img className=' w-40' src={confetti} alt=""/>
        </section>}


        <div className=' w-3/5 flex justify-between'>
            <button className={currentSlide === 0 ? ' w-16 h-8 bg-cyan-500 cursor-default opacity-70 text-white text-xs rounded-md':"w-16 h-8 bg-cyan-500 text-white text-xs rounded-md"} onClick={currentSlide !==0 ? prevSlide : nothing } >Back</button>
            <button className={currentSlide === 3 ? ' w-16 h-8 cursor-default bg-cyan-500 opacity-70 text-white text-xs rounded-md':"w-16 h-8 bg-cyan-500 text-white text-xs rounded-md"} onClick={currentSlide !==3 ? nextSlide : nothing}>Next</button>
        </div>
      </div>
    );
};

export default WelcomeComponent;