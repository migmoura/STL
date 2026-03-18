import { Dealer } from "@/types/entities";
import { AdvancedMarker, Map, useMap } from "@vis.gl/react-google-maps";
import { Pin } from "@/components/ui/map.tsx";
import { useAtom } from "jotai";
import { selectedDealer } from "@/features/maps/schema.ts";
import { RefObject, useEffect, useRef } from "react";
import { useResizeObserver } from "usehooks-ts";
import { adjustCenterWithOffset } from "@/features/maps/utils.ts";

type DistributorMapProps = {
  dealers: Dealer[];
  defaultCoordinates: google.maps.LatLngLiteral;
  currentCoordinates?: google.maps.LatLngLiteral;
  mapID: string | undefined;
};

type PinMarkerProps = {
  dealer: Dealer;
};

function PinMarker({ dealer }: PinMarkerProps) {
  const map = useMap();
  const [selected, setSelected] = useAtom(selectedDealer);

  return (
    <AdvancedMarker
      title={`Dealer marker for ${dealer.Name}`}
      key={dealer.Id}
      onClick={() => {
        adjustCenterWithOffset(
          map,
          parseFloat(dealer.BillingLatitude!),
          parseFloat(dealer.BillingLongitude!),
        );
        setSelected((open) => (dealer.Id === open ? null : dealer.Id));
      }}
      position={{
        lat: parseFloat(dealer.BillingLatitude!),
        lng: parseFloat(dealer.BillingLongitude!),
      }}
    >
      <Pin state={dealer.Id === selected ? "open" : "closed"} />
    </AdvancedMarker>
  );
}

export function DistributorMap({
  dealers,
  defaultCoordinates,
  currentCoordinates,
  mapID,
}: DistributorMapProps) {
  const map = useMap();
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const { width = 0 } = useResizeObserver({
    ref,
    box: "content-box",
  });

  useEffect(() => {
    if (!map || width === 0) {
      return;
    }

    if (dealers.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      dealers.forEach((dealer) => {
        const latLng = new google.maps.LatLng(
          parseFloat(dealer.BillingLatitude!),
          parseFloat(dealer.BillingLongitude!),
        );
        bounds.extend(latLng);
      });

      map.fitBounds(bounds, {
        top: 80,
        bottom: 40,
        right: 40,
        left: width > 1024 ? width * 0.5 + 40 : 40,
      });
    } else if (currentCoordinates) {
      map.setCenter(currentCoordinates);
      map.setZoom(6);
    } else {
      map.setCenter(defaultCoordinates);
      map.setZoom(6);
    }
  }, [map, dealers, width, currentCoordinates, defaultCoordinates]);

  return (
    <div ref={ref} className="w-full">
      <Map
        renderingType={
          typeof window !== "undefined" && document.createElement("canvas").getContext("webgl2")
            ? "VECTOR"
            : "RASTER"
        }
        mapId={mapID}
        mapTypeId="roadmap"
        className="w-full h-[682px] md:h-[800px]"
        gestureHandling={"cooperative"}
        disableDefaultUI={true}
        defaultCenter={defaultCoordinates}
        defaultZoom={6}
      >
        {dealers.map((dealer) => {
          return <PinMarker key={dealer.Id} dealer={dealer} />;
        })}
      </Map>
    </div>
  );
}
