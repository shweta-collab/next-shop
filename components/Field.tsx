import React from "react";

interface FieldProps extends React.PropsWithChildren{
    label: string;
}
const Field = ({label,children}:FieldProps)=> {
    return ( 
        <label className="block my-2">
            <span className="block text-gray-600 text-sm">{label}</span>
            {children}
        </label>
     );
}

export default Field;