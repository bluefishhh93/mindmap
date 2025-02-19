import openai from "./openai";

export async function openAiRequest(prompt: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "chatgpt-4o-latest", // Sử dụng mô hình chính xác
      messages: [
        {
          role: "system",   
          content: `Bạn là một trợ lý AI chuyên tạo sơ đồ tư duy chi tiết theo cấu trúc JSON để sử dụng với thư viện React Flow. 
Dưới đây là ví dụ về cấu trúc JSON mong muốn:

{
  "nodes": [
    {
      "id": "1",
      "type": "custom",
      "position": { "x": 400, "y": 0 },
      "data": { "label": "Chủ đề chính", "isRoot": true }
    },
    {
      "id": "2",
      "type": "custom",
      "position": { "x": 200, "y": 100 },
      "data": { "label": "Ý chính 1" }
    },
    {
      "id": "3",
      "type": "custom",
      "position": { "x": 600, "y": 100 },
      "data": { "label": "Ý chính 2" }
    }
  ],
  "edges": [
    { "id": "e1-2", "source": "1", "target": "2", "animated": true },
    { "id": "e1-3", "source": "1", "target": "3", "animated": true }
  ]
}

Yêu cầu:
- Dựa trên nội dung sau: "${prompt}".
- Tạo sơ đồ tư duy chi tiết, đầy đủ với nhiều cấp chủ đề và ý mục.
- Mỗi node cần có thông tin cụ thể, đầy đủ như tiêu đề, mô tả ngắn gọn.
- Đảm bảo các node có vị trí hợp lý, không quá gần nhau để dễ nhìn.
- Không kèm theo bất kỳ lời giải thích hay chú thích nào ngoài cấu trúc JSON.`     
        },
        { 
          role: "user",
          content: prompt,
        }
      ],
      // Tăng temperature để cho kết quả đa dạng và chi tiết hơn
      temperature: 0.0,
      max_tokens: 2000,
      response_format: { type: "json_object" },
    });

    console.log('completion', completion);
    const response = completion.choices[0].message.content;
    console.log('response', response);
    const parsedResponse = JSON.parse(response || '{}');

    return {
      ...parsedResponse,
    };

  } catch (error) {
    console.error("Error during OpenAI request:", error);
    throw error;
  }
}