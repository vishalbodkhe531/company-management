import { ToastType } from "@/types/types";
import { toast } from "sonner";

function ToasterComponent({
  message,
  description,
  firstLabel,
  secLabel,
  caseHandler,
}: ToastType) {
  if (message) {
    toast(message, {
      description,
      action: {
        label: firstLabel,
        onClick: () => caseHandler && caseHandler(firstLabel!),
      },
    });

    if (secLabel) {
      toast(message, {
        description,
        action: {
          label: secLabel,
          onClick: () => caseHandler && caseHandler(secLabel),
        },
      });
    }
  }
}

export default ToasterComponent;
