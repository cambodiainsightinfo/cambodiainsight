import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, ogImage, category } =
    frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title as string) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6 overflow-hidden  rounded-lg border  transition-shadow hover:shadow-lg">
      <a href={href} aria-label={title}>
        <div className="md:flex-row flex w-full flex-col sm:flex-col">
          {/* Article Image */}
          <div className=" md:w-[400px] w-full flex-shrink-0 sm:w-full">
            <img
              src={(ogImage || "/assets/placeholder.svg") as string}
              alt={title || "card image"}
              width={360}
              height={260}
              className=" h-60 min-h-[320px] w-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="flex-1 p-6">
            <div className="mb-3 flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
              </span>
            </div>

            {secHeading ? (
              <h2 {...headerProps}>{title}</h2>
            ) : (
              <h3 {...headerProps}>{title}</h3>
            )}

            <p className="mb-4 leading-relaxed text-gray-600">{description}</p>

            <div className="flex items-center">
              <a
                href={href}
                className="read-more inline-flex items-center text-sm font-medium text-black hover:underline"
                aria-label={`Read more ${title}`}
              ></a>
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
