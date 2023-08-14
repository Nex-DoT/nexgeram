import React,{createContext , useReducer} from 'react';
export const activebar = createContext();
const inisitioalState = {
    all: true,
    user:false,
    channel:false,
    group:false,
    bot:false,
}
const activeAction = (state , action) =>{
    switch(action.type){
        case "cheange" : 
        let FalseActive =  {
            all: false,
            user:false,
            channel:false,
            group:false,
            bot:false,
        }
        return {
            ...FalseActive,
            [action.name] : true
        }
    }
}

const ActiveListfiltered = ({children}) => {
    const [state , newAction] = useReducer(activeAction , inisitioalState)
    return (
        <activebar.Provider value={[state , newAction]}>
            {children}
        </activebar.Provider>
    );
};

export default ActiveListfiltered;