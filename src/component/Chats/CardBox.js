import React from 'react';

const CardBox = ({value}) => {
    const lastmessege = value.message.slice(-1)[0];
    return (
        <div className=' cursor-pointer w-72 h-14 bg-gray-700 mt-2 ml-6 mb-2 rounded-md flex items-center justify-between'>
            <div className='flex'>
                <img src={value.img} className='w-10 h-10 ml-3 mr-3 rounded-full' alt="" />
                <div>
                    <h3 className='text-white'>{value.first_name}</h3>
                    <div className='flex'> 
                        {lastmessege.g_user && <p className=' text-xs pl-1 text-gray-400'>{lastmessege.g_user}:</p>} 
                        <p className=' text-xs pl-1 text-gray-400'>{lastmessege.message}</p>
                    </div>
                </div>
            </div>
            <div><p className=' text-xs text-gray-400 pr-2'>{lastmessege.time}</p></div>
        </div>
    );
};

export default CardBox;