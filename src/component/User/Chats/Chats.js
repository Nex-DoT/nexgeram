import React,{useContext , useState ,useEffect} from 'react';
import { activebar } from '../../../Database/ActiveListfiltered';
import { dataval } from '../../../Database/Data';
import Pv from './PvComponent/Pv';
import CardBox from './CardBox';
const Chats = () => {
    const [chats , setChats] = useState()
    const [state , newAction] =  useContext(activebar);
    useEffect(() =>{
        setChats(dataval());
    },[]);
    return (
        <div className='flex w-full justify-around h-3/4'>
            <div>
                {state.channel && chats.channel.map(e => <CardBox key={e.id} value={e}/>)}
                {state.group && chats.group.map(e => <CardBox key={e.id} value={e}/>)}
                {state.user && chats.user.map(e => <CardBox key={e.id} value={e}/>)}
            </div>
            <Pv/>
        </div>
    );
};

export default Chats;