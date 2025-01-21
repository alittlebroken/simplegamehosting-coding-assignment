import { GameServer } from "../GameServer/GameServer.type";

/* Type for the data passed into the server list component */
export interface GameServerListProps {
    title: string;
    data: GameServer[];
}