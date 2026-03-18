import wretch from "wretch";
import { entriesFromObject } from "@/lib/utils.tsx";

export interface IHoseSearchRequest {
  hoseName?: string;
  applicationId?: number;
  mediumId?: number;
  applicationFieldId?: number;
  diameter?: number;
  minOperatingPressureBar?: number;
  maxOperatingPressureBar?: number;
  minBurstPressureBar?: number;
  maxBurstPressureBar?: number;
  minVaccuum?: number;
  maxVaccuum?: number;
  minTemperature?: number;
  maxTemperature?: number;
}

export interface IHoseSearchResponseItem {
  idSchlauch: number;
  SchlauchEN: string;
  SchlauchDE: string;
  IsOnline: boolean;
  HatDatenblattPortal: boolean;
  HatPreislistePortal: boolean;
  HatDatenblattCenter: boolean;
  HatNachbearbeitung: boolean;
  IsAssembly: boolean;
}

export type IHoseSearchResponse = IHoseSearchResponseItem[];

function cleanPayload(payload: IHoseSearchRequest): Partial<IHoseSearchRequest> {
  return Object.fromEntries(
    entriesFromObject(payload).filter(([_, v]) => v !== null && v !== undefined),
  );
}

export const searchIHoses = async (
  url: string,
  payload: IHoseSearchRequest,
): Promise<IHoseSearchResponse> => {
  const body = cleanPayload(payload);

  return wretch(url).post(body).json<IHoseSearchResponse>();
};

export interface LookupItem {
  itemText: string;
  itemId: string | number;
}

export interface LookupCategory {
  total: number;
  offset: number;
  limit: number;
  data: LookupItem[];
}

export interface LookupResponse {
  application: LookupCategory;
  medium: LookupCategory;
  applicationField: LookupCategory;
  diameter: LookupCategory;
  ":version": number;
  ":names": string[];
  ":type": string;
}

export const getIHosesLookupItems = async (url: string): Promise<LookupResponse> => {
  return wretch(url).get().json<LookupResponse>();
};
