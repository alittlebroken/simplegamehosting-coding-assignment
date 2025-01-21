/* Component card for displaying all relevant data about a server */
import { useState, FC } from "react";
import { CiGlobe } from "react-icons/ci";
import { HiStatusOnline, HiStatusOffline } from "react-icons/hi";

import { GameServerProps } from './GameServer.type';

const GameServer: FC<GameServerProps> = ({server}) => {

    /* State for controlling if the server is online or offline */
    const [serverOnline, setServerOnline] = useState(server.status || "offline");
  
    /* Handler for toggling the server state on and offline */
    const handleServerStatus = (e) => {
      /* Stop the default behaviour of the button */
      e.preventDefault()
  
      /* Update the server status */
      setServerOnline(serverOnline === "offline" ? "online" : "offline");
    }
  
    return (
      <section className="flex flex-col gap-2 bg-white rounded-md p-2 shadow-lg border-2 border-white hover:border-2 hover:border-dash hover:border-slate-400 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-600">
  
          <h2 className="text-3xl font-bold text-center text-purple-800 sm:text-2xl md:text-3xl dark:text-purple-300">{server.name}</h2>
  
        <div id="cardBody" className="flex flex-col gap-2">
  
            <div className="flex flex-col gap-3 p-1">
              <div className="w-100 text-center text-sm pb-3">
                <span className="text-bold">Players online: </span>{server.players}
              </div>
            </div>
  
            <div className="flex justify-between text-sm content-center">
              
              <div className="flex gap-2 content-center justify-center ">
                  <div className="w-12 p-0 m-0 flex content-center justify-center">
                    {serverOnline === "online" ? (<HiStatusOnline className="text-2xl text-green-600 my-auto" title={`Status: ${serverOnline}`} />) : (<HiStatusOffline className="text-2xl text-red-600 my-auto" title={`Status: ${serverOnline}`} />)}
                  </div>
                  <span className="text-sm content-center">{serverOnline}</span>
              </div>
  
              <button onClick={handleServerStatus} className="rounded-lg p-2 bg-slate-300 text-slate-600 text-bold shadow-md hover:bg-slate-600 hover:text-slate-300 hover:shadow-lg dark:bg-slate-600 dark:text-slate-300 dark:hover:bg-slate-400 dark:hover:text-slate-600">
                {serverOnline === "online" ? "Stop Server" : "Start Server"}
              </button>
            
            </div>
          
          <div>
            <span className="text-bold text-slate-600 dark:text-slate-300">Mods:</span>
            <ul className="bg-slate-100 rounded-md p-2 text-sm shadow-inner h-28 overflow-y-auto dark:bg-slate-700">
              {server.mods.map(mod => (<li key={mod}>{mod}</li>))}
            </ul>
          </div>
        </div>
  
        <div id="cardFooter" className="flex gap-5 justify-between border-t-2 pt-2 text-sm dark:border-slate-800">
          <div>{server.game} v{server.version}</div>
          <div>{server.type}</div>
          <div><CiGlobe className="text-xl" title={`Region: ${server.region}`} /></div>
        </div>
  
      </section>
    );
  }

export default GameServer;