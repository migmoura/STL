import { Nullable } from "@/types/utils.d.ts";

export type Dealer = {
  Id: string;
  Name: string;
  BillingLongitude: string;
  BillingLatitude: string;
} & Partial<
  Nullable<{
    BillingStreet: string;
    BillingCity: string;
    BillingState: string;
    BillingPostalCode: string;
    Website: string;
    Phone: string;
    Email: string;
  }>
>;

export type IndexPage = {
  id: number;
  title: string;
  path: string;
  image: string;
  imageAlt: string;
  lastModified: number;
  content?: string;
  description?: string;
  tags: (string | number)[] | string | number | "";
  created?: string;
  published?: string;
};

export type OramaIndexPage = IndexPage & {
  publishedAt: number;
  createdAt: number;
  year?: string;
};
