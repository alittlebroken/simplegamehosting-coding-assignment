import React from 'react';

const GameServerMods = ({modList}: {modList: string[]}) => {
    return (
        <div>
            <span className="text-bold text-slate-600 dark:text-slate-300">Mods:</span>
            <ul className="bg-slate-100 rounded-md p-2 text-sm shadow-inner h-28 overflow-y-auto dark:bg-slate-700">
              {modList.map(mod => (<li key={mod}>{mod}</li>))}
            </ul>
          </div>
    );
};

export default GameServerMods;