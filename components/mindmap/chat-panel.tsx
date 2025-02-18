'use client';
import { FormEvent, useState, useCallback, useRef, useEffect } from "react";

export interface Message {
    id: string;
    text: string;
}

interface ChatPanelProps {
    onSendMessage: (message: string) => Promise<void>;
    isLoading?: boolean;
}

// New MessageItem component
const MessageItem: React.FC<{ message: Message }> = ({ message }) => {
    const MAX_VISIBLE_LENGTH = 300;
    const [expanded, setExpanded] = useState(false);
    const isLong = message.text.length > MAX_VISIBLE_LENGTH;

    return (
        <div className="p-3 bg-white rounded-lg shadow border border-gray-100">
            <p className="text-sm whitespace-pre-wrap">
                {expanded || !isLong ? message.text : `${message.text.substring(0, MAX_VISIBLE_LENGTH)}...`}
            </p>
            {isLong && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-blue-500 text-xs mt-1 hover:underline focus:outline-none"
                >
                    {expanded ? 'Thu gọn' : 'Xem thêm'}
                </button>
            )}
        </div>
    );
};

const ChatPanel: React.FC<ChatPanelProps> = ({
    onSendMessage,
    isLoading = false,
}) => {
    // Local state management
    const [chatMessages, setChatMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Chào mừng! Vui lòng nhập nội dung về môn học 'Tư tưởng Hồ Chí Minh' để tóm tắt thành sơ đồ tư tưởng.",
        },
    ]);
    const [chatInput, setChatInput] = useState("");
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Auto-scroll when new messages are added
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [chatMessages]);

    // Auto-resize textarea based on content
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [chatInput]);

    const handleSend = async (e: FormEvent) => {
        e.preventDefault();
        if (!chatInput.trim() || isLoading) return;

        const newMessage = { id: (chatMessages.length + 1).toString(), text: chatInput };
        setChatMessages((prev) => [...prev, newMessage]);
        setChatInput("");

        // Call the parent's handler
        try {
            await onSendMessage(newMessage.text);
        } catch (error) {
            console.error("Error sending message:", error);
            setChatMessages((prev) => [...prev, { 
                id: (prev.length + 1).toString(), 
                text: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại." 
            }]);
        }

        // Reset textarea height
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
        }
    };

    const clearChat = useCallback(() => {
        setChatMessages([
            {
                id: "1",
                text: "Chào mừng! Vui lòng nhập nội dung về môn học 'Tư tưởng Hồ Chí Minh' để tóm tắt thành sơ đồ tư tưởng.",
            },
        ]);
    }, []);

    // Handle textarea resizing and Enter key for sending
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend(e as unknown as FormEvent);
        }
    };

    return (
        <aside className="w-80 bg-gray-50 border-l p-4 flex flex-col h-full">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">Chat</h2>
                <button
                    type="button"
                    onClick={clearChat}
                    className="bg-gray-500 text-white px-3 py-1 text-sm rounded hover:bg-gray-600 transition-colors"
                    disabled={isLoading}
                >
                    Clear
                </button>
            </div>
            <div 
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto mb-4 space-y-3 pr-1 custom-scrollbar"
                style={{ maxHeight: 'calc(100vh - 180px)' }}
            >
                {chatMessages.map(message => (
                    <MessageItem key={message.id} message={message} />
                ))}
            </div>
            <form onSubmit={handleSend} className="flex flex-col gap-2">
                <div className="relative">
                    <textarea
                        ref={textareaRef}
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full border border-gray-300 rounded p-2 pr-10 resize-none min-h-[40px] max-h-[150px] overflow-y-auto custom-scrollbar"
                        placeholder="Nhập nội dung..."
                        disabled={isLoading}
                        rows={1}
                    />
                    <div className="absolute right-2 bottom-2 text-xs text-gray-400">
                        {chatInput.length > 0 && `${chatInput.length} ký tự`}
                    </div>
                </div>
                <button 
                    type="submit" 
                    className={`${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded transition-colors`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Đang gửi...' : 'Gửi'}
                </button>
            </form>
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #c1c1c1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #a1a1a1;
                }
            `}</style>
        </aside>
    );
}

export default ChatPanel;