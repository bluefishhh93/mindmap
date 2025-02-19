'use client';
import { useEdgesState, useNodesState, addEdge, Connection } from "@xyflow/react";
import Graph from "@/components/mindmap/graph";
import ChatPanel from "@/components/mindmap/chat-panel";
import { initialEdges, initialNodes } from "@/lib/constants";
import { useServerAction } from "zsa-react";
import { generateMindMapAction } from "@/app/mindmap/action";
import { useCallback, useState } from "react";
import Sidebar from "../layout/sidebar";
import { mindMapCh1, mindMapCh2, mindMapCh3, mindMapCh4, mindMapCh5, mindMapCh6 } from "@/lib/constants";

const MindMapContent = (props: any) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [activeChapter, setActiveChapter] = useState(0);
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


  const handleChapterSelect = (chapterNumber: number) => {
    setActiveChapter(chapterNumber);
    loadChapterMindmap(chapterNumber);
  };

  const loadChapterMindmap = (chapterNumber: number) => {
    let mindMapData;

    switch (chapterNumber) {
      case 1:
        mindMapData = mindMapCh1;
        break;
      case 2:
        mindMapData = mindMapCh2;
        break;
      case 3:
        mindMapData = mindMapCh3;
        break;
      case 4:
        mindMapData = mindMapCh4;
        break;
      case 5:
        mindMapData = mindMapCh5;
        break;
      case 6:
        mindMapData = mindMapCh6;
        break;
      default:
        // Default to initial state
        mindMapData = { nodes: initialNodes, edges: initialEdges };
    }

    if (mindMapData) {
      setNodes(mindMapData.nodes);
      setEdges(mindMapData.edges);
    }
  };

  return (
    <>
      <Sidebar
        onChapterSelect={(chapter: number) => {
          handleChapterSelect(chapter);
        }}
      />
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