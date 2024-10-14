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
    <div className="rounded-lg bg-white/50">
      <div className="flex flex-col items-start justify-between gap-3 p-2 lg:flex-row">
        <h1 className="line-clamp-1 rounded-full bg-white px-4 py-1 text-sm font-bold leading-[normal] text-[#3D404B]">
          {pdfName}
        </h1>
        <div className="flex w-full items-center justify-between lg:justify-end gap-2">
          <span className="flex items-center gap-2">
            <ZoomOutButton />
            <CurrentScale />
            <ZoomInButton />
            <EnterFullScreenButton />
          </span>
          <span className="flex items-center justify-center rounded-full bg-white px-4 py-1 text-xs font-bold">
            Expand
          </span>
        </div>
      </div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className="h-[calc(100vh-200px)] w-full">
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
