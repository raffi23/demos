import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../../../../utils";
import { LucideIcon } from "lucide-react";
import { ACTION_ICON_SIZE } from "../../helpers/constants";

const ActionButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { Icon: LucideIcon }
> = ({ Icon, className, ...rest }) => {
  return (
    <button className={cn("block", className)} {...rest}>
      <Icon size={ACTION_ICON_SIZE} />
    </button>
  );
};

export default ActionButton;
