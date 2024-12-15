import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { OTPFormValues } from "@/types/validation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { OTPSchema } from "../form-validation /Validation";
import ToasterComponent from "../toaster/Toaster";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

interface OTPdrowerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  onOTPSubmit: (value: string) => void;
}

function OTPdrower({ open, setOpen, onOTPSubmit }: OTPdrowerProps) {
  const form = useForm<OTPFormValues>({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      pin: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmitForm = handleSubmit((data: OTPFormValues) => {
    console.log(data);
    const { pin } = data;

    onOTPSubmit(pin);

    ToasterComponent({
      message: "You submitted the following values:",
      description: "Thanks for submitting",
      firstLable: "Close",
    });
    setOpen(false);
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-black text-white sm:max-w-[425px]">
        <div className="mx-auto w-full max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-white">One-Time Password</DialogTitle>
            <DialogDescription className="text-gray-400">
              Enter the one-time password sent to your phone.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4">
            <FormProvider {...form}>
              <form
                onSubmit={onSubmitForm}
                className="w-full flex flex-col items-center space-y-6"
              >
                <FormField
                  name="pin"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-center">
                      <FormLabel className="text-center">OTP</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup className="flex justify-center gap-3">
                            {Array.from({ length: 6 }).map((_, index) => (
                              <InputOTPSlot
                                key={index}
                                index={index}
                                className="w-12 h-12 text-center text-2xl font-semibold border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                              />
                            ))}
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage className="text-center text-red-500 font-bold" />
                    </FormItem>
                  )}
                />
                <div className="flex w-full flex-col gap-4">
                  <Button
                    type="button"
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-semibold shadow-md hover:scale-105 transition-all"
                    onClick={onSubmitForm}
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    className="bg-gray-700 text-white border border-gray-600 rounded-lg font-semibold hover:bg-gray-600 hover:scale-105 transition-all"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default OTPdrower;
