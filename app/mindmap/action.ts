"use server";
import { unauthenticatedAction } from "@/lib/safe-action";
import { z } from "zod";
import { openAiRequest } from "@/lib/ai";

const inputSchema = z.object({
    prompt: z.string().min(1),
});

export const generateMindMapAction = unauthenticatedAction
    .createServerAction()
    .input(inputSchema)
    .handler(async ({ input }) => {
        const { prompt } = input;
        try {
            const response = await openAiRequest(prompt);
            console.log(response, 'test action');
            // const response = {
            //         nodes: [
            //           {
            //             "id": "root",
            //             "type": "custom",
            //             "position": { "x": 500, "y": 0 },
            //             "data": { "label": "TƯ TƯỞNG HỒ CHÍ MINH", "isRoot": true }
            //           },
            //           {
            //             "id": "khaiNiem",
            //             "type": "custom",
            //             "position": { "x": 100, "y": 100 },
            //             "data": { "label": "Khái niệm và đối tượng" }
            //           },
            //           {
            //             "id": "khaiNiem1",
            //             "type": "custom",
            //             "position": { "x": 100, "y": 180 },
            //             "data": { "label": "Hệ thống quan điểm toàn diện về cách mạng Việt Nam" }
            //           },
            //           {
            //             "id": "khaiNiem2",
            //             "type": "custom",
            //             "position": { "x": 100, "y": 260 },
            //             "data": { "label": "Vận dụng và phát triển sáng tạo chủ nghĩa Mac-Lenin" }
            //           },
            //           {
            //             "id": "khaiNiem3",
            //             "type": "custom",
            //             "position": { "x": 100, "y": 340 },
            //             "data": { "label": "Kết tinh tinh hoa dân tộc và trí tuệ thời đại" }
            //           },
            //           {
            //             "id": "phuongPhap",
            //             "type": "custom",
            //             "position": { "x": 400, "y": 100 },
            //             "data": { "label": "Phương pháp nghiên cứu" }
            //           },
            //           {
            //             "id": "phuongPhap1",
            //             "type": "custom",
            //             "position": { "x": 400, "y": 180 },
            //             "data": { "label": "Kết hợp phương pháp lịch sử với phương pháp lôgíc" }
            //           },
            //           {
            //             "id": "phuongPhap2",
            //             "type": "custom",
            //             "position": { "x": 400, "y": 260 },
            //             "data": { "label": "Kết hợp nghiên cứu tác phẩm với thực tiễn cách mạng" }
            //           },
            //           {
            //             "id": "nguonGoc",
            //             "type": "custom",
            //             "position": { "x": 700, "y": 100 },
            //             "data": { "label": "Nguồn gốc tư tưởng" }
            //           },
            //           {
            //             "id": "nguonGoc1",
            //             "type": "custom",
            //             "position": { "x": 700, "y": 180 },
            //             "data": { "label": "Tinh hoa văn hóa dân tộc Việt Nam" }
            //           },
            //           {
            //             "id": "nguonGoc2",
            //             "type": "custom",
            //             "position": { "x": 700, "y": 260 },
            //             "data": { "label": "Tinh hoa văn hóa phương Đông (Nho, Phật, Lão)" }
            //           },
            //           {
            //             "id": "nguonGoc3",
            //             "type": "custom",
            //             "position": { "x": 700, "y": 340 },
            //             "data": { "label": "Tinh hoa văn hóa phương Tây" }
            //           },
            //           {
            //             "id": "nguonGoc4",
            //             "type": "custom",
            //             "position": { "x": 700, "y": 420 },
            //             "data": { "label": "Chủ nghĩa Mác-Lênin" }
            //           },
            //           {
            //             "id": "quaTrinh",
            //             "type": "custom",
            //             "position": { "x": 1000, "y": 100 },
            //             "data": { "label": "Quá trình hình thành và phát triển" }
            //           },
            //           {
            //             "id": "quaTrinh1",
            //             "type": "custom",
            //             "position": { "x": 1000, "y": 180 },
            //             "data": { "label": "Thời kỳ chuẩn bị (1890-1911)" }
            //           },
            //           {
            //             "id": "quaTrinh2",
            //             "type": "custom",
            //             "position": { "x": 1000, "y": 260 },
            //             "data": { "label": "Thời kỳ tìm đường cứu nước (1911-1920)" }
            //           },
            //           {
            //             "id": "quaTrinh3",
            //             "type": "custom",
            //             "position": { "x": 1000, "y": 340 },
            //             "data": { "label": "Thời kỳ hình thành cơ bản tư tưởng (1921-1930)" }
            //           },
            //           {
            //             "id": "quaTrinh4",
            //             "type": "custom",
            //             "position": { "x": 1000, "y": 420 },
            //             "data": { "label": "Thời kỳ vượt qua thử thách (1930-1945)" }
            //           },
            //           {
            //             "id": "yNghia",
            //             "type": "custom",
            //             "position": { "x": 1300, "y": 100 },
            //             "data": { "label": "Ý nghĩa học tập" }
            //           },
            //           {
            //             "id": "yNghia1",
            //             "type": "custom",
            //             "position": { "x": 1300, "y": 180 },
            //             "data": { "label": "Cơ sở nhận thức CNMLN và đường lối của Đảng" }
            //           },
            //           {
            //             "id": "yNghia2",
            //             "type": "custom",
            //             "position": { "x": 1300, "y": 260 },
            //             "data": { "label": "Nâng cao năng lực tư duy lý luận" }
            //           },
            //           {
            //             "id": "yNghia3",
            //             "type": "custom",
            //             "position": { "x": 1300, "y": 340 },
            //             "data": { "label": "Bồi dưỡng phẩm chất đạo đức cách mạng" }
            //           },
            //           {
            //             "id": "yeuToHT",
            //             "type": "custom",
            //             "position": { "x": 400, "y": 500 },
            //             "data": { "label": "Yếu tố hình thành" }
            //           },
            //           {
            //             "id": "yeuToHT1",
            //             "type": "custom",
            //             "position": { "x": 200, "y": 580 },
            //             "data": { "label": "Khách quan: Thời đại, hoàn cảnh, truyền thống" }
            //           },
            //           {
            //             "id": "yeuToHT2",
            //             "type": "custom",
            //             "position": { "x": 600, "y": 580 },
            //             "data": { "label": "Chủ quan: Tư duy độc lập, năng lực tổng hợp, khổ công học tập" }
            //           }
            //         ],
            //         edges: [
            //           { "id": "e-root-khaiNiem", "source": "root", "target": "khaiNiem", "animated": true },
            //           { "id": "e-root-phuongPhap", "source": "root", "target": "phuongPhap", "animated": true },
            //           { "id": "e-root-nguonGoc", "source": "root", "target": "nguonGoc", "animated": true },
            //           { "id": "e-root-quaTrinh", "source": "root", "target": "quaTrinh", "animated": true },
            //           { "id": "e-root-yNghia", "source": "root", "target": "yNghia", "animated": true },
            //           { "id": "e-root-yeuToHT", "source": "root", "target": "yeuToHT", "animated": true },

            //           { "id": "e-khaiNiem-1", "source": "khaiNiem", "target": "khaiNiem1" },
            //           { "id": "e-khaiNiem-2", "source": "khaiNiem", "target": "khaiNiem2" },
            //           { "id": "e-khaiNiem-3", "source": "khaiNiem", "target": "khaiNiem3" },

            //           { "id": "e-phuongPhap-1", "source": "phuongPhap", "target": "phuongPhap1" },
            //           { "id": "e-phuongPhap-2", "source": "phuongPhap", "target": "phuongPhap2" },

            //           { "id": "e-nguonGoc-1", "source": "nguonGoc", "target": "nguonGoc1" },
            //           { "id": "e-nguonGoc-2", "source": "nguonGoc", "target": "nguonGoc2" },
            //           { "id": "e-nguonGoc-3", "source": "nguonGoc", "target": "nguonGoc3" },
            //           { "id": "e-nguonGoc-4", "source": "nguonGoc", "target": "nguonGoc4" },

            //           { "id": "e-quaTrinh-1", "source": "quaTrinh", "target": "quaTrinh1" },
            //           { "id": "e-quaTrinh-2", "source": "quaTrinh", "target": "quaTrinh2" },
            //           { "id": "e-quaTrinh-3", "source": "quaTrinh", "target": "quaTrinh3" },
            //           { "id": "e-quaTrinh-4", "source": "quaTrinh", "target": "quaTrinh4" },

            //           { "id": "e-yNghia-1", "source": "yNghia", "target": "yNghia1" },
            //           { "id": "e-yNghia-2", "source": "yNghia", "target": "yNghia2" },
            //           { "id": "e-yNghia-3", "source": "yNghia", "target": "yNghia3" },

            //           { "id": "e-yeuToHT-1", "source": "yeuToHT", "target": "yeuToHT1" },
            //           { "id": "e-yeuToHT-2", "source": "yeuToHT", "target": "yeuToHT2" }
            //         ]


            // }
            return response;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to get prediction');
        }
    });