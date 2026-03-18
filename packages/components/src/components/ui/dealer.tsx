import type { Link as LinkType } from "@/types/base.d.ts";
import { Link } from "./link";
import { Tag } from "./tag";
import { ReactNode } from "react";
import { ChevronRight, Home, Mail, Milestone, Phone } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { useTranslation } from "react-i18next";

export type Teaser = {
  isLoading: boolean;
  link?: LinkType | undefined | null;
  phone?: LinkType | undefined | null;
  email?: LinkType | undefined | null;
  title?: string | undefined | null;
  hint?: string | undefined | null;
  address?: string | undefined | null;
  description?: ReactNode;
  tags?: string[] | undefined | null;
};

export function SmallDealerTeaser({ title, description, hint, tags, isLoading }: Readonly<Teaser>) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col p-6 space-y-4">
        <div className="flex items-center justify-between">
          {title ? (
            <p className="text-h5 flex items-center gap-2">
              {title} <ChevronRight className="size-10" />
            </p>
          ) : null}
          {isLoading ? <Skeleton className="h-6 w-24" /> : null}
          {hint && !isLoading ? (
            <p className="text-sm leading-label ml-auto shrink-0">{hint}</p>
          ) : null}
        </div>
        {description ? <p className="text-sm text-gray-1">{description}</p> : null}
        <div className="flex gap-2 overflow-x-auto">
          {tags?.length && tags?.length > 0
            ? tags.map((tag) => (
                <Tag key={tag} variant="secondary">
                  {tag}
                </Tag>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export function DealerTeaser({
  link,
  email,
  phone,
  title,
  address,
  hint,
  tags,
  isLoading,
}: Readonly<Teaser>) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col size-full gap-6">
      {title ? (
        <h5 className="text-h5 flex items-center gap-2">
          {title} <ChevronRight className="size-10" />
        </h5>
      ) : null}
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-6">
          <span className="flex gap-4 items-center">
            <Home className="size-5 shrink-0" />
            {address}
          </span>
          {phone ? (
            <span className="flex gap-2 items-center">
              <Phone className="size-5 shrink-0" />
              <Link {...phone}>{phone.value}</Link>
            </span>
          ) : null}
          {email ? (
            <span className="flex gap-2 items-center">
              <Mail className="size-5 shrink-0" />
              <Link {...email}>{email.value}</Link>
            </span>
          ) : null}
        </div>
        <div className="space-y-6">
          {isLoading ? <Skeleton className="h-6 w-24" /> : null}
          {hint && !isLoading ? (
            <span className="flex gap-2 items-center">
              <Milestone />
              {hint}
            </span>
          ) : null}
        </div>
      </div>
      {link ? (
        <Link variant="primary" {...link}>
          {link.value}
        </Link>
      ) : null}
      {tags?.length && tags?.length > 0 ? (
        <div className="mt-auto flex flex-col gap-6">
          <h5 className="text-h5 flex items-center gap-2">{t("Products")}</h5>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Tag key={tag} variant="secondary">
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
