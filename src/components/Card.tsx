import { FaStar } from "react-icons/fa"
import { BiGitRepoForked } from "react-icons/bi"
import { License } from "../types/general"

export const Card: React.FC<{ title: string, desc: string | null, license: License | null, stars: number, forks: number, language: string, lastUpdated: string, url: string }> =
  ({ title, desc, license, stars, forks, language, lastUpdated, url }) => {

    const beautifyDate = (date: string) => {
      const rv = new Date(date)
      return rv.toLocaleDateString("en-US", {
        day: "numeric",
        year: "numeric",
        month: "long"
      })
    }

    return (
      <div className="border-2 border-neutral-400 p-3 rounded-md m-3 relative hover:bg-slate-100 cursor-pointer" onClick={() => window.location.href = url }>
        <div className="font-bold text-xl">{title}</div>
        <div className="text-lg">{desc}</div>
        <div className="flex flex-row gap-4 items-center">
          <div className="italic text-md text-neutral-600">{beautifyDate(lastUpdated)}</div>
          {/* @ts-ignore */}
          <div className="text-green-500 font-semibold">{language}</div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row gap-1 items-center"><FaStar className="text-yellow-400" /> {stars}</div>
          <div className="flex flex-row gap-1 items-center"><BiGitRepoForked className="text-blue-700" /> {forks}</div>
          {license && <a href={license.url} className="absolute right-4">License - {license.spdx_id}</a>}
        </div>
      </div>
    )
  }