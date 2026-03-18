import { parseAnchor } from "@/lib/parser.ts";
import { createRoot } from "react-dom/client";
import { ArticleHeader } from "@/components/article-header/article-header.tsx";

function parseHtml(block: HTMLElement) {
  const head = document.getElementsByTagName("head")[0];
  const tags: NodeListOf<HTMLMetaElement> | null = head.querySelectorAll(
    '[property="article:tag"]',
  );
  const [dateWrapper, tagsWrapper, downloadsWrapper, articleWrapper] = Array.from(block.children);
  const [dateTitle, date] = Array.from(dateWrapper.children[0].children);
  const [downloadsTitle, ...downloads] = Array.from(downloadsWrapper.children[0].children);
  const [tagsTitle] = Array.from(tagsWrapper.children);

  return {
    dateTitle: dateTitle.textContent,
    date: date.textContent,
    tagsTitle: tagsTitle.textContent,
    tags: Array.from(tags).map((tag) => tag.content) || [],
    downloadsTitle: downloadsTitle.textContent,
    downloads: downloads.map((d) => parseAnchor(d.querySelector("a"))),
    articleContent: articleWrapper.children[0].innerHTML,
  };
}

export default function decorate(block: HTMLElement) {
  const props = parseHtml(block);
  const root = createRoot(block);
  root.render(<ArticleHeader {...props} />);
}
