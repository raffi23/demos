import FirstAnimation from "./animations/Demo-01";
import { ThemeProvider } from "next-themes";
import Header from "./animations/Demo-01/header";

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="px-5">
        <Header />
        <FirstAnimation />
      </div>
    </ThemeProvider>
  );
}

export default App;
