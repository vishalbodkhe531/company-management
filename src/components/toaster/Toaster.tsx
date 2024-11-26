import { ToastType } from "@/types/types";
import { toast } from "sonner";

function ToasterComponent({
  message,
  description,
  firstLable,
  secLable,
  caseHandler,
}: ToastType) {
  const triggerToast = () => {
    toast(message, {
      description,
      action: {
        label: firstLable,
        onClick: () => caseHandler(firstLable),
      },
    });
    toast(message, {
      description,
      action: {
        label: secLable,
        onClick: () => caseHandler(secLable),
      },
    });
  };

  return triggerToast;
}

export default ToasterComponent;
