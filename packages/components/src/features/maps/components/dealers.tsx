import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import type { Dealer } from "@/types/entities.d.ts";
import { DealerTeaser, SmallDealerTeaser } from "@/components/ui/dealer.tsx";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer.tsx";
import { useAtom } from "jotai";
import { selectedDealer } from "@/features/maps/schema.ts";
import { SearchX } from "lucide-react";
import { addProtocol } from "@/lib/utils.tsx";
import { adjustCenterWithOffset } from "@/features/maps/utils.ts";
import { useTranslation } from "react-i18next";

type DealerListProps = {
  dealers: Dealer[];
  location: google.maps.LatLngLiteral;
  isLoading: boolean;
};

export function DealerList({ dealers, location, isLoading }: DealerListProps) {
  const geometry = useMapsLibrary("geometry");
  const map = useMap();
  const { t } = useTranslation();

  return dealers.length > 0 ? (
    <ul className="h-full overflow-y-auto md:p-6">
      {dealers.map((dealer) => (
        <DealerItem
          map={map}
          key={dealer.Id}
          isLoading={isLoading}
          geometry={geometry}
          dealer={dealer}
          location={location}
        />
      ))}
    </ul>
  ) : (
    <div className="h-full flex flex-col gap-10 p-6 md:p-20">
      <SearchX className="size-20" />
      <p className="text-h3">{t("No dealers found in this area.")}</p>
      <p className="text-gray-1">
        {t("Please update your location and look for in another area.")}
      </p>
    </div>
  );
}

type DealerItemProps = {
  dealer: Dealer;
  geometry: google.maps.GeometryLibrary | null;
  map: google.maps.Map | null;
  location: google.maps.LatLngLiteral;
  isLoading: boolean;
};

function DealerItem({ dealer, geometry, map, location, isLoading }: DealerItemProps) {
  const [selected, setSelected] = useAtom(selectedDealer);

  const distance =
    geometry?.spherical.computeDistanceBetween(
      {
        lat: parseFloat(dealer.BillingLatitude),
        lng: parseFloat(dealer.BillingLongitude),
      },
      location,
    ) ?? 0;
  const hint = `${(distance / 1000)?.toFixed(1) ?? "0"} km away`;
  const website = dealer.Website
    ? {
        href: addProtocol(dealer.Website),
        title: dealer.Name,
        value: "Dealer Website",
      }
    : undefined;

  const phone = dealer.Phone
    ? {
        href: `tel:${dealer.Phone}`,
        title: dealer.Phone,
        value: dealer.Phone,
      }
    : undefined;

  const email = dealer.Email
    ? {
        href: `mailto:${dealer.Email}`,
        title: dealer.Email,
        value: dealer.Email,
      }
    : undefined;

  return (
    <Drawer
      open={selected === dealer.Id}
      onOpenChange={(open) => {
        adjustCenterWithOffset(
          map,
          parseFloat(dealer.BillingLatitude),
          parseFloat(dealer.BillingLongitude),
        );
        setSelected(open ? dealer.Id : null);
      }}
    >
      <DrawerTrigger asChild>
        <li key={dealer.Id} className="hover:bg-gray-4 active:bg-gray-35 focus-visible:bg-gray-4">
          <SmallDealerTeaser
            isLoading={isLoading}
            title={dealer.Name}
            description={`${dealer.BillingStreet}, ${dealer.BillingCity}, ${dealer.BillingState} ${dealer.BillingPostalCode}`}
            hint={hint}
            link={website}
            phone={phone}
            email={email}
          />
        </li>
      </DrawerTrigger>
      <DrawerContent
        onPointerDownOutside={(e) => {
          if ((e.target as HTMLElement | null)?.dataset["map"] === "true") {
            e.preventDefault();
          }
        }}
        className="w-full h-full bg-white px-6 py-20 md:px-20"
      >
        <DealerTeaser
          isLoading={isLoading}
          title={dealer.Name}
          address={`${dealer.BillingStreet}, ${dealer.BillingCity}, ${dealer.BillingState} ${dealer.BillingPostalCode}`}
          hint={hint}
          link={website}
          phone={phone}
          email={email}
          tags={[]}
        />
      </DrawerContent>
    </Drawer>
  );
}
