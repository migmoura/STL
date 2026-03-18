import { ComponentProps } from "react";
import { parseHeadline, parseOptionalString, parseString } from "@/lib/parser.ts";
import { createRoot } from "react-dom/client";
import { DataTable } from "@/components/data-table/data-table.tsx";
import { SortingColumn } from "@tanstack/react-table";
import { ArrowDown, ArrowUp } from "lucide-react";

async function parseHTML(block: HTMLElement): Promise<ComponentProps<typeof DataTable>> {
  const [headline, subheadline, link, ...table] = Array.from(block.children);
  const [header, ...rows] = Array.from(table);

  const columns = Array.from(header.children).map((th, index) => ({
    accessorKey:
      parseString(th.textContent)
        ?.split(" ")
        .join("_")
        .replace(/[^\w\s]/gi, "_")
        .toLowerCase() || `${index}`,
    header: ({ column }: { column: SortingColumn<any> }) => {
      return (
        <button
          className="flex items-center cursor-pointer gap-2"
          onClick={() => column.toggleSorting()}
        >
          {parseString(th.textContent)}
          {column.getIsSorted() ? (
            column.getIsSorted() === "asc" ? (
              <ArrowDown className="size-4 shrink-0" />
            ) : (
              <ArrowUp className="size-4 shrink-0" />
            )
          ) : null}
        </button>
      );
    },
  }));

  const data = rows.map((row) => {
    const cells = Array.from(row.children);

    return cells.reduce((acc, cell, index) => {
      acc[columns[index].accessorKey] = parseOptionalString(cell.textContent);

      return acc;
    }, {} as any);
  });

  return {
    ...parseHeadline(
      headline.querySelector("h1, h2, h3, h4, h5, h6"),
      subheadline.textContent,
      link.querySelector("a"),
    ),
    columns,
    data,
  };
}

export default async function decorate(block: HTMLElement) {
  const props = await parseHTML(block);

  const root = createRoot(block);
  root.render(<DataTable {...props} />);
}
