import Datetime from "@components/Datetime";
import { formatDate } from "@utils/date";
import { slugifyStr } from "@utils/slugify";

import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  titile?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function RecentCard({
  href,
  frontmatter,
  secHeading = true,
}: Props) {
  const { title, pubDatetime, modDatetime, description, ogImage, tags } =
    frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a href={href} className="text-skin-accent">
        <div className="flex space-x-4">
          <img
            src={(ogImage || "/assets/placeholder.svg") as string}
            alt={title}
            className="h-20 w-20 flex-shrink-0 rounded-lg object-cover"
          />
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-center space-x-2">
              <span className="text-sm capitalize text-gray-400">
                {tags[0]}
              </span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm  text-gray-400">
                {pubDatetime
                  ? formatDate(new Date(pubDatetime).toDateString())
                  : "N/A"}
              </span>
            </div>
            <h2 className="line-clamp-3 text-sm font-semibold leading-tight ">
              {title}
            </h2>
          </div>
        </div>
      </a>
    </li>
  );
}
