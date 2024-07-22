import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import DemoOne from "./animations/Demo-01";
import DemoTwo from "./animations/Demo-02";
import Demo03 from "./animations/Demo-03";
import Demo04 from "./animations/Demo-04";
import Demo05 from "./animations/Demo-05";
import Demo06 from "./animations/Demo-06";
import Demo07 from "./animations/Demo-07";
import ErrorPage from "./routes/Error";
import Home from "./routes/Home";
import { demoRoutes } from "./utils/static";
import Demo08 from "./animations/Demo-08";
import Demo09 from "./animations/Demo-09";
import Demo10 from "./animations/Demo-10";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const { setTheme } = useTheme();

  useEffect(() => {
    const backgroundColor = demoRoutes.find(
      (route) => route.urlPath === pathname,
    )?.backgroundColor;

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
      <Route path="/demos/demo-04" Component={Demo04} />
      <Route path="/demos/demo-05" Component={Demo05} />
      <Route path="/demos/demo-06" Component={Demo06} />
      <Route path="/demos/demo-07" Component={Demo07} />
      <Route path="/demos/demo-08" Component={Demo08} />
      <Route path="/demos/demo-09" Component={Demo09} />
      <Route path="/demos/demo-10" Component={Demo10} />
      <Route path="*" Component={ErrorPage} />
    </Routes>
  );
}

export default App;
