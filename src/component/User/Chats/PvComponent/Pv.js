import React,{useState ,useReducer} from 'react';
//icon 
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineMore} from "react-icons/ai";
import { AiOutlineClose} from "react-icons/ai";

//inistial state for reducer 
const inistialState = {
    menushow:{
        color: false,
        textSize: false,
        textColor: false,
    },
    color:{
        Orient:true,      // "#005e7c"
        BlackPearl:false,  // "#040f16"
        PacificBlue:false, // "#0094c6"
        Stratos: false,    // "#001242"
        BlackRussian: false// "#000022"
    },
    textSize:{
        sx:true,
        sm:false,
        md:false,
        lg:false,
    },
    textColor:{
        white: true,
        black: false,
    }

}
const functionReducer = (state , action)=>{
    switch(action.type){
        case "BACKCOLOR": 
            let colorReset = {
                Orient:false,      // "#005e7c"
                BlackPearl:false,  // "#040f16"
                PacificBlue:false, // "#0094c6"
                Stratos: false,    // "#001242"
                BlackRussian: false// "#000022"
            } 
            return {
                ...state,
                color:{
                    ...colorReset,
                    [action.Name] : true
                },
            }
        case "TEXTSIZE": 
            let textSizeReset = {
                sx:false,
                sm:false,
                md:false,
                lg:false,
            };
            return {
                ...state,
                textSize:{
                    ...textSizeReset,
                    [action.Name] : true
                }
            }
        case "TEXTCOLER": 
            let textColerReset = {
                black:false,
                white:false,
            }
            return {
                ...state,
                textColer:{
                    ...textColerReset,
                    [action.Name] : true
                }
            }
        case "OPENSTYLE": 
            let restOpenStyle = {
                color: false,
                textSize: false,
                textColor: false,
            };
            return{
                ...state,
                menushow:{
                    ...restOpenStyle,
                    [action.Name] : true
                }
            }
    }
}
//component
const Pv = ({Data}) => {
    //useReducer for 
    const [state , action] = useReducer(functionReducer , inistialState);
    //state For more btn
    const [more , setMore] = useState(false);
    //function for more btn for show or hide
    const moreHandeler = () => {
        if(more){
            setMore(false);
        }else{
            setMore(true);
        }
    };
    //jsx
    return (
        <div className=' bg-gray-700 w-2/3 m-2 h-full  rounded-md shadow-inner relative'>
            {console.log(Data)}
            <div className=' absolute top-0 rounded-t-md w-full h-14  flex items-center justify-between bg-gray-600 shadow-lg'>
                <div className='flex items-center'>
                    <img src="" className=' w-12 h-12 rounded-full ml-5 mr-3 shadow-lg ' alt="" />
                    <p className='text-white'>{"name"}</p>
                </div>
                <div>
                    <button className=' w-10 h-10 flex mr-3 justify-center items-center rounded-full transition-all bg-gray-600 hover:bg-gray-500' onClick={moreHandeler}>{more ? <AiOutlineClose className='text-2xl text-blue-400 '/>:<AiOutlineMore className='text-2xl text-blue-400 '/>  }</button>
                </div>
            </div>
            <div className=' absolute bottom-2 left-1/2 -translate-x-1/2 w-5/6 flex items-center justify-center'>
                
                <input type="text" className='bg-gray-600 w-3/4 h-10 rounded-md text-white p-2 outline-none' placeholder='write a message' />
                <button className=' w-10 h-10 flex ml-3 justify-center items-center rounded-full bg-gray-600 transition-all hover:bg-gray-500'>
                    <AiOutlineSend className='text-2xl text-blue-400 '/>
                </button>
            </div>
            {more && <div className=' shadow-lg absolute right-2 top-16 w-28 h-28 rounded-md bg-gray-500'>
                    <ul className='w-full h-full flex flex-col justify-around items-center'>
                        <li className='h-1/3 justify-center items-center flex text-white hover:bg-gray-600 w-full rounded-t-md cursor-pointer text-xs'>background color</li>
                        <li className='h-1/3 w-full border-gray-400 border-b border-t flex items-center justify-center text-white hover:bg-gray-600 cursor-pointer text-xs'>font size</li>
                        <li className='h-1/3 flex items-center justify-center text-white hover:bg-gray-600 w-full rounded-b-md cursor-pointer text-xs'>text color</li>
                                {state.menushow.color &&
                                    <div className='w-16 h-28 absolute right-32 felx items-center justify-center rounded-md bg-gray-500 z-20'>
                                        <ul className='flex flex-wrap items-center justify-around h-full relative after:absolute  after:bg-gray-500 after:w-4 after:h-4 after:top-2 after:-right-2 after:z-10 after:rotate-45 '>
                                            <li className=' w-6 h-6 rounded-full z-20 transition-all cursor-pointer hover:scale-105 bg-orient border'></li>
                                            <li className=' w-6 h-6 rounded-full z-20 transition-all cursor-pointer hover:scale-105 bg-blackpearl border'></li>
                                            <li className=' w-6 h-6 rounded-full z-20 transition-all cursor-pointer hover:scale-105 bg-pacificblue  border'></li>
                                            <li className=' w-6 h-6 rounded-full z-20 transition-all cursor-pointer hover:scale-105 bg-blackrussian border'></li>
                                            <li className=' w-6 h-6 rounded-full z-20 transition-all cursor-pointer hover:scale-105 bg-stratos  border'></li>
                                        </ul>
                                    </div>
                                     }
                                {state.menushow.textSize &&
                                    <div className='w-16 h-28 absolute right-32 felx items-center justify-center rounded-md bg-gray-500 z-20'>
                                        <ul className='flex flex-col items-center justify-between h-full relative after:absolute  after:bg-gray-500 after:w-4 after:h-4 after:top-12 after:-right-2 after:z-10 after:rotate-45 '>
                                            <li className='text-sx text-white w-full h-full hover:bg-gray-600'>Small*2</li>
                                            <li className='text-sx text-white w-full h-full hover:bg-gray-600'>Small</li>
                                            <li className='text-sx text-white w-full h-full hover:bg-gray-600'>Mediom</li>
                                            <li className='text-sx text-white w-full h-full hover:bg-gray-600'>Large</li>
                                        </ul>
                                    </div>
                                    }
                                {state.menushow.textColor &&
                                    <div className='w-16 h-28 absolute right-32 felx items-center justify-center rounded-md bg-gray-500 z-20'>
                                        <ul className='flex flex-col items-center justify-between h-full relative after:absolute  after:bg-gray-500 after:w-4 after:h-4 after:top-12 after:-right-2 after:z-10 after:rotate-45 '>
                                            <li className='text-sx text-white w-full h-full hover:bg-gray-600'>White</li>
                                            <li className='text-sx text-white w-full h-full hover:bg-gray-600'>Black</li>
                                        </ul>
                                    </div>
                                     }
                    </ul>
                </div>}
        </div>
    );
};

export default Pv;