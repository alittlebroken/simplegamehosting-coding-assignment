import React from 'react';
import { HiStatusOnline, HiStatusOffline } from "react-icons/hi";

interface GameServerStatusProps {
    status: string;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const GameServerStatus: React.FC<GameServerStatusProps> = ({status, handleClick}) => {

    return (
        <div className="flex justify-between text-sm content-center">
              
              <div className="flex gap-2 content-center justify-center ">
                  <div className="w-12 p-0 m-0 flex content-center justify-center">
                    {status === "online" ? (<HiStatusOnline className="text-2xl text-green-600 my-auto" title={`Status: ${status}`} />) : (<HiStatusOffline className="text-2xl text-red-600 my-auto" title={`Status: ${status}`} />)}
                  </div>
                  <span className="text-sm content-center">{status}</span>
              </div>
  
              <button onClick={(e) => handleClick(e)} className="rounded-lg p-2 bg-slate-300 text-slate-600 text-bold shadow-md hover:bg-slate-600 hover:text-slate-300 hover:shadow-lg dark:bg-slate-600 dark:text-slate-300 dark:hover:bg-slate-400 dark:hover:text-slate-600">
                {status === "online" ? "Stop Server" : "Start Server"}
              </button>
            
            </div>
    );
};

export default GameServerStatus;