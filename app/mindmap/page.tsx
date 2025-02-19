import MindMap from "@/components/mindmap/mindmap";

export const metadata = {
  title: "MindMap App",
  description: "Generate and visualize mind maps powered by AI.",
  openGraph: {
    type: "website",
    url: "https://github.com/bluefishhh93/mindmap",
    title: "MindMap App",
    description: "Generate and visualize mind maps powered by AI.",
    images: [
      {
        url: "demo-img.png", // Update with your demo image URL if available
        width: 1200,
        height: 630,
        alt: "MindMap App",
      },
    ],
  }
};



export default function MindmapPage() {
  return (
      <MindMap />
  );
}