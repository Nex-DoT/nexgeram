import React,{useContext , useState ,useEffect} from 'react';
import { activebar } from '../../Database/ActiveListfiltered';
import { dataval } from '../../Database/Data';
import CardBox from './CardBox';
const Chats = () => {
    const [chats , setChats] = useState()
    const [state , newAction] =  useContext(activebar);
    useEffect(() =>{
        setChats(dataval());
    },[]);
    return (
        <div>
            <div>
                {state.all && chats.user.map(e=> <CardBox key={e.id} value={e}/>)}
                {state.all && chats.group.map(e => <CardBox key={e.id} value={e}/>)}
                {state.all && chats.channel.map(e => <CardBox key={e.id} value={e}/>)}
            </div>
            {state.channel && chats.channel.map(e => <CardBox key={e.id} value={e}/>)}
            {state.group && chats.group.map(e => <CardBox key={e.id} value={e}/>)}
            {state.user && chats.user.map(e => <CardBox key={e.id} value={e}/>)}
        </div>
    );
};

export default Chats;