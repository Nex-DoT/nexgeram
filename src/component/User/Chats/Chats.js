import React,{useContext , useState ,useEffect} from 'react';
//active function 
import { activebar } from '../../../Database/ActiveListfiltered';
// fake data function (returning a objext)
import { dataval } from '../../../Database/Data';
//components
import Pv from './PvComponent/Pv';
import CardBox from './CardBox';
//component function 
const Chats = () => {
    //state for fake data save 
    const [chats , setChats] = useState();
    //using the state information in ActiveListFilltered to show the chats
    const [state , newAction] =  useContext(activebar);
    //state for passing data to pv component
    const [dataPv , setDataPv] = useState();
    //mounting data 
    useEffect(() =>{
        setChats(dataval());
    },[]);
    //function for dataPv 
    const passing = (data)=>{
        setDataPv(data);
    }
    //jsx
    return (
        <div className='flex w-full justify-around h-3/4'>
            <div className='w-1/7 mt-2 flex flex-col justify-start items-center'>
                {state.channel && chats.channel.map(e => <CardBox key={e.id} value={e}/>)}
                {state.group && chats.group.map(e => <CardBox key={e.id} value={e} />)}
                {state.user && chats.user.map(e => <CardBox key={e.id} value={e} onClick={passing} />)}
            </div>
            <Pv Data={dataPv}/>
        </div>
    );
};

export default React.memo(Chats);