import { useContext } from "react";
import { AppEntryContext } from "../apps/ui/app";

export const useApp = () => {
  const context = useContext(AppEntryContext);
  return context;
};
