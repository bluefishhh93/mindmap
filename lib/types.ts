export type CustomNodeData = {
    label: string;
    isRoot?: boolean; // Cho phép undefined
};
  
export type CustomNode = {
    id: string;
    type: string;
    position: { x: number; y: number };
    data: CustomNodeData;
};
  