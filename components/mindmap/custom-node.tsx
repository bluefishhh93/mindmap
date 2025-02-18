import { Handle, Position } from "@xyflow/react";
import React from "react";

interface CustomNodeProps {
    data :{
        label: string;
        isRoot?: boolean;
    }
}

const CustomNodeComponent: React.FC<CustomNodeProps> = ({ data }) => {  
    return (
        <div
            className={`px-4 py-2 shadow-md rounded-lg border-2 ${
            data.isRoot
                ? "bg-blue-600 text-white border-blue-700 min-w-[200px]"
                : "bg-white border-blue-200 min-w-[180px]"
            }`}
        >
            <Handle type="target" position={Position.Top} className="!bg-blue-400" />
            <div className={`${data.isRoot ? "font-bold" : "font-medium"} text-center`}>
            {data.label}
            </div>
            <Handle type="source" position={Position.Bottom} className="!bg-blue-400" />
        </div>
    )
 };


 export default CustomNodeComponent;