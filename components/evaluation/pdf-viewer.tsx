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
import { Maximize2, Minimize2 } from "lucide-react";
import { useExpandPdfViewerStore } from "@/store/expand-pdfViewer-store";

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
  const { isExpanded, setIsExpanded } = useExpandPdfViewerStore();
  return (
    <div className="rounded-lg bg-white/50">
      <div className="flex flex-col items-start justify-between gap-3 p-2 lg:flex-row">
        <h1 className="rounded-full bg-white px-4 py-1 text-sm font-bold xl:text-nowrap leading-[normal] text-[#3D404B] md:hidden lg:block">
          {pdfName.substring(0, 20)+"..."}
        </h1>
        <div className="flex w-full items-center justify-between gap-2 lg:justify-end">
          <span className="flex items-center gap-2">
            <ZoomOutButton />
            <CurrentScale />
            <ZoomInButton />
            <EnterFullScreenButton />
          </span>
          <div
            className="hidden items-center justify-center rounded-full bg-white px-4 py-1 text-xs font-bold md:flex"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <span className="flex cursor-pointer items-center gap-2">
                <Minimize2 className="h-3 w-3" />
                Collapse
              </span>
            ) : (
              <span className="flex cursor-pointer items-center gap-2">
                <Maximize2 className="h-3 w-3" /> Expand
              </span>
            )}
          </div>
        </div>
      </div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className=" h-[650px] w-full">
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
