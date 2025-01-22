import { FC } from 'react';

interface GameServerPlayersProps {
    players: string;
}

const GameServerPlayers: FC<GameServerPlayersProps> = ({players}) => {
    return (
        <div className="flex flex-col gap-3 p-1">
            <div className="w-100 text-center text-sm pb-3">
                <span className="text-bold">Players online: </span>{players}
            </div>
        </div>
    );
};

export default GameServerPlayers;