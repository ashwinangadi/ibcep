"use client";

// Import the main component
import { Worker } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import dynamic from "next/dynamic";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import { zoomPlugin } from "@react-pdf-viewer/zoom";

const Viewer = dynamic(
  () => import("@react-pdf-viewer/core").then((mod) => mod.Viewer),
  { ssr: false },
);

const PDFViewer = ({
  PDFfile,
  pdfName,
}: {
  PDFfile: string;
  pdfName: string;
}) => {
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, CurrentScale } = zoomPluginInstance;
  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreenButton } = fullScreenPluginInstance;
  return (
    <div>
      <h1 className="text-2xl font-bricolage font-medium leading-[normal] text-[#181e22]">
        {pdfName}
      </h1>
      <div className="flex items-center gap-3 bg-white/50">
        <ZoomOutButton />
        <CurrentScale />
        <ZoomInButton />
        <EnterFullScreenButton />
      </div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className="h-[500px] w-full">
          <Viewer
            fileUrl={PDFfile}
            plugins={[zoomPluginInstance, fullScreenPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
};

export default PDFViewer;
