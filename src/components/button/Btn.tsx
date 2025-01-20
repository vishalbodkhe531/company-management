import { Button } from "@/components/ui/button"; // Adjust import path as needed

export function LoginButton({ title }: { title: string }) {
  return (
    <Button className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase transition-all duration-500 bg-transparent text-gray-900 overflow-hidden">
      <span className="absolute inset-0 transition-all duration-500 bg-gray-800 opacity-0 group-hover:opacity-100"></span>
      <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
        {title}
      </span>
      <span
        className={`absolute left-0 flex items-center justify-center ${
          title === "Logout" ? "w-16" : "w-10"
        } h-10 ml-2 transition-transform duration-500 ease-[cubic-bezier(1.65, 0, 0.076, 1)] translate-x-[-100%] group-hover:translate-x-12`}
        aria-hidden="true"
      >
        <span className="relative w-4 h-4 transform rotate-45 border-t-2 border-r-2 transition-colors duration-500 border-gray-900 group-hover:border-white" />
      </span>
    </Button>
  );
}
