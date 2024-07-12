import NavigationBar from "../ui/navigation-bar";
import App from "../ui/app";

const Settings = () => {
  return (
    <App className="bg-app text-black" safeArea="top">
      <NavigationBar title="Settings" />
    </App>
  );
};

export default Settings;
