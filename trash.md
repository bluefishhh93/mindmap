```typescript
// "use client";
// import { useCallback, useState, FormEvent } from "react";
// import ReactFlow, {
//   MiniMap,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
//   Handle,
//   Position,
//   addEdge,
//   BackgroundVariant,
// } from "reactflow";
// import '@xyflow/react/dist/base.css';
// import { openAiRequest } from "@/lib/ai";

import MindMap from "@/components/mindmap/mindmap";

// const CustomNode = ({ data }) => {
//   return (
//     <div
//       className={`px-4 py-2 shadow-md rounded-lg border-2 ${
//         data.isRoot
//           ? "bg-blue-600 text-white border-blue-700 min-w-[200px]"
//           : "bg-white border-blue-200 min-w-[180px]"
//       }`}
//     >
//       <Handle type="target" position={Position.Top} className="!bg-blue-400" />
//       <div className={`${data.isRoot ? "font-bold" : "font-medium"} text-center`}>
//         {data.label}
//       </div>
//       <Handle type="source" position={Position.Bottom} className="!bg-blue-400" />
//     </div>
//   );
// };

// const nodeTypes = { custom: CustomNode };

// const MindMap = () => {
//   // initial mind map nodes & edges (default view)
//   const initialNodes = [
//     {
//       id: "1",
//       type: "custom",
//       position: { x: 400, y: 0 },
//       data: { label: "Tư tưởng Hồ Chí Minh", isRoot: true },
//     },
//     {
//       id: "2",
//       type: "custom",
//       position: { x: 0, y: 100 },
//       data: { label: "Chương 1: Khái niệm, đối tượng, phương pháp nghiên cứu" },
//     },
//     {
//       id: "2-1",
//       type: "custom",
//       position: { x: -100, y: 200 },
//       data: { label: "Khái niệm Tư tưởng HCM" },
//     },
//     {
//       id: "2-2",
//       type: "custom",
//       position: { x: 100, y: 200 },
//       data: { label: "Đối tượng nghiên cứu" },
//     },
//     {
//       id: "3",
//       type: "custom",
//       position: { x: 300, y: 100 },
//       data: { label: "Chương 2: Quá trình hình thành và phát triển" },
//     },
//     {
//       id: "3-1",
//       type: "custom",
//       position: { x: 200, y: 200 },
//       data: { label: "Cơ sở hình thành" },
//     },
//     {
//       id: "3-2",
//       type: "custom",
//       position: { x: 400, y: 200 },
//       data: { label: "Các giai đoạn phát triển" },
//     },
//     {
//       id: "4",
//       type: "custom",
//       position: { x: 600, y: 100 },
//       data: { label: "Chương 3: Độc lập dân tộc và CNXH" },
//     },
//     {
//       id: "4-1",
//       type: "custom",
//       position: { x: 500, y: 200 },
//       data: { label: "Độc lập dân tộc" },
//     },
//     {
//       id: "4-2",
//       type: "custom",
//       position: { x: 700, y: 200 },
//       data: { label: "Chủ nghĩa xã hội" },
//     },
//     {
//       id: "5",
//       type: "custom",
//       position: { x: 900, y: 100 },
//       data: { label: "Chương 4: Đảng Cộng sản Việt Nam" },
//     },
//     {
//       id: "5-1",
//       type: "custom",
//       position: { x: 800, y: 200 },
//       data: { label: "Vai trò của Đảng" },
//     },
//     {
//       id: "5-2",
//       type: "custom",
//       position: { x: 1000, y: 200 },
//       data: { label: "Xây dựng Đảng" },
//     },
//   ];

//   const initialEdges = [
//     { id: "e1-2", source: "1", target: "2", animated: true },
//     { id: "e1-3", source: "1", target: "3", animated: true },
//     { id: "e1-4", source: "1", target: "4", animated: true },
//     { id: "e1-5", source: "1", target: "5", animated: true },
//     { id: "e2-21", source: "2", target: "2-1" },
//     { id: "e2-22", source: "2", target: "2-2" },
//     { id: "e3-31", source: "3", target: "3-1" },
//     { id: "e3-32", source: "3", target: "3-2" },
//     { id: "e4-41", source: "4", target: "4-1" },
//     { id: "e4-42", source: "4", target: "4-2" },
//     { id: "e5-51", source: "5", target: "5-1" },
//     { id: "e5-52", source: "5", target: "5-2" },
//   ];

//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   // Chat UI state
//   const [chatMessages, setChatMessages] = useState([
//     {
//       id: 1,
//       text: "Chào mừng! Vui lòng nhập nội dung về môn học 'Tư tưởng Hồ Chí Minh' để tóm tắt thành sơ đồ tư tưởng.",
//     },
//   ]);
//   const [chatInput, setChatInput] = useState("");

//   // Simulation state for mind map update process
//   const [isUpdating, setIsUpdating] = useState(false);

//   const handleSend = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!chatInput.trim()) return;

//     const newMessage = { id: chatMessages.length + 1, text: chatInput };
//     setChatMessages([...chatMessages, newMessage]);
//     setChatInput("");

//     // Start the update effect
//     setIsUpdating(true);

//     try {
//       // Call the AI function to generate an updated mindmap based on user input.
//       // It's assumed that the response.result contains updated 'nodes' and 'edges'
//       const response = await openAiRequest(newMessage.text);
//       console.log("AI response:", response);
//       const { initialNodes: aiNodes, initialEdges: aiEdges } = response.result || {};

//       // Update the mind map if the AI response contains valid data; otherwise, leave the map unchanged.
//       if (aiNodes && aiEdges) {
//         setNodes(aiNodes);
//         setEdges(aiEdges);
//       }
//     } catch (error) {
//       console.error("Error updating mind map:", error);
//     } finally {
//       setIsUpdating(false);
//     }
//   };

//   const clearChat = useCallback(() => {
//     setChatMessages([
//       {
//         id: 1,
//         text: "Chào mừng! Vui lòng nhập nội dung về môn học 'Tư tưởng Hồ Chí Minh' để tóm tắt thành sơ đồ tư tưởng.",
//       },
//     ]);
//   }, []);

//   return (
//     <div className="flex flex-col h-screen">
//       <header className="bg-blue-600 text-white p-4 shadow">
//         <h1 className="text-2xl font-bold">Sơ đồ tư duy</h1>
//         <p className="text-sm">
//           Khám phá các chương và nội dung của tư tưởng Hồ Chí Minh.
//         </p>
//       </header>
//       <main className="flex flex-1">
//         <aside className="w-64 bg-gray-100 p-4 border-r">
//           <h2 className="text-xl font-semibold mb-2">Nội Dung</h2>
//           <ul className="text-sm list-disc pl-5">
//             <li>Chương 1: Khái niệm, đối tượng, phương pháp nghiên cứu</li>
//             <li>Chương 2: Quá trình hình thành và phát triển</li>
//             <li>Chương 3: Độc lập dân tộc và CNXH</li>
//             <li>Chương 4: Đảng Cộng sản Việt Nam</li>
//           </ul>
//           <p className="mt-4 text-xs text-gray-600">
//             Chọn một chương để xem chi tiết trên đồ thị.
//           </p>
//         </aside>
//         <section className="flex-1 relative">
//           <ReactFlow
//             nodes={nodes}
//             edges={edges}
//             onNodesChange={onNodesChange}
//             onEdgesChange={onEdgesChange}
//             onConnect={onConnect}
//             nodeTypes={nodeTypes}
//             fitView
//             attributionPosition="bottom-left"
//           >
//             <Controls />
//             <MiniMap />
//             <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
//           </ReactFlow>
//           {isUpdating && (
//             <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-10">
//               <p className="text-xl font-semibold text-blue-600">
//                 Đang tạo sơ đồ tư tưởng...
//               </p>
//             </div>
//           )}
//         </section>
//         <aside className="w-80 bg-gray-50 border-l p-4 flex flex-col">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-xl font-semibold">Chat</h2>
//             <button
//               type="button"
//               onClick={clearChat}
//               className="bg-gray-500 text-white px-3 py-1 text-sm rounded hover:bg-gray-600"
//             >
//               Clear
//             </button>
//           </div>
//           <div className="flex-1 overflow-y-auto mb-4 space-y-2">
//             {chatMessages.map((msg) => (
//               <div key={msg.id} className="p-2 bg-white rounded shadow">
//                 <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
//               </div>
//             ))}
//           </div>
//           <form onSubmit={handleSend} className="flex gap-1">
//             <input
//               type="text"
//               value={chatInput}
//               onChange={(e) => setChatInput(e.target.value)}
//               className="flex-1 border border-gray-300 rounded-l p-2"
//               placeholder="Nhập nội dung..."
//             />
//             <button type="submit" className="bg-blue-600 text-white px-4 rounded-r">
//               Gửi
//             </button>
//           </form>
//         </aside>
//       </main>
//       <footer className="bg-gray-200 text-gray-700 p-3 text-center">
//         <p>© 2025 MindMap App. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default MindMap;
```