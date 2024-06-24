import { Route, Routes, useLocation } from "react-router";
import DemoOne from "./animations/Demo-01";
import DemoTwo from "./animations/Demo-02";
import ErrorPage from "./routes/Error";
import Home from "./routes/Home";
import { useEffect } from "react";
import { demoRoutes } from "./utils/static";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const backgroundColor = demoRoutes.find(
      (route) => route.urlPath === pathname,
    )?.backgroundColor;

    if (!backgroundColor) {
      document.body.style.setProperty("--background", "#fafcfb");
    } else {
      document.body.style.setProperty("--background", backgroundColor);
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/demos/demo-01" Component={DemoOne} />
      <Route path="/demos/demo-02" Component={DemoTwo} />
      <Route path="*" Component={ErrorPage} />
    </Routes>
  );
}

export default App;
