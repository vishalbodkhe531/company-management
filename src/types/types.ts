export type PropsType = {
  children: React.ReactElement;
};

export type ToastType = {
  message: string;
  description: string;
  firstLable?: string;
  secLable?: string;
  caseHandler?: (lable: string) => void;
};
