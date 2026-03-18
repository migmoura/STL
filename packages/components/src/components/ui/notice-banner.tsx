import { useEffect, useId, useState } from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils.tsx";
import { useSessionStorage } from "usehooks-ts";

const noticeBannerVariants = cva("z-50 overflow-hidden transition-all duration-300 linear", {
  variants: {
    variant: {
      primary: "bg-yellow text-black",
      error: "bg-light-red text-white",
    },
    closing: {
      true: "h-0 py-0",
      false: "py-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    closing: false,
  },
});

type NoticeBannerProps = {
  open: boolean;
  message: React.ReactNode;
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  persistKey?: string;
  ariaLabel?: string;
} & VariantProps<typeof noticeBannerVariants>;

export function NoticeBanner({
  open,
  message,
  primaryAction,
  secondaryAction,
  ariaLabel = "Site context notice",
  variant,
}: NoticeBannerProps) {
  const [isVisible, setIsVisible] = useState(open);
  const [isClosing, setIsClosing] = useState(false);
  const [isDismissed, setIsDismissed] = useSessionStorage("__conti-notice-banner-dismissed", false);

  useEffect(() => {
    if (!open) {
      close();
    }
  }, [open]);

  const titleId = useId();

  const close = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const dismiss = () => {
    setTimeout(() => {
      setIsDismissed(true);
    }, 300);
    close();
  };

  if (!isVisible || isDismissed) {
    return null;
  }
  return (
    <section
      role="region"
      aria-labelledby={titleId}
      className={cn(noticeBannerVariants({ variant, closing: isClosing }))}
    >
      <p id={titleId} className="sr-only">
        {ariaLabel}
      </p>

      <div className="fluid relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss notice"
          className="absolute right-3 top-0 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X />
        </button>

        <div className="text-sm leading-label pr-6 md:pr-0">{message}</div>

        <div className="w-full md:w-fit flex justify-end shrink-0 items-center gap-6">
          {primaryAction}
          {secondaryAction}
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss notice"
            className="hidden md:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X />
          </button>
        </div>
      </div>
    </section>
  );
}
