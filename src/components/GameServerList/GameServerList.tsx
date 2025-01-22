import { FC } from "react";
import { GameServerListProps } from "./GameServerList.type";

import GameServer from "../GameServer/GameServer";
import DarkLightToggler from "../DarkLightToggler/DarkLightToggler";


/* Container component for a list of Game server cards generated by the JSON array passed to it */
const GameServerList: FC<GameServerListProps> = ({data, title}) => {

  return (
    <div className="grid grid-cols-1 gap-10 row-start-2">
      <DarkLightToggler />
      <h1 className="text-3xl font-bold text-purple-800 sm:text-5xl dark:text-purple-400">
        {title}
      </h1>
      <div className="grid-span-1 grid grid-cols-1 gap-5 bg-slate-300 p-3 rounded-lg text-slate-500 sm:grid-cols-2 md:grid-cols-3 dark:text-sky-200 dark:bg-slate-800">
        {data.map(item => {
          return (
            <GameServer server={item} key={item.id} />
          )
        })}
        
      </div>
    </div>
  );

}

export default GameServerList;