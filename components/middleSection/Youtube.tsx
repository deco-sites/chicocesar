import Link from "./Link.tsx";
import type { LinkItem } from "./Link.tsx";

export interface YoutubeProps {
  title: string;
  url: string;
}

function Youtube({ youtubeSection, links }: {
  youtubeSection: YoutubeProps;
  links?: LinkItem[];
}) {
  const { title, url } = youtubeSection || {};
  return (
    <div class="bg-black p-5 text-white w-1/2	h-auto">
      <h1 class="text-3xl font-thin">{title}</h1>
      <div class="mt-0 mb-0 max-w-50 h-1 bg-white w-1/12"></div>
      <iframe width="420" height="315" src={url}>
      </iframe>
      <div class="flex flex-row justify-around">
        {links
          ? (
            <div class="text_white flex">
              {links.map((link) => <Link link={link} />)}
            </div>
          )
          : null}
      </div>
    </div>
  );
}

export default Youtube;
