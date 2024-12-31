import { ToastType } from "@/types/types";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
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

// toast error handle here !!

export function getErrorMessage(
  error: FetchBaseQueryError | SerializedError | undefined
): string {
  if (!error) {
    return "An unknown error occurred";
  }

  if ("data" in error) {
    const data = error.data as { message?: string };
    return data?.message || "An unknown error occurred";
  }

  if ("message" in error) {
    return error.message || "An unknown error occurred";
  }

  return "An unknown error occurred";
}
