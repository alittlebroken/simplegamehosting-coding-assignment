import React, { useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";

const DarkLightToggler = () => {

    /* Controls if Dark mode is on or not */
    const [isDark, setIsDark] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsDark(!isDark);
        document.body.classList.toggle("dark");
    };

    return (
        <button onClick={handleClick} className="w-fit p-3 text-slate-300 bg-slate-600 rounded-md hover:bg-slate-300 hover:text-slate-600 dark:bg-slate-300 dark:text-slate-600 dark:hover:bg-slate-600 dark:hover:text-slate-300">
            <div className="flex items-center gap-3">
            {!isDark ? (
                <><FaMoon /><span>Dark</span></>
                ) : (
                <><FaSun /><span>Light</span></>
                ) }
            </div>

        </button>
    );

};

export default DarkLightToggler;