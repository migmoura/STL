import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from "react-i18next";

declare global {
  interface CMPData {
    vendorConsents: Record<string, boolean>;

    [key: string]: unknown;
  }

  interface Window {
    __cmp?: (
      command: "getCMPData" | "setVendorConsent" | "addEventListener",
      parameter?: unknown,
      callback?: ((result: unknown, success: boolean) => void) | null,
    ) => CMPData | void;
  }
}

type ConsentGateProps = {
  vendorId: string;
  vendorName: string;
  children: ReactNode;
};

export function ConsentGate({ vendorId, vendorName, children }: ConsentGateProps) {
  const [consentLoaded, setConsentLoaded] = useState<boolean>(false);
  const [consentGranted, setConsentGranted] = useState<boolean | null>(null);
  const [alwaysAccept, setAlwaysAccept] = useState(0);
  const { t } = useTranslation();

  const checkConsent = () => {
    const x = window.__cmp?.("getCMPData");
    if (x && "vendorConsents" in x) {
      setConsentLoaded(true);
      setConsentGranted(!!x.vendorConsents[vendorId]);
    }
  };

  if (window.__cmp) {
    checkConsent();
    window.__cmp("addEventListener", ["consent", checkConsent, false], null);
  }

  const handleAccept = () => {
    window.__cmp?.("setVendorConsent", [vendorId, alwaysAccept ? 1 : 3]);
    setConsentGranted(true);
  };

  if (!consentLoaded) {
    return null;
  }
  if (consentGranted) {
    return <>{children}</>;
  }

  return (
    <div
      className="relative w-full h-[600px] bg-gray-1 inline-block"
      id={`cmp_${vendorId}`}
      data-cmp-vendor={vendorId}
    >
      <div className="absolute top-1/2 -translate-y-1/2 bg-white w-full p-6">
        <div className="max-w-[640px] mx-auto space-y-6">
          <div className="text-h4">{t("We need your consent")}</div>
          <div className="leading-label">
            {t(
              "This content is provided by {{vendorName}}. By enabling this content, your personal data may be processed by the provider and cookies may be set.",
              { vendorName },
            )}
          </div>
          <Button onClick={handleAccept}>{t("Accept")}</Button>
          <label className="flex gap-4 md:w-2/3">
            <Checkbox
              value={alwaysAccept}
              onCheckedChange={(status) => setAlwaysAccept(status ? 1 : 0)}
            />
            <span className="text-gray-1 leading-label text-sm">
              {t("Always accept {{vendorName}}", { vendorName })}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
