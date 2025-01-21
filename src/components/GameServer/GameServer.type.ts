/* Individual type for the data representing a game server */
export interface GameServer {
    id: number;
    name: string;
    game: string;
    players: string;
    status: string;
    version: string;
    type: string;
    region: string;
    mods: string[]
}

/* Type for the data passed into the card component for displaying the actual server content */
export interface GameServerProps {
    server: GameServer;
}