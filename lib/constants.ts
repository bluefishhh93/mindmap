
import { CustomNode } from "@/lib/types";
export const initialNodes: CustomNode[] = [
  {
    id: "1",
    type: "custom",
    position: { x: 400, y: 0 },
    data: { label: "Tư tưởng Hồ Chí Minh", isRoot: true },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 0, y: 100 },
    data: { label: "Chương 1: Khái niệm, đối tượng, phương pháp nghiên cứu" },
  },
  {
    id: "2-1",
    type: "custom",
    position: { x: -100, y: 200 },
    data: { label: "Khái niệm Tư tưởng HCM" },
  },
  {
    id: "2-2",
    type: "custom",
    position: { x: 100, y: 200 },
    data: { label: "Đối tượng nghiên cứu" },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 300, y: 100 },
    data: { label: "Chương 2: Quá trình hình thành và phát triển" },
  },
  {
    id: "3-1",
    type: "custom",
    position: { x: 200, y: 200 },
    data: { label: "Cơ sở hình thành" },
  },
  {
    id: "3-2",
    type: "custom",
    position: { x: 400, y: 200 },
    data: { label: "Các giai đoạn phát triển" },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 600, y: 100 },
    data: { label: "Chương 3: Độc lập dân tộc và CNXH" },
  },
  {
    id: "4-1",
    type: "custom",
    position: { x: 500, y: 200 },
    data: { label: "Độc lập dân tộc" },
  },
  {
    id: "4-2",
    type: "custom",
    position: { x: 700, y: 200 },
    data: { label: "Chủ nghĩa xã hội" },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 900, y: 100 },
    data: { label: "Chương 4: Đảng Cộng sản Việt Nam" },
  },
  {
    id: "5-1",
    type: "custom",
    position: { x: 800, y: 200 },
    data: { label: "Vai trò của Đảng" },
  },
  {
    id: "5-2",
    type: "custom",
    position: { x: 1000, y: 200 },
    data: { label: "Xây dựng Đảng" },
  },
];

export const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e1-4", source: "1", target: "4", animated: true },
  { id: "e1-5", source: "1", target: "5", animated: true },
  { id: "e2-21", source: "2", target: "2-1" },
  { id: "e2-22", source: "2", target: "2-2" },
  { id: "e3-31", source: "3", target: "3-1" },
  { id: "e3-32", source: "3", target: "3-2" },
  { id: "e4-41", source: "4", target: "4-1" },
  { id: "e4-42", source: "4", target: "4-2" },
  { id: "e5-51", source: "5", target: "5-1" },
  { id: "e5-52", source: "5", target: "5-2" },
];
