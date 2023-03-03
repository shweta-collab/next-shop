import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    
}
function Button({children,...props}:ButtonProps) {
    return ( 
        <button {...props} className="bg-green-800 text-gray-100 rounded px-4 py-2 hover:bg-green-700 my-2">
            {children}
        </button>
     );
}

export default Button;