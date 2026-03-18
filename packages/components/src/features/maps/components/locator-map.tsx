import { AdvancedMarker, Map, useMap } from "@vis.gl/react-google-maps";
import { Pin } from "../../../components/ui/map.tsx";
import { RefObject, useEffect, useRef } from "react";
import { useResizeObserver } from "usehooks-ts";

type Locations = {
  value: string;
  label: string;
  lng: string;
  lat: string;
};

type LocatorMapProps = {
  setLocation: (value: string) => void;
  locations: Locations[];
  currentLocation: string;
  currentCoordinates?: google.maps.LatLngLiteral;
  mapID: string | undefined;
};

export function LocatorMap({
  setLocation,
  locations,
  currentLocation,
  currentCoordinates,
  mapID,
}: LocatorMapProps) {
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

    if (currentCoordinates) {
      map.setCenter({
        lat: currentCoordinates.lat,
        lng: currentCoordinates.lng - (width >= 1024 ? 25 : 0),
      });
      map.setZoom(4.5);
    }
  }, [map, locations, width, currentCoordinates]);

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
        defaultCenter={currentCoordinates}
        defaultZoom={6}
      >
        {locations.map((location) => (
          <AdvancedMarker
            title={`Country marker for ${location.label}`}
            onClick={() => setLocation(location.label)}
            key={location.value}
            position={{
              lat: Number(location.lat),
              lng: Number(location.lng),
            }}
          >
            <Pin state={location.label === currentLocation ? "open" : "closed"} />
          </AdvancedMarker>
        ))}
      </Map>
    </div>
  );
}
