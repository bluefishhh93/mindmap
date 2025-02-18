'use client';
import { useEdgesState, useNodesState, addEdge, Connection } from "@xyflow/react";
import Graph from "@/components/mindmap/graph";
import ChatPanel from "@/components/mindmap/chat-panel";
import { initialEdges, initialNodes } from "@/lib/constants";
import { useServerAction } from "zsa-react";
import { generateMindMapAction } from "@/app/mindmap/action";
import { useCallback } from "react";

const MindMapContent = (props: any) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Handle connections
  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(
        { id: `edge-${params.source}-${params.target}-${Date.now()}`, ...params },
        eds
      ));
    },
    [setEdges]
  );

  // Use server action
  const { execute: generateMindMap, isPending: isUpdating } = useServerAction(generateMindMapAction, {
    onSuccess: (response: any) => {
      // Update nodes and edges from server response
      let { nodes, edges } = response.data;
      if (nodes && edges) {
        setNodes(nodes);
        setEdges(edges);
      }
    },
    onError: (error: any) => {
      console.error("Error updating mind map:", error);
    }
  });

  const handleSendMessage = async (message: string) => {
    // Execute server action with the message
    await generateMindMap({
      prompt: message
    });
  };

  return (
    <>
      <Graph
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        isUpdating={isUpdating}
      />
      <ChatPanel
        onSendMessage={handleSendMessage}
        isLoading={isUpdating}
      />
    </>
  );
};

export default MindMapContent;