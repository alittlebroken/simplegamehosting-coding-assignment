/* Component card for displaying all relevant data about a server */
import React, { useState, FC } from "react";
import { CiGlobe } from "react-icons/ci";
import { GameServerProps } from './GameServer.type';


import GameServerMods from "../GameServerMods/GameServerMods";
import GameServerStatus from "../GameServerStatus/GameServerStatus";
import GameServerPlayers from "../GameServerPlayers/GameServerPlayers";

const GameServer: FC<GameServerProps> = ({server}) => {

    /* State for controlling if the server is online or offline */
    const [serverOnline, setServerOnline] = useState(server.status || "offline");
  
    /* Handler for toggling the server state on and offline */
    const handleServerStatus = (e: React.MouseEvent<HTMLButtonElement>) => {
      /* Stop the default behaviour of the button */
      e.preventDefault()

      /* Update the server status */
      setServerOnline(serverOnline === "offline" ? "online" : "offline");

    }
  
    return (
      <section className="flex flex-col gap-2 bg-white rounded-md p-2 shadow-lg border-2 border-white hover:border-2 hover:border-dash hover:border-slate-400 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-900 dark:hover:border-slate-600 md:justify-between">
  
        <h2 className="text-3xl font-bold text-center text-purple-800 sm:text-2xl md:text-3xl dark:text-purple-300">{server.name}</h2>

          <div id="cardBody" className="flex flex-col gap-2">
    
              <GameServerPlayers players={server.players} />
    
              <GameServerStatus status={serverOnline}  handleClick={handleServerStatus} />  
            
              <GameServerMods modList={server.mods} />
            
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