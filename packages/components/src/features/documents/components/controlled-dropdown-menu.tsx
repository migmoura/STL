import { DropdownMenu } from "@/components/ui/dropdown-menu.tsx";
import { ReactNode, useState } from "react";

export type ControlledDropdownMenuRenderProps = {
  open: boolean;
  close: () => void;
  setOpen: (open: boolean) => void;
};

type ControlledDropdownMenuProps = {
  children: (props: ControlledDropdownMenuRenderProps) => ReactNode;
};

export function ControlledDropdownMenu({ children }: ControlledDropdownMenuProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      {children({
        open,
        close: () => setOpen(false),
        setOpen,
      })}
    </DropdownMenu>
  );
}
