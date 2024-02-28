import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../src/components/ui/resizeable";
import { Sidebar } from "./components/nav";
import { ModeToggle } from "./components/ui/dark-mode";
import "./output.css";

function App() {
  return (
    // HACK:
    <div>
      <ModeToggle />
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-md rounded-lg border"
      >
        <ResizablePanel>
          <div className="flex h-full items-center justify-center p-6">
            <Sidebar />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className="flex h-full items-center justify-center p-6"></div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
