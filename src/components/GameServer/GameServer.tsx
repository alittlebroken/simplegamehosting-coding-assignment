/* Component card for displaying all relevant data about a server */
import React, { useState, FC } from "react";
import { CiGlobe } from "react-icons/ci";
import { GameServerProps } from './GameServer.type';


import GameServerMods from "../GameServerMods/GameServerMods";
import GameServerStatus from "../GameServerStatus/GameServerStatus";
import GameServerPlayers from "../GameServerPlayers/GameServerPlayers";
import { FaBullseye } from "react-icons/fa";

const GameServer: FC<GameServerProps> = ({server}) => {

    /* State for controlling if the server is online or offline */
    const [serverOnline, setServerOnline] = useState(server.status || "offline");
    const [mockStatusUpdate, setMockStatusUpdate] = useState(false)
  
    /* Handler for toggling the server state on and offline */
    const handleServerStatus = async (e: React.MouseEvent<HTMLButtonElement>) => {
      /* Stop the default behaviour of the button */
      e.preventDefault()

      /* For demo purposes simulate waiting for a request to stop a server when
         an end use has clicked on the stop/start server button. */
      const mockDelay = (delay: number) => {
        return new Promise( res => setTimeout(res, delay));
      }

      /* Now wait for the server to stop/start */
      setMockStatusUpdate(true);
      await mockDelay(5000);

      /* Update the server status */
      setServerOnline(serverOnline === "offline" ? "online" : "offline");
      setMockStatusUpdate(false);
    }
  
    return (
      <section className="flex flex-col gap-2 bg-white rounded-md p-2 shadow-lg border-2 border-white hover:border-2 hover:border-dash hover:border-slate-400 hover:scale-105 duration-150 ease-in-out dark:bg-slate-900 dark:text-slate-300 dark:border-slate-900 dark:hover:border-slate-600 md:justify-between has=[]:">
  
        <h2 className="text-3xl font-bold text-center text-purple-800 sm:text-2xl md:text-3xl dark:text-purple-300">{server.name}</h2>

          <div id="cardBody" className="flex flex-col gap-2">
    
              <GameServerPlayers players={server.players} />
    
              <GameServerStatus status={serverOnline}  handleClick={handleServerStatus} updating={mockStatusUpdate} />  
            
              <GameServerMods modList={server.mods} />
            
          </div>
    
          <div id="cardFooter" className="flex gap-2 justify-between border-t-2 pt-2 text-xs dark:border-slate-800">
            <div className="content-center">{server.game} v{server.version}</div>
            <div className="content-center">{server.type}</div>
            <div className="flex p-0 gap-1 justify-center items-center group">
              <CiGlobe className="text-xl group-hover:animate-spin group-hover:text-purple-800 group-hover:dark:text-purple-300" title={`Region: ${server.region}`} />
              <span className="text-xs group-hover:text-purple-800 group-hover:dark:text-purple-300">{server.region}</span>
            </div>
          </div>
        
  
      </section>
    );
  }

export default GameServer;