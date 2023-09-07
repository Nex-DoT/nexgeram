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
        Orient:true,        // "#005e7c"
        BlackPearl:false,   // "#040f16"
        PacificBlue:false,  // "#0094c6"
        Stratos: false,     // "#001242"
        BlackRussian: false,// "#000022"
        Gray: false,        // gray-800 TailWind
    },
    textSize:{
        xs:true,
        sm:false,
        md:false,
        lg:false,
    },
    textColor:{
        white: true,
        black: false,
    }

}
//funtion for reducer
const functionReducer = (state , action)=>{
    switch(action.type){
        case "BACKCOLOR": 
            let colorReset = {
                Orient:false,       // "#005e7c"
                BlackPearl:false,   // "#040f16"
                PacificBlue:false,  // "#0094c6"
                Stratos: false,     // "#001242"
                BlackRussian: false,// "#000022"
                Gray: false,        // gray-800 TailWind
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
                xs:false,
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
        default : return state
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
        <div className={`${state.color.Gray && "bg-gray-700"} ${state.color.Orient && "bg-orient"} ${state.color.BlackPearl && "bg-blackpearl"} ${state.color.PacificBlue && " bg-pacificblue"} ${state.color.Stratos && " bg-stratos"} ${state.color.BlackRussian && " bg-blackrussian"}  w-2/3 m-2 h-full  rounded-md shadow-inner relative`}>
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
                        <li onMouseOver={()=>{action({type:"OPENSTYLE" , Name:"color"})}} className='h-1/3 justify-center items-center flex text-white hover:bg-gray-600 w-full rounded-t-md cursor-pointer text-xs'>background color</li>
                        <li onMouseOver={()=>{action({type:"OPENSTYLE" , Name:"textSize"})}} className='h-1/3 w-full border-gray-400 border-b border-t flex items-center justify-center text-white hover:bg-gray-600 cursor-pointer text-xs'>font size</li>
                        <li onMouseOver={()=>{action({type:"OPENSTYLE" , Name:"textColor"})}} className='h-1/3 flex items-center justify-center text-white hover:bg-gray-600 w-full rounded-b-md cursor-pointer text-xs'>text color</li>
                                {state.menushow.color &&
                                    <div className='w-16 h-28 absolute right-32 felx items-center justify-center rounded-md bg-gray-500 z-20'>
                                        <ul className='flex flex-wrap items-center justify-around h-full relative after:absolute  after:bg-gray-500 after:w-4 after:h-4 after:top-2 after:-right-2 after:z-10 after:rotate-45 '>
                                            <li onClick={()=>{action({type:"BACKCOLOR" , Name:"Orient"})}} className=' w-6 h-6 rounded-full z-20 transition-all cursor-pointer hover:scale-105 bg-orient border'></li>
                                            <li onClick={()=>{action({type:"BACKCOLOR" , Name:"BlackPearl"})}} className=' w-6 h-6 rounded-full z-20 transition-all cursor-pointer hover:scale-105 bg-blackpearl border'></li>
                                            <li onClick={()=>{action({type:"BACKCOLOR" , Name:"PacificBlue"})}} className=' w-6 h-6 rounded-full z-20 transition-all cursor-pointer hover:scale-105 bg-pacificblue  border'></li>
                                            <li onClick={()=>{action({type:"BACKCOLOR" , Name:"BlackRussian"})}} className=' w-6 h-6 rounded-full z-20 transition-all cursor-pointer hover:scale-105 bg-blackrussian border'></li>
                                            <li onClick={()=>{action({type:"BACKCOLOR" , Name:"Stratos"})}} className=' w-6 h-6 rounded-full z-20 transition-all cursor-pointer hover:scale-105 bg-stratos  border'></li>
                                            <li onClick={()=>{action({type:"BACKCOLOR" , Name:"Gray"})}} className=' w-6 h-6 rounded-full z-20 transition-all cursor-pointer hover:scale-105 bg-gray-800  border'></li>
                                        </ul>
                                    </div>
                                     }
                                {state.menushow.textSize &&
                                    <div className='w-16 h-28 absolute right-32 felx items-center justify-center rounded-md bg-gray-500 z-20'>
                                        <ul className='flex flex-col items-center justify-between h-full relative after:absolute  after:bg-gray-500 after:w-4 after:h-4 after:top-12 after:-right-2 after:z-10 after:rotate-45 '>
                                            <li onClick={()=>{action({type:"TEXTSIZE" , Name:"xs"})}} className='z-20 text-xs cursor-pointer text-white w-full h-full hover:bg-gray-600 flex items-center justify-center rounded-t-md'>Small*2</li>
                                            <li onClick={()=>{action({type:"TEXTSIZE" , Name:"sm"})}} className='z-20 text-xs cursor-pointer text-white w-full h-full hover:bg-gray-600 flex items-center justify-center'>Small</li>
                                            <li onClick={()=>{action({type:"TEXTSIZE" , Name:"md"})}} className='z-20 text-xs cursor-pointer text-white w-full h-full hover:bg-gray-600 flex items-center justify-center'>Mediom</li>
                                            <li onClick={()=>{action({type:"TEXTSIZE" , Name:"lg"})}} className='z-20 text-xs cursor-pointer text-white w-full h-full hover:bg-gray-600 flex items-center justify-center rounded-b-md'>Large</li>
                                        </ul>
                                    </div>
                                    }
                                {state.menushow.textColor &&
                                    <div className='w-16 h-28 absolute right-32 felx items-center justify-center rounded-md bg-gray-500 z-20'>
                                        <ul className='flex flex-col items-center w-full justify-between h-full relative after:absolute  after:bg-gray-500 after:w-4 after:h-4 after:top-20 after:-right-2 after:z-10 after:rotate-45 '>
                                            <li onClick={()=>{action({type:"TEXTCOLER" , Name:"white"})}} className=' text-xs text-white w-full h-full hover:bg-gray-600 rounded-t-md flex items-center justify-center cursor-pointer z-20'>White</li>
                                            <li onClick={()=>{action({type:"TEXTCOLER" , Name:"black"})}} className='text-xs text-white w-full h-full hover:bg-gray-600 rounded-b-md flex items-center justify-center cursor-pointer z-20'>Black</li>
                                        </ul>
                                    </div>
                                     }
                    </ul>
                </div>}
        </div>
    );
};

export default Pv;