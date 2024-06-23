import { ThemeProvider } from "next-themes";
import DemoTwo from "./animations/Demo-02";

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="px-20">
        <div className="h-[40vh]"></div>
        <DemoTwo />
        <div className="h-[40vh]"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
