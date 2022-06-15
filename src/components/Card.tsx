import { FaStar } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import { License } from "../types/general";

interface CardProps {
  name: string;
  description: string | null;
  license: License | null;
  stargazers_count: number;
  forks: number;
  language: string;
  updated_at: string;
  html_url: string;
}

/**
 *
 * Card props based on Repo interface.
 *
 * For more see types/general.ts.
 * @param name repo name | string
 * @param description repo description | string
 * @param license repo license link | License
 * @param stargazers_count repo stars nr | number
 * @param forks repo forks nr | number
 * @param language repo most used language | string
 * @param updated_at repo last updated date | string
 *
 * Usage: spread to props object of type Repo
 * @returns JSX element
 */

export const Card = ({
  name: title,
  description: desc,
  license,
  stargazers_count: stars,
  forks,
  language,
  updated_at: lastUpdated,
  html_url,
}: CardProps) => {
  const beautifyDate = (date: string) => {
    const rv = new Date(date);
    return rv.toLocaleDateString("en-US", {
      day: "numeric",
      year: "numeric",
      month: "long",
    });
  };

  return (
    <div
      className="border-2 border-neutral-400 p-3 rounded-md m-3 relative hover:bg-slate-100 cursor-pointer"
      onClick={() => (window.location.href = html_url)}
    >
      <div className="font-bold text-xl">{title}</div>
      <div className="text-lg">{desc}</div>
      <div className="flex flex-row gap-4 items-center">
        <div className="italic text-md text-neutral-600">
          {beautifyDate(lastUpdated)}
        </div>
        {/* @ts-ignore */}
        <div className="text-green-500 font-semibold">{language}</div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div className="flex flex-row gap-1 items-center">
          <FaStar className="text-yellow-400" /> {stars}
        </div>
        <div className="flex flex-row gap-1 items-center">
          <BiGitRepoForked className="text-blue-700" /> {forks}
        </div>
        {license && (
          <a href={license.url} className="absolute right-4">
            License - {license.spdx_id}
          </a>
        )}
      </div>
    </div>
  );
};
