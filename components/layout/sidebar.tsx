// components/Sidebar.tsx
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Sidebar = ({ onChapterSelect }: {
  onChapterSelect: (chapterNumber: number) => void;
}) => {
  const router = useRouter();
  const [activeChapter, setActiveChapter] = useState(0);

  const handleChapterClick = (chapterNumber: number) => {
    setActiveChapter(chapterNumber);
    onChapterSelect(chapterNumber);
  };

  return (
    <div className="bg-gray-100 w-60 min-h-screen p-4 border-r border-gray-200">
      <h2 className="text-md font-bold mb-4">Nội Dung</h2>

      <ul className="space-y-2 text-sm">
        <li
          className={`p-2 rounded cursor-pointer ${activeChapter === 1 ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
          onClick={() => handleChapterClick(1)}
        >
          Chương 1: Khái niệm, đối tượng, phương pháp nghiên cứu
        </li>

        <li
          className={`p-2 rounded cursor-pointer ${activeChapter === 2 ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
          onClick={() => handleChapterClick(2)}
        >
          Chương 2: Quá trình hình thành và phát triển
        </li>

        <li
          className={`p-2 rounded cursor-pointer ${activeChapter === 3 ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
          onClick={() => handleChapterClick(3)}
        >
          Chương 3: Độc lập dân tộc và CNXH
        </li>

        <li
          className={`p-2 rounded cursor-pointer ${activeChapter === 4 ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
          onClick={() => handleChapterClick(4)}
        >
          Chương 4: Đảng Cộng sản Việt Nam
        </li>

        <li
          className={`p-2 rounded cursor-pointer ${activeChapter === 5 ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
          onClick={() => handleChapterClick(5)}
        >
          Chương 5: Tư tưởng hồ chí minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế
        </li>

        <li
          className={`p-2 rounded cursor-pointer ${activeChapter === 6 ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
          onClick={() => handleChapterClick(6)}
        >
          Chương 6: Tư tưởng hồ chí minh về văn hóa, đạo đức, con người
        </li>
      </ul>

      <div className="mt-6 text-sm text-gray-600">
        Chọn một chương để xem chi tiết trên đồ thị.
      </div>
    </div>
  );
};

export default Sidebar;