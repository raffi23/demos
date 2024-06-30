import { Route, Routes, useLocation } from "react-router";
import DemoOne from "./animations/Demo-01";
import DemoTwo from "./animations/Demo-02";
import ErrorPage from "./routes/Error";
import Home from "./routes/Home";
import { useEffect } from "react";
import { challengeRoutes, demoRoutes } from "./utils/static";
import { useTheme } from "next-themes";
import Demo03 from "./animations/Demo-03";
import Challenge01 from "./challenge/challenge-01";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const { setTheme } = useTheme();

  useEffect(() => {
    const backgroundColor = demoRoutes
      .concat(challengeRoutes)
      .find((route) => route.urlPath === pathname)?.backgroundColor;

    if (pathname === "/" || !backgroundColor) {
      document.body.style.setProperty("--background", "#fafcfb");
      setTheme("light");
      return;
    }

    document.body.style.setProperty("--background", backgroundColor);
  }, [pathname, setTheme]);

  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/demos/demo-01" Component={DemoOne} />
      <Route path="/demos/demo-02" Component={DemoTwo} />
      <Route path="/demos/demo-03" Component={Demo03} />
      <Route path="/challenges/challenge-01" Component={Challenge01} />
      <Route path="*" Component={ErrorPage} />
    </Routes>
  );
}

export default App;
