import { DownloadIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.tsx";
import { Interweave } from "interweave";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Link } from "@/components/ui/link.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useDownloadGate } from "@/features/documents/hooks/use-download-gate.ts";
import { useDocumentsDownload } from "@/features/documents/hooks/use-documents-download.ts";
import { useId, useState } from "react";
import { cn } from "@/lib/utils.tsx";

type DownloadDialogProps = {
  isEnabled?: boolean | undefined;
  dialogHtml?: string | undefined;
};

export function DownloadDialog({ isEnabled, dialogHtml }: DownloadDialogProps) {
  const checkboxId = useId();
  const [accepted, setAccepted] = useState(false);
  const { t } = useTranslation();
  const { enabled, open, pending, path, confirm, cancel } = useDownloadGate(isEnabled);
  const { download } = useDocumentsDownload();

  const handleDownload = () => {
    setAccepted(false);
    confirm();
    download();
  };

  const handleSingleDownload = () => {
    setAccepted(false);
    confirm();
  };

  if (!enabled) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        cancel();
        setAccepted(false);
      }}
    >
      <DialogContent className="h-dvh md:h-fit">
        <DialogHeader>
          <DialogTitle className="text-h4">Disclaimer & Download Conditions</DialogTitle>
          <DialogDescription>
            By proceeding with the download, you acknowledge and agree to the following:
          </DialogDescription>
        </DialogHeader>
        <Interweave
          className={cn(
            "px-6 md:px-15 pt-2 pb-8 md:pb-13 xl:pt-6 xl:pb-18 overflow-y-auto space-y-6",
            "[&_h2,_h3,_h4,_h5,_h6]:text-h5 [&_h2,_h3,_h4,_h5,_h6]:inline",
            "md:*:[ol]:columns-2 *:[ol]:list-decimal *:[ol]:list-inside *:[ol]:marker:text-h5",
            "[&_p]:text-xs [&_a]:underline",
          )}
          containerTagName="div"
          content={dialogHtml}
        />
        <DialogFooter>
          <div className="flex items-center justify-between">
            <label
              htmlFor={checkboxId}
              className="flex items-center gap-4 md:w-2/3 text-white text-sm [&_svg]:text-black"
            >
              <Checkbox
                id={checkboxId}
                onCheckedChange={() => setAccepted((accepted) => !accepted)}
              />
              {t("I understand and agree to the download terms")}
            </label>
            {pending === 1 ? (
              <Link
                aria-disabled={!accepted}
                variant="primary"
                href={path as string}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSingleDownload}
              >
                Download
              </Link>
            ) : null}
            {pending > 1 ? (
              <Button disabled={!accepted} onClick={handleDownload}>
                Download
                <DownloadIcon className="size-5" />
              </Button>
            ) : null}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
