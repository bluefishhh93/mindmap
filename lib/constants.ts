import { CustomNode } from "@/lib/types";

export const initialNodes: CustomNode[] = [
  // Node gốc
  {
    id: "root",
    type: "custom",
    position: { x: 2100, y: 20 },
    data: { label: "Tư tưởng Hồ Chí Minh", isRoot: true },
  },
  // ---------------------------
  // Chương I: Cơ sở, quá trình hình thành và phát triển tư tưởng HCM
  {
    id: "ch1",
    type: "custom",
    position: { x: 300, y: 150 },
    data: {
      label: "Chương I:\nCơ sở, quá trình hình thành và phát triển\nTư tưởng Hồ Chí Minh",
    },
  },
  // --- Phần I: Cơ sở hình thành tư tưởng HCM
  {
    id: "ch1-1",
    type: "custom",
    position: { x: 150, y: 250 },
    data: { label: "I. Cơ sở hình thành tư tưởng HCM" },
  },
  {
    id: "ch1-1a",
    type: "custom",
    position: { x: 30, y: 350 },
    data: { label: "Thời kỳ 1930-1945" },
  },
  {
    id: "ch1-1b",
    type: "custom",
    position: { x: 270, y: 350 },
    data: { label: "Thời kỳ 1945-1969" },
  },
  // --- Phần III: Giá trị tư tưởng HCM
  {
    id: "ch1-2",
    type: "custom",
    position: { x: 450, y: 250 },
    data: { label: "III. Giá trị tư tưởng HCM" },
  },
  {
    id: "ch1-2a",
    type: "custom",
    position: { x: 360, y: 350 },
    data: { label: "Soi sáng con đường giải phóng & phát triển dân tộc" },
  },
  {
    id: "ch1-2b",
    type: "custom",
    position: { x: 540, y: 350 },
    data: { label: "Đóng góp cho phát triển thế giới" },
  },
  // ---------------------------
  // Chương II: Tư tưởng về dân tộc & cách mạng giải phóng dân tộc
  {
    id: "ch2",
    type: "custom",
    position: { x: 900, y: 150 },
    data: {
      label:
        "Chương II:\nTư tưởng về dân tộc & cách mạng giải phóng dân tộc",
    },
  },
  // --- Phần I: Tư tưởng về vấn đề dân tộc
  {
    id: "ch2-1",
    type: "custom",
    position: { x: 750, y: 250 },
    data: { label: "I. Tư tưởng về vấn đề dân tộc" },
  },
  {
    id: "ch2-1a",
    type: "custom",
    position: { x: 630, y: 350 },
    data: { label: "Vấn đề dân tộc thuộc địa" },
  },
  {
    id: "ch2-1b",
    type: "custom",
    position: { x: 750, y: 350 },
    data: { label: "Mối quan hệ dân tộc & giai cấp" },
  },
  // --- Phần II: Tư tưởng về cách mạng giải phóng dân tộc
  {
    id: "ch2-2",
    type: "custom",
    position: { x: 1050, y: 250 },
    data: { label: "II. Tư tưởng về cách mạng giải phóng dân tộc" },
  },
  {
    id: "ch2-2a",
    type: "custom",
    position: { x: 930, y: 350 },
    data: { label: "Mục tiêu cách mạng giải phóng dân tộc" },
  },
  {
    id: "ch2-2b",
    type: "custom",
    position: { x: 1020, y: 350 },
    data: { label: "Con đường cách mạng vô sản & bạo lực cách mạng" },
  },
  {
    id: "ch2-2c",
    type: "custom",
    position: { x: 1110, y: 350 },
    data: { label: "Kết luận" },
  },
  // ---------------------------
  // Chương III: Chủ nghĩa xã hội & con đường quá độ
  {
    id: "ch3",
    type: "custom",
    position: { x: 1500, y: 150 },
    data: { label: "Chương III:\nChủ nghĩa xã hội & con đường quá độ" },
  },
  {
    id: "ch3-1",
    type: "custom",
    position: { x: 1380, y: 250 },
    data: { label: "Tính tất yếu của chủ nghĩa xã hội" },
  },
  {
    id: "ch3-2",
    type: "custom",
    position: { x: 1500, y: 250 },
    data: { label: "Đặc trưng của chủ nghĩa xã hội" },
  },
  {
    id: "ch3-3",
    type: "custom",
    position: { x: 1620, y: 250 },
    data: { label: "Quan điểm về mục tiêu & động lực" },
  },
  // ---------------------------
  // Chương IV: Đảng & xây dựng Đảng, đoàn kết quốc tế
  {
    id: "ch4",
    type: "custom",
    position: { x: 2100, y: 150 },
    data: { label: "Chương IV:\nĐảng & xây dựng Đảng, đoàn kết quốc tế" },
  },
  // --- Phần I: Quan niệm về Đảng
  {
    id: "ch4-1",
    type: "custom",
    position: { x: 2010, y: 250 },
    data: { label: "I. Quan niệm về Đảng" },
  },
  {
    id: "ch4-1a",
    type: "custom",
    position: { x: 1920, y: 350 },
    data: { label: "Ra đời Đảng" },
  },
  {
    id: "ch4-1b",
    type: "custom",
    position: { x: 2010, y: 350 },
    data: { label: "Vai trò của Đảng" },
  },
  {
    id: "ch4-1c",
    type: "custom",
    position: { x: 2100, y: 350 },
    data: { label: "Bản chất của Đảng" },
  },
  // --- Phần II: Xây dựng Đảng
  {
    id: "ch4-2",
    type: "custom",
    position: { x: 2250, y: 250 },
    data: { label: "II. Xây dựng Đảng" },
  },
  {
    id: "ch4-2a",
    type: "custom",
    position: { x: 2190, y: 350 },
    data: { label: "Về tư tưởng & lý luận" },
  },
  {
    id: "ch4-2b",
    type: "custom",
    position: { x: 2310, y: 350 },
    data: { label: "Về chính trị" },
  },
  {
    id: "ch4-2c",
    type: "custom",
    position: { x: 2250, y: 400 },
    data: { label: "Tổ chức & cán bộ" },
  },
  {
    id: "ch4-2d",
    type: "custom",
    position: { x: 2430, y: 350 },
    data: { label: "Về đạo đức" },
  },
  // --- Phần III: Đoàn kết quốc tế
  {
    id: "ch4-3",
    type: "custom",
    position: { x: 2100, y: 450 },
    data: { label: "Đoàn kết quốc tế" },
  },
  {
    id: "ch4-3a",
    type: "custom",
    position: { x: 2040, y: 550 },
    data: { label: "Sự cần thiết" },
  },
  {
    id: "ch4-3b",
    type: "custom",
    position: { x: 2100, y: 550 },
    data: { label: "Kết hợp sức mạnh dân tộc & thời đại" },
  },
  {
    id: "ch4-3c",
    type: "custom",
    position: { x: 2160, y: 550 },
    data: { label: "Nội dung & hình thức" },
  },
  {
    id: "ch4-3d",
    type: "custom",
    position: { x: 2220, y: 550 },
    data: { label: "Nguyên tắc đoàn kết" },
  },
  // ---------------------------
  // Chương VI: Dân chủ & Nhà nước của dân
  {
    id: "ch6",
    type: "custom",
    position: { x: 2700, y: 150 },
    data: { label: "Chương VI:\nDân chủ & Nhà nước của dân" },
  },
  // --- Phần I: Quan điểm về dân chủ
  {
    id: "ch6-1",
    type: "custom",
    position: { x: 2610, y: 250 },
    data: { label: "I. Quan điểm về dân chủ" },
  },
  {
    id: "ch6-1a",
    type: "custom",
    position: { x: 2520, y: 350 },
    data: { label: "Quan niệm về dân chủ" },
  },
  {
    id: "ch6-1b",
    type: "custom",
    position: { x: 2610, y: 350 },
    data: { label: "Quyền lực của nhân dân" },
  },
  {
    id: "ch6-1c",
    type: "custom",
    position: { x: 2700, y: 350 },
    data: { label: "Cơ chế bảo đảm dân chủ" },
  },
  // --- Phần II: Thực hành dân chủ
  {
    id: "ch6-2",
    type: "custom",
    position: { x: 2790, y: 250 },
    data: { label: "Thực hành dân chủ" },
  },
  {
    id: "ch6-2a",
    type: "custom",
    position: { x: 2730, y: 350 },
    data: { label: "Tổ chức bộ máy Nhà nước" },
  },
  {
    id: "ch6-2b",
    type: "custom",
    position: { x: 2790, y: 350 },
    data: { label: "Đề phòng tiêu cực" },
  },
  {
    id: "ch6-2c",
    type: "custom",
    position: { x: 2850, y: 350 },
    data: { label: "Tăng cường pháp luật & đạo đức" },
  },
];

export const initialEdges = [
  // Các edge từ node gốc đến các chương
  { id: "e-root-ch1", source: "root", target: "ch1", animated: true },
  { id: "e-root-ch2", source: "root", target: "ch2", animated: true },
  { id: "e-root-ch3", source: "root", target: "ch3", animated: true },
  { id: "e-root-ch4", source: "root", target: "ch4", animated: true },
  { id: "e-root-ch6", source: "root", target: "ch6", animated: true },

  // --- Edges cho Chương I
  { id: "e-ch1-ch1-1", source: "ch1", target: "ch1-1" },
  { id: "e-ch1-1-ch1-1a", source: "ch1-1", target: "ch1-1a" },
  { id: "e-ch1-1-ch1-1b", source: "ch1-1", target: "ch1-1b" },
  { id: "e-ch1-ch1-2", source: "ch1", target: "ch1-2" },
  { id: "e-ch1-2-ch1-2a", source: "ch1-2", target: "ch1-2a" },
  { id: "e-ch1-2-ch1-2b", source: "ch1-2", target: "ch1-2b" },

  // --- Edges cho Chương II
  { id: "e-ch2-ch2-1", source: "ch2", target: "ch2-1" },
  { id: "e-ch2-1-ch2-1a", source: "ch2-1", target: "ch2-1a" },
  { id: "e-ch2-1-ch2-1b", source: "ch2-1", target: "ch2-1b" },
  { id: "e-ch2-ch2-2", source: "ch2", target: "ch2-2" },
  { id: "e-ch2-2-ch2-2a", source: "ch2-2", target: "ch2-2a" },
  { id: "e-ch2-2-ch2-2b", source: "ch2-2", target: "ch2-2b" },
  { id: "e-ch2-2-ch2-2c", source: "ch2-2", target: "ch2-2c" },

  // --- Edges cho Chương III
  { id: "e-ch3-ch3-1", source: "ch3", target: "ch3-1" },
  { id: "e-ch3-ch3-2", source: "ch3", target: "ch3-2" },
  { id: "e-ch3-ch3-3", source: "ch3", target: "ch3-3" },

  // --- Edges cho Chương IV
  { id: "e-ch4-ch4-1", source: "ch4", target: "ch4-1" },
  { id: "e-ch4-1-ch4-1a", source: "ch4-1", target: "ch4-1a" },
  { id: "e-ch4-1-ch4-1b", source: "ch4-1", target: "ch4-1b" },
  { id: "e-ch4-1-ch4-1c", source: "ch4-1", target: "ch4-1c" },
  { id: "e-ch4-ch4-2", source: "ch4", target: "ch4-2" },
  { id: "e-ch4-2-ch4-2a", source: "ch4-2", target: "ch4-2a" },
  { id: "e-ch4-2-ch4-2b", source: "ch4-2", target: "ch4-2b" },
  { id: "e-ch4-2-ch4-2c", source: "ch4-2", target: "ch4-2c" },
  { id: "e-ch4-2-ch4-2d", source: "ch4-2", target: "ch4-2d" },
  { id: "e-ch4-ch4-3", source: "ch4", target: "ch4-3" },
  { id: "e-ch4-3-ch4-3a", source: "ch4-3", target: "ch4-3a" },
  { id: "e-ch4-3-ch4-3b", source: "ch4-3", target: "ch4-3b" },
  { id: "e-ch4-3-ch4-3c", source: "ch4-3", target: "ch4-3c" },
  { id: "e-ch4-3-ch4-3d", source: "ch4-3", target: "ch4-3d" },

  // --- Edges cho Chương VI
  { id: "e-ch6-ch6-1", source: "ch6", target: "ch6-1" },
  { id: "e-ch6-1-ch6-1a", source: "ch6-1", target: "ch6-1a" },
  { id: "e-ch6-1-ch6-1b", source: "ch6-1", target: "ch6-1b" },
  { id: "e-ch6-1-ch6-1c", source: "ch6-1", target: "ch6-1c" },
  { id: "e-ch6-ch6-2", source: "ch6", target: "ch6-2" },
  { id: "e-ch6-2-ch6-2a", source: "ch6-2", target: "ch6-2a" },
  { id: "e-ch6-2-ch6-2b", source: "ch6-2", target: "ch6-2b" },
  { id: "e-ch6-2-ch6-2c", source: "ch6-2", target: "ch6-2c" },
];




/* 
  Mỗi object gồm 2 thuộc tính:
  - nodes: danh sách các node của mindmap chương đó.
  - edges: danh sách các kết nối giữa các node.
*/
/* =======================================
   Mindmap Chương I: Cơ sở, quá trình hình thành và phát triển tư tưởng HCM
======================================= */
export const mindMapCh1 = {
  nodes: [
    {
      id: "ch1",
      type: "custom",
      position: { x: 600, y: 50 },
      data: { label: "Chương I:\nCơ sở, quá trình hình thành & phát triển\nTư tưởng Hồ Chí Minh" },
    },
    // Phần I: Cơ sở hình thành tư tưởng HCM
    {
      id: "ch1-I",
      type: "custom",
      position: { x: 300, y: 200 },
      data: { label: "I. Cơ sở hình thành tư tưởng HCM" },
    },
    {
      id: "ch1-I-1930",
      type: "custom",
      position: { x: 150, y: 300 },
      data: { label: "Thời kỳ 1930-1945" },
    },
    {
      id: "ch1-I-1930-details",
      type: "custom",
      position: { x: 150, y: 400 },
      data: {
        label:
          "• Vượt qua thử thách, kiên trì giữ vững lập trường\n• Giữ vững quan điểm trước khuynh hướng 'tả khuynh'\n• Theo sát tình hình chỉ đạo cách mạng\n• Xây dựng & hoàn thiện chiến lược giải phóng dân tộc\n• Tư tưởng về các quyền dân tộc",
      },
    },
    {
      id: "ch1-I-1945",
      type: "custom",
      position: { x: 450, y: 300 },
      data: { label: "Thời kỳ 1945-1969" },
    },
    {
      id: "ch1-I-1945-details",
      type: "custom",
      position: { x: 450, y: 400 },
      data: {
        label:
          "• Tư tưởng phát triển, hoàn thiện\n• Kết hợp kháng chiến với kiến quốc\n• Chiến tranh nhân dân, toàn dân, toàn diện, kháng chiến lâu dài\n• Chủ nghĩa xã hội & con đường quá độ\n• Xây dựng Nhà nước của dân, do dân, vì dân\n• Chiến lược con người; xây dựng Đảng\n• Quan hệ quốc tế & đối ngoại",
      },
    },
    // Phần II: Giá trị tư tưởng HCM
    {
      id: "ch1-II",
      type: "custom",
      position: { x: 900, y: 200 },
      data: { label: "II. Giá trị tư tưởng HCM" },
    },
    {
      id: "ch1-II-a",
      type: "custom",
      position: { x: 750, y: 300 },
      data: { label: "Soi sáng con đường giải phóng\nvà phát triển dân tộc" },
    },
    {
      id: "ch1-II-a-details",
      type: "custom",
      position: { x: 750, y: 400 },
      data: {
        label:
          "• Tài sản tinh thần vô giá của dân tộc\n• Nền tảng tư tưởng & kim chỉ nam cho cách mạng Việt Nam",
      },
    },
    {
      id: "ch1-II-b",
      type: "custom",
      position: { x: 1050, y: 300 },
      data: { label: "Tư tưởng đối với\nsự phát triển thế giới" },
    },
    {
      id: "ch1-II-b-details",
      type: "custom",
      position: { x: 1050, y: 400 },
      data: {
        label:
          "• Phản ánh khát vọng thời đại\n• Tìm ra giải pháp đấu tranh giải phóng loài người",
      },
    },
  ],
  edges: [
    { id: "e-ch1-I", source: "ch1", target: "ch1-I" },
    { id: "e-ch1-I-1930", source: "ch1-I", target: "ch1-I-1930" },
    { id: "e-ch1-I-1930-details", source: "ch1-I-1930", target: "ch1-I-1930-details" },
    { id: "e-ch1-I-1945", source: "ch1-I", target: "ch1-I-1945" },
    { id: "e-ch1-I-1945-details", source: "ch1-I-1945", target: "ch1-I-1945-details" },
    { id: "e-ch1-II", source: "ch1", target: "ch1-II" },
    { id: "e-ch1-II-a", source: "ch1-II", target: "ch1-II-a" },
    { id: "e-ch1-II-a-details", source: "ch1-II-a", target: "ch1-II-a-details" },
    { id: "e-ch1-II-b", source: "ch1-II", target: "ch1-II-b" },
    { id: "e-ch1-II-b-details", source: "ch1-II-b", target: "ch1-II-b-details" },
  ],
};

/* =======================================
   Mindmap Chương II: Tư tưởng HCM về vấn đề dân tộc và cách mạng giải phóng dân tộc
======================================= */
export const mindMapCh2 = {
  nodes: [
    {
      id: "ch2",
      type: "custom",
      position: { x: 800, y: 50 },
      data: {
        label:
          "Chương II:\nTư tưởng về vấn đề dân tộc & cách mạng giải phóng dân tộc",
      },
    },
    // Phần I: Vấn đề dân tộc
    {
      id: "ch2-I",
      type: "custom",
      position: { x: 300, y: 150 },
      data: { label: "I. Tư tưởng về vấn đề dân tộc" },
    },
    {
      id: "ch2-I-a",
      type: "custom",
      position: { x: 150, y: 250 },
      data: { label: "Vấn đề dân tộc thuộc địa" },
    },
    {
      id: "ch2-I-a-details",
      type: "custom",
      position: { x: 150, y: 350 },
      data: {
        label:
          "a) Thực chất của vấn đề dân tộc thuộc địa\nb) Đấu tranh chống chủ nghĩa thực dân, giải phóng dân tộc",
      },
    },
    {
      id: "ch2-I-b",
      type: "custom",
      position: { x: 300, y: 250 },
      data: { label: "Lựa chọn con đường phát triển dân tộc" },
    },
    {
      id: "ch2-I-b-details",
      type: "custom",
      position: { x: 300, y: 350 },
      data: {
        label:
          "• Độc lập dân tộc – nội dung cốt lõi\n• Phương thức từ quyền con người\n• Nội dung độc lập dân tộc",
      },
    },
    {
      id: "ch2-I-c",
      type: "custom",
      position: { x: 450, y: 250 },
      data: { label: "Mối quan hệ dân tộc & giai cấp" },
    },
    {
      id: "ch2-I-c-details",
      type: "custom",
      position: { x: 450, y: 350 },
      data: {
        label:
          "a) Quan hệ chặt chẽ\nb) Giải phóng dân tộc là vấn đề trên hết, gắn liền với chủ nghĩa xã hội\nc) Tiền đề cho giải phóng giai cấp\nd) Giữ vững độc lập dân tộc & tôn trọng độc lập của các dân tộc",
      },
    },
    // Phần II: Cách mạng giải phóng dân tộc
    {
      id: "ch2-II",
      type: "custom",
      position: { x: 1150, y: 150 },
      data: { label: "II. Tư tưởng về cách mạng giải phóng dân tộc" },
    },
    {
      id: "ch2-II-a",
      type: "custom",
      position: { x: 650, y: 250 },
      data: { label: "Mục tiêu của cách mạng giải phóng dân tộc" },
    },
    {
      id: "ch2-II-a1",
      type: "custom",
      position: { x: 600, y: 350 },
      data: { label: "a) Cách mạng ở thuộc địa" },
    },
    {
      id: "ch2-II-a1-details",
      type: "custom",
      position: { x: 600, y: 450 },
      data: {
        label:
          "• Phân hóa xã hội, mâu thuẫn\n• Đối tượng, nhiệm vụ bức thiết\n• Tính chất của cách mạng thuộc địa",
      },
    },
    {
      id: "ch2-II-a2",
      type: "custom",
      position: { x: 800, y: 350 },
      data: { label: "b) Mục tiêu của cách mạng giải phóng" },
    },
    {
      id: "ch2-II-a2-details",
      type: "custom",
      position: { x: 800, y: 450 },
      data: {
        label:
          "• Lật đổ ách đế quốc\n• Giành độc lập dân tộc\n• Giành chính quyền về tay nhân dân",
      },
    },
    {
      id: "ch2-II-b",
      type: "custom",
      position: { x: 1000, y: 250 },
      data: {
        label:
          "Con đường cách mạng\n(Bài học từ các con đường trước & con đường vô sản)",
      },
    },
    {
      id: "ch2-II-c",
      type: "custom",
      position: { x: 1200, y: 250 },
      data: { label: "Quan hệ cách mạng thuộc địa - vô sản" },
    },
    {
      id: "ch2-II-c-details",
      type: "custom",
      position: { x: 1200, y: 350 },
      data: {
        label:
          "• Chung chống chủ nghĩa đế quốc\n• Quan hệ bình đẳng\n• Khả năng giành thắng lợi",
      },
    },
    {
      id: "ch2-II-d",
      type: "custom",
      position: { x: 1400, y: 250 },
      data: { label: "Bạo lực cách mạng" },
    },
    {
      id: "ch2-II-d1",
      type: "custom",
      position: { x: 1300, y: 350 },
      data: { label: "a) Quan điểm về bạo lực" },
    },
    {
      id: "ch2-II-d1-details",
      type: "custom",
      position: { x: 1300, y: 450 },
      data: {
        label:
          "• Tính tất yếu của bạo lực\n• Bạo lực của quần chúng\n• Hình thức bạo lực",
      },
    },
    {
      id: "ch2-II-d2",
      type: "custom",
      position: { x: 1450, y: 350 },
      data: { label: "b) Tư tưởng bạo lực cách mạng" },
    },
    {
      id: "ch2-II-d2-details",
      type: "custom",
      position: { x: 1450, y: 450 },
      data: {
        label:
          "• Gắn với nhân đạo & hòa bình\n• Chiến tranh là giải pháp cuối cùng",
      },
    },
    {
      id: "ch2-II-d3",
      type: "custom",
      position: { x: 1600, y: 350 },
      data: { label: "c) Hình thái bạo lực" },
    },
    {
      id: "ch2-II-d3-details",
      type: "custom",
      position: { x: 1600, y: 450 },
      data: {
        label:
          "• Khởi nghĩa toàn dân\n• Chiến tranh nhân dân",
      },
    },
    {
      id: "ch2-II-e",
      type: "custom",
      position: { x: 1150, y: 550 },
      data: { label: "KẾT LUẬN & Ý nghĩa" },
    },
    {
      id: "ch2-II-e-details",
      type: "custom",
      position: { x: 1150, y: 650 },
      data: {
        label:
          "• Sáng tạo lý luận của HCM\n• Nhận diện đúng thực chất vấn đề dân tộc\n• Xác định con đường giải phóng\n• Củng cố niềm tự hào dân tộc, đóng góp xây dựng dân tộc giàu mạnh",
      },
    },
  ],
  edges: [
    { id: "e-ch2-I", source: "ch2", target: "ch2-I" },
    { id: "e-ch2-I-a", source: "ch2-I", target: "ch2-I-a" },
    { id: "e-ch2-I-a-details", source: "ch2-I-a", target: "ch2-I-a-details" },
    { id: "e-ch2-I-b", source: "ch2-I", target: "ch2-I-b" },
    { id: "e-ch2-I-b-details", source: "ch2-I-b", target: "ch2-I-b-details" },
    { id: "e-ch2-I-c", source: "ch2-I", target: "ch2-I-c" },
    { id: "e-ch2-I-c-details", source: "ch2-I-c", target: "ch2-I-c-details" },
    { id: "e-ch2-II", source: "ch2", target: "ch2-II" },
    { id: "e-ch2-II-a", source: "ch2-II", target: "ch2-II-a" },
    { id: "e-ch2-II-a1", source: "ch2-II-a", target: "ch2-II-a1" },
    { id: "e-ch2-II-a1-details", source: "ch2-II-a1", target: "ch2-II-a1-details" },
    { id: "e-ch2-II-a2", source: "ch2-II-a", target: "ch2-II-a2" },
    { id: "e-ch2-II-a2-details", source: "ch2-II-a2", target: "ch2-II-a2-details" },
    { id: "e-ch2-II-b", source: "ch2-II", target: "ch2-II-b" },
    { id: "e-ch2-II-c", source: "ch2-II", target: "ch2-II-c" },
    { id: "e-ch2-II-c-details", source: "ch2-II-c", target: "ch2-II-c-details" },
    { id: "e-ch2-II-d", source: "ch2-II", target: "ch2-II-d" },
    { id: "e-ch2-II-d1", source: "ch2-II-d", target: "ch2-II-d1" },
    { id: "e-ch2-II-d1-details", source: "ch2-II-d1", target: "ch2-II-d1-details" },
    { id: "e-ch2-II-d2", source: "ch2-II-d", target: "ch2-II-d2" },
    { id: "e-ch2-II-d2-details", source: "ch2-II-d2", target: "ch2-II-d2-details" },
    { id: "e-ch2-II-d3", source: "ch2-II-d", target: "ch2-II-d3" },
    { id: "e-ch2-II-d3-details", source: "ch2-II-d3", target: "ch2-II-d3-details" },
    { id: "e-ch2-II-e", source: "ch2-II", target: "ch2-II-e" },
    { id: "e-ch2-II-e-details", source: "ch2-II-e", target: "ch2-II-e-details" },
  ],
};

/* =======================================
   Mindmap Chương III: Tư tưởng HCM về chủ nghĩa xã hội & con đường quá độ
======================================= */
export const mindMapCh3 = {
  nodes: [
    {
      id: "ch3",
      type: "custom",
      position: { x: 700, y: 50 },
      data: {
        label:
          "Chương III:\nTư tưởng về chủ nghĩa xã hội & con đường quá độ\nlên chủ nghĩa xã hội ở Việt Nam",
      },
    },
    {
      id: "ch3-I",
      type: "custom",
      position: { x: 700, y: 200 },
      data: { label: "I. Tư tưởng về chủ nghĩa xã hội ở Việt Nam" },
    },
    {
      id: "ch3-I-1",
      type: "custom",
      position: { x: 400, y: 300 },
      data: { label: "1. Tính tất yếu" },
    },
    {
      id: "ch3-I-1-details",
      type: "custom",
      position: { x: 400, y: 400 },
      data: {
        label:
          "a) Bước phát triển tất yếu sau độc lập\nb) Giải phóng con người",
      },
    },
    {
      id: "ch3-I-2",
      type: "custom",
      position: { x: 700, y: 300 },
      data: { label: "2. Đặc trưng của chủ nghĩa xã hội" },
    },
    {
      id: "ch3-I-2-details",
      type: "custom",
      position: { x: 700, y: 400 },
      data: {
        label:
          "a) Chế độ xã hội ưu việt, phương thức tiếp cận\nb) Nhân dân làm chủ, nền chính trị dân chủ, kinh tế – văn hóa phát triển, quan hệ quốc tế hòa bình",
      },
    },
    {
      id: "ch3-I-3",
      type: "custom",
      position: { x: 1000, y: 300 },
      data: { label: "3. Mục tiêu & động lực" },
    },
    {
      id: "ch3-I-3-details",
      type: "custom",
      position: { x: 1000, y: 400 },
      data: {
        label:
          "a) Mục tiêu tổng quát: xây dựng Việt Nam hòa bình, thống nhất, độc lập, dân chủ, giàu mạnh\nb) Động lực: động lực vật chất & tinh thần",
      },
    },
  ],
  edges: [
    { id: "e-ch3-I", source: "ch3", target: "ch3-I" },
    { id: "e-ch3-I-1", source: "ch3-I", target: "ch3-I-1" },
    { id: "e-ch3-I-1-details", source: "ch3-I-1", target: "ch3-I-1-details" },
    { id: "e-ch3-I-2", source: "ch3-I", target: "ch3-I-2" },
    { id: "e-ch3-I-2-details", source: "ch3-I-2", target: "ch3-I-2-details" },
    { id: "e-ch3-I-3", source: "ch3-I", target: "ch3-I-3" },
    { id: "e-ch3-I-3-details", source: "ch3-I-3", target: "ch3-I-3-details" },
  ],
};


/* =======================================
  Mindmap Chương IV: Tư tưởng HCM về Đảng Cộng sản Việt Nam
======================================= */
export const mindMapCh4 = {
  nodes: [
    {
      id: "ch4",
      type: "custom",
      position: { x: 400, y: 0 },
      data: { label: "Chương IV:\nTư tưởng về Đảng Cộng sản Việt Nam" },
    },
    // Phần I: Quan niệm về Đảng
    {
      id: "ch4-I",
      type: "custom",
      position: { x: 250, y: 100 },
      data: { label: "I. Quan niệm về vai trò & bản chất của Đảng" },
    },
    {
      id: "ch4-I-a",
      type: "custom",
      position: { x: 200, y: 200 },
      data: { label: "Ra đời của Đảng" },
    },
    {
      id: "ch4-I-a-details",
      type: "custom",
      position: { x: 200, y: 250 },
      data: {
        label:
          "a) Cách mạng trước hết cần có Đảng (Mác - Lênin, kinh nghiệm quốc tế & Việt Nam)\nb) Đảng ra đời là tất yếu lịch sử",
      },
    },
    {
      id: "ch4-I-b",
      type: "custom",
      position: { x: 300, y: 200 },
      data: { label: "Vai trò của Đảng" },
    },
    {
      id: "ch4-I-b-details",
      type: "custom",
      position: { x: 300, y: 250 },
      data: {
        label:
          "• Lựa chọn con đường, xây dựng sách lược cách mạng\n• Tổ chức, đoàn kết lực lượng cách mạng trong nước & quốc tế\n• Vai trò tiên phong, gương mẫu của đảng viên",
      },
    },
    {
      id: "ch4-I-c",
      type: "custom",
      position: { x: 400, y: 200 },
      data: { label: "Bản chất của Đảng" },
    },
    {
      id: "ch4-I-c-details",
      type: "custom",
      position: { x: 400, y: 250 },
      data: {
        label:
          "• Đảng của giai cấp công nhân & của nhân dân lao động\n• Cầm quyền toàn diện, xác định chiến lược cách mạng",
      },
    },
    // Phần II: Xây dựng Đảng
    {
      id: "ch4-II",
      type: "custom",
      position: { x: 500, y: 100 },
      data: { label: "II. Xây dựng Đảng trong sạch, vững mạnh" },
    },
    {
      id: "ch4-II-a",
      type: "custom",
      position: { x: 450, y: 200 },
      data: { label: "Xây dựng về tư tưởng & lý luận" },
    },
    {
      id: "ch4-II-a-details",
      type: "custom",
      position: { x: 450, y: 250 },
      data: { label: "Giáo dục lý luận Mác - Lênin cho cán bộ, đảng viên" },
    },
    {
      id: "ch4-II-b",
      type: "custom",
      position: { x: 550, y: 200 },
      data: { label: "Xây dựng về chính trị" },
    },
    {
      id: "ch4-II-b-details",
      type: "custom",
      position: { x: 550, y: 250 },
      data: { label: "Xây dựng đường lối cách mạng, giáo dục chính sách & thông tin thời sự" },
    },
    {
      id: "ch4-II-c",
      type: "custom",
      position: { x: 650, y: 200 },
      data: { label: "Xây dựng về tổ chức & cán bộ" },
    },
    {
      id: "ch4-II-c-details",
      type: "custom",
      position: { x: 650, y: 250 },
      data: { label: "Hệ thống tổ chức, nguyên tắc tổ chức & công tác cán bộ" },
    },
    {
      id: "ch4-II-d",
      type: "custom",
      position: { x: 750, y: 200 },
      data: { label: "Xây dựng về đạo đức" },
    },
    {
      id: "ch4-II-d-details",
      type: "custom",
      position: { x: 750, y: 250 },
      data: { label: "Tư cách và đạo đức cách mạng, giáo dục đạo đức cho cán bộ" },
    },
    // Phần III: Đại đoàn kết toàn dân & Phần IV: Đoàn kết quốc tế
    {
      id: "ch4-III",
      type: "custom",
      position: { x: 400, y: 350 },
      data: { label: "Đại đoàn kết toàn dân" },
    },
    {
      id: "ch4-III-a",
      type: "custom",
      position: { x: 350, y: 450 },
      data: { label: "Kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết" },
    },
    {
      id: "ch4-IV",
      type: "custom",
      position: { x: 600, y: 350 },
      data: { label: "Đoàn kết quốc tế" },
    },
    {
      id: "ch4-IV-a",
      type: "custom",
      position: { x: 550, y: 450 },
      data: { label: "Sự cần thiết" },
    },
    {
      id: "ch4-IV-b",
      type: "custom",
      position: { x: 650, y: 450 },
      data: { label: "Nội dung & hình thức" },
    },
    {
      id: "ch4-IV-c",
      type: "custom",
      position: { x: 750, y: 450 },
      data: { label: "Nguyên tắc đoàn kết" },
    },
  ],
  edges: [
    // Phần I
    { id: "e-ch4-I", source: "ch4", target: "ch4-I" },
    { id: "e-ch4-I-a", source: "ch4-I", target: "ch4-I-a" },
    { id: "e-ch4-I-a-details", source: "ch4-I-a", target: "ch4-I-a-details" },
    { id: "e-ch4-I-b", source: "ch4-I", target: "ch4-I-b" },
    { id: "e-ch4-I-b-details", source: "ch4-I-b", target: "ch4-I-b-details" },
    { id: "e-ch4-I-c", source: "ch4-I", target: "ch4-I-c" },
    { id: "e-ch4-I-c-details", source: "ch4-I-c", target: "ch4-I-c-details" },
    // Phần II
    { id: "e-ch4-II", source: "ch4", target: "ch4-II" },
    { id: "e-ch4-II-a", source: "ch4-II", target: "ch4-II-a" },
    { id: "e-ch4-II-a-details", source: "ch4-II-a", target: "ch4-II-a-details" },
    { id: "e-ch4-II-b", source: "ch4-II", target: "ch4-II-b" },
    { id: "e-ch4-II-b-details", source: "ch4-II-b", target: "ch4-II-b-details" },
    { id: "e-ch4-II-c", source: "ch4-II", target: "ch4-II-c" },
    { id: "e-ch4-II-c-details", source: "ch4-II-c", target: "ch4-II-c-details" },
    { id: "e-ch4-II-d", source: "ch4-II", target: "ch4-II-d" },
    { id: "e-ch4-II-d-details", source: "ch4-II-d", target: "ch4-II-d-details" },
    // Phần III & IV
    { id: "e-ch4-III", source: "ch4", target: "ch4-III" },
    { id: "e-ch4-III-a", source: "ch4-III", target: "ch4-III-a" },
    { id: "e-ch4-IV", source: "ch4", target: "ch4-IV" },
    { id: "e-ch4-IV-a", source: "ch4-IV", target: "ch4-IV-a" },
    { id: "e-ch4-IV-b", source: "ch4-IV", target: "ch4-IV-b" },
    { id: "e-ch4-IV-c", source: "ch4-IV", target: "ch4-IV-c" },
  ],
};

/* =======================================
  Mindmap Chương V: Tư tưởng HCM về đại đoàn kết toàn dân tộc & đoàn kết quốc tế
======================================= */
export const mindMapCh5 = {
  nodes: [
    {
      id: "ch5",
      type: "custom",
      position: { x: 400, y: 0 },
      data: { label: "Chương V:\nTư tưởng về đại đoàn kết toàn dân tộc &\nđoàn kết quốc tế" },
    },
    {
      id: "ch5-I",
      type: "custom",
      position: { x: 250, y: 100 },
      data: { label: "Đại đoàn kết toàn dân tộc" },
    },
    {
      id: "ch5-I-details",
      type: "custom",
      position: { x: 250, y: 200 },
      data: {
        label:
          "• Kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết\n• Khoan dung, độ lượng & lập trường giai cấp rõ ràng",
      },
    },
    {
      id: "ch5-II",
      type: "custom",
      position: { x: 550, y: 100 },
      data: { label: "Đoàn kết quốc tế" },
    },
    {
      id: "ch5-II-details",
      type: "custom",
      position: { x: 550, y: 200 },
      data: {
        label:
          "• Đoàn kết với giai cấp công nhân quốc tế\n• Hỗ trợ các dân tộc thuộc địa bị áp bức\n• Xây dựng mặt trận đoàn kết tiến bộ",
      },
    },
  ],
  edges: [
    { id: "e-ch5-I", source: "ch5", target: "ch5-I" },
    { id: "e-ch5-I-details", source: "ch5-I", target: "ch5-I-details" },
    { id: "e-ch5-II", source: "ch5", target: "ch5-II" },
    { id: "e-ch5-II-details", source: "ch5-II", target: "ch5-II-details" },
  ],
};

/* =======================================
  Mindmap Chương VI: Tư tưởng HCM về dân chủ & xây dựng Nhà nước của dân, do dân, vì dân
======================================= */
export const mindMapCh6 = {
  nodes: [
    {
      id: "ch6",
      type: "custom",
      position: { x: 400, y: 0 },
      data: {
        label:
          "Chương VI:\nTư tưởng về dân chủ & xây dựng Nhà nước\ncủa dân, do dân, vì dân",
      },
    },
    {
      id: "ch6-I",
      type: "custom",
      position: { x: 250, y: 100 },
      data: { label: "I. Quan điểm về dân chủ" },
    },
    {
      id: "ch6-I-details",
      type: "custom",
      position: { x: 250, y: 200 },
      data: {
        label:
          "• Dân chủ là báu vật của nhân dân\n• Cơ sở đảm bảo quyền làm chủ, quyền lực tối thượng\n• Dân lập ra Đảng và chính quyền\n• Cơ chế bảo đảm quyền dân chủ",
      },
    },
    {
      id: "ch6-II",
      type: "custom",
      position: { x: 550, y: 100 },
      data: { label: "Thực hành dân chủ" },
    },
    {
      id: "ch6-II-details",
      type: "custom",
      position: { x: 550, y: 200 },
      data: {
        label:
          "• Thực hành dân chủ là động lực phát triển cách mạng\n• Tổ chức bộ máy Nhà nước phù hợp\n• Đề phòng tiêu cực, tăng cường pháp luật & giáo dục đạo đức",
      },
    },
    {
      id: "ch6-III",
      type: "custom",
      position: { x: 400, y: 300 },
      data: { label: "KẾT LUẬN & Ý nghĩa" },
    },
    {
      id: "ch6-III-details",
      type: "custom",
      position: { x: 400, y: 400 },
      data: {
        label:
          "• Dân chủ là nguồn cảm hứng và bản chất của Nhà nước mới\n• Kết hợp đạo đức và pháp luật\n• Vai trò của HCM trong khơi nguồn dân chủ",
      },
    },
  ],
  edges: [
    { id: "e-ch6-I", source: "ch6", target: "ch6-I" },
    { id: "e-ch6-I-details", source: "ch6-I", target: "ch6-I-details" },
    { id: "e-ch6-II", source: "ch6", target: "ch6-II" },
    { id: "e-ch6-II-details", source: "ch6-II", target: "ch6-II-details" },
    { id: "e-ch6-III", source: "ch6", target: "ch6-III" },
    { id: "e-ch6-III-details", source: "ch6-III", target: "ch6-III-details" },
  ],
};
