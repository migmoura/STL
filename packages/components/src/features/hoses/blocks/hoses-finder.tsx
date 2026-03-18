import { ComponentProps } from "react";
import { Headline } from "@/components/ui/headline.tsx";
import { NuqsAdapter } from "nuqs/adapters/react";
import { HosesFilter } from "@/features/hoses/components/hoses-filters.tsx";
import { Teaser, TeaserSkeleton } from "@/components/ui/teaser.tsx";
import useSWR from "swr";
import { searchIHoses } from "@/features/hoses/service.ts";
import { iHoseToTeaser } from "@/features/hoses/optics.ts";
import { parseAsArrayOf, parseAsFloat, useQueryState } from "nuqs";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty.tsx";
import { SearchX } from "lucide-react";

type HosesFinderProps = {
  url: string;
  linkLabel: string;
  pathPrefix: string;
  defaultSrc?: string;
} & ComponentProps<typeof Headline>;

export function HosesFinderWithNuqs({
  linkLabel,
  url,
  pathPrefix,
  defaultSrc,
  ...headline
}: Readonly<HosesFinderProps>) {
  const [query] = useQueryState("q");
  const [application] = useQueryState("a", parseAsFloat);
  const [medium] = useQueryState("m", parseAsFloat);
  const [applicationField] = useQueryState("af", parseAsFloat);
  const [diameter] = useQueryState("d", parseAsFloat);
  const [pressure] = useQueryState("op", parseAsArrayOf(parseAsFloat));
  const [burstPressure] = useQueryState("bp", parseAsArrayOf(parseAsFloat));
  const [vacuum] = useQueryState("v", parseAsArrayOf(parseAsFloat));
  const [temperature] = useQueryState("t", parseAsArrayOf(parseAsFloat));

  const { data, isLoading } = useSWR(
    [
      url,
      query,
      application,
      medium,
      applicationField,
      diameter,
      pressure,
      burstPressure,
      vacuum,
      temperature,
    ],
    (props) => {
      const [
        ,
        hoseName,
        applicationId,
        medium,
        applicationField,
        diameter,
        pressure,
        burstPressure,
        vacuum,
        temperature,
      ] = props;

      return searchIHoses(props[0], {
        hoseName: hoseName || undefined,
        applicationId: applicationId || undefined,
        applicationFieldId: applicationField || undefined,
        mediumId: medium || undefined,
        diameter: diameter || undefined,
        minVaccuum: vacuum?.[0] || undefined,
        maxVaccuum: vacuum?.[1] || undefined,
        minTemperature: temperature?.[0] || undefined,
        maxTemperature: temperature?.[1] || undefined,
        minBurstPressureBar: burstPressure?.[0] || undefined,
        maxBurstPressureBar: burstPressure?.[1] || undefined,
        minOperatingPressureBar: pressure?.[0] || undefined,
        maxOperatingPressureBar: pressure?.[1] || undefined,
      });
    },
  );

  const teasers = (data || []).map(iHoseToTeaser(linkLabel, pathPrefix));

  return (
    <div className="space-y-20">
      <Headline {...headline} />
      <HosesFilter className="lg:mx-[150px]" />
      {!isLoading && teasers.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <SearchX className="size-10" />
            </EmptyMedia>
            <EmptyTitle>No Results</EmptyTitle>
            <EmptyDescription>
              We couldn't find any products for your filter options.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : null}
      <div className="flex flex-col gap-10 md:gap-y-20 md:grid md:grid-cols-4">
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => (
              <TeaserSkeleton key={i} showDescription={false} showHint={false} showTags={false} />
            ))
          : null}
        {!isLoading && teasers.length > 0
          ? teasers.map((item) => (
              <Teaser
                {...item}
                showDescription={false}
                aspectRatio="aspect-2/1"
                defaultSrc={defaultSrc}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export function HosesFinder({ ...props }: ComponentProps<typeof HosesFinderWithNuqs>) {
  return (
    <NuqsAdapter>
      <HosesFinderWithNuqs {...props} />
    </NuqsAdapter>
  );
}
