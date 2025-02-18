// components/Sidebar.tsx
const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r">
      <h2 className="text-xl font-semibold mb-2">Nội Dung</h2>
      <ul className="text-sm list-disc pl-5">
        <li>Chương 1: Khái niệm, đối tượng, phương pháp nghiên cứu</li>
        <li>Chương 2: Quá trình hình thành và phát triển</li>
        <li>Chương 3: Độc lập dân tộc và CNXH</li>
        <li>Chương 4: Đảng Cộng sản Việt Nam</li>
        <li>chương 5:
          tư tưởng hồ chí minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế
        </li>
        <li>chương 6:
          tư tưởng hồ chí minh về văn hóa, đạo đức, con người
        </li>
      </ul>
      <p className="mt-4 text-xs text-gray-600">
        Chọn một chương để xem chi tiết trên đồ thị.
      </p>
    </aside>
  );
};

export default Sidebar;
