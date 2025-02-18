'use client';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  type Connection,
  type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/base.css';
import CustomNodeComponent from './custom-node';
import { CustomNode } from '@/lib/types';

// nodeTypes
const nodeTypes = { custom: CustomNodeComponent };

interface GraphProps {
  nodes: CustomNode[];
  edges: Edge[];
  onNodesChange: (changes: any) => void;
  onEdgesChange: (changes: any) => void;
  onConnect: (connection: Connection) => void;
  isUpdating: boolean;
}

const Graph: React.FC<GraphProps> = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  isUpdating,
}) => {
  return (
    <section className='flex-1 relative'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
      {isUpdating && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-10">
          <p className="text-xl font-semibold text-blue-600">
            Đang tạo sơ đồ tư duy...
          </p>
        </div>
      )}
    </section>
  );
};

export default Graph;