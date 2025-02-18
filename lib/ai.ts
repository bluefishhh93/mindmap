import openai from "./openai";

export async function openAiRequest(prompt: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // Sử dụng mô hình chính xác
      messages: [
        {
          role: "system",
          content: `Bạn là một trợ lý AI. Hãy tạo một sơ đồ tư duy chi tiết dưới dạng đối tượng JSON hợp lệ, không kèm theo bất kỳ giải thích hoặc chú thích nào. Sơ đồ này sẽ được sử dụng với thư viện React Flow. Dưới đây là ví dụ về cấu trúc JSON mong muốn:

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

          Dựa trên nội dung sau: "${prompt}".
          mindmap được dùng để giúp việc học môn tư tưởng Hồ Chí Mính dễ nhớ và dễ học hơn.
          nội dung tóm tắt cần trả về phải chi tiết và đầy đủ so với nội dung gốc.
          mindmap có thể dài nhưng cần đầy đủ thông tin`,
        },
        { 
          role: "user",
          content: prompt,
        }
      ],
      temperature: 0.2,
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
