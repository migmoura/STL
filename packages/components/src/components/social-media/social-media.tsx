import { cn } from "@/lib/utils.tsx";

export default function TextImage({ ...props }: Readonly<any>) {
  return (
    <div
      ref={props.ref}
      className={cn(
        "grid gap-10 items-center md:px-20",
        props.gridTemplate,
        props.isVisible ? "animate-fade-y" : "opacity-0",
      )}
    ></div>
  );
}
