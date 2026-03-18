import type { Link } from "@/types/base";
import { Tag } from "../ui/tag";
import { Interweave } from "interweave";
import { DownloadIcon } from "lucide-react";

type ArticleHeaderProps = {
  dateTitle: string | null;
  date: string | null;
  tagsTitle: string | null;
  tags: string[] | null;
  downloadsTitle: string | null;
  downloads: Link[];
  articleContent?: string;
};

export function ArticleHeader({
  articleContent,
  dateTitle,
  date,
  tagsTitle,
  tags,
  downloadsTitle,
  downloads,
}: ArticleHeaderProps) {
  return (
    <div className={"grid md:grid-cols-3 md:gap-30 items-start m-8"}>
      <section className={`md:col-start-3 md:col-span-1 text-justify p-8 bg-gray-4`}>
        <p className={"text-h3 font-normal"}>{dateTitle}</p>
        <p className={"mt-2"}>{date}</p>
        <p className={"text-h3 font-normal mt-6"}>{tagsTitle}</p>
        <ul className={"mt-1"}>
          {tags?.map((tag) => (
            <Tag className={"mr-4 my-2"} variant={"secondary"} key={tag}>
              {tag}
            </Tag>
          ))}
        </ul>
        <p className={"text-h3 font-normal mt-4"}>{downloadsTitle}</p>
        <ul className="mt-2 flex flex-col gap-4 list-disc list-outside pl-5">
          {downloads.map((download) => (
            <li className="space-x-2" key={download.href}>
              <a
                title={download.title}
                href={download.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="leading-label break-words hyphens-auto shadow-[inset_0_-2px_0_0] shadow-black hover:shadow-[inset_0_-3px_0_0] active:shadow-yellow">
                  {download.title}
                </span>
                <DownloadIcon className="ml-2 inline" />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className={`md:row-start-1 md:col-start-1 md:col-span-2 p-8`}>
        <Interweave className="prose" content={articleContent} />
      </section>
    </div>
  );
}
