import Link from "./Link.tsx";
import type { LinkItem } from "./Link.tsx";

export interface YoutubeProps {
  title: string;
  
  /** @description The link format should be https://www.youtube.com/embed/[VIDEO_ID] */
  url: string;
}

function Youtube({ youtubeSection, links }: {
  youtubeSection: YoutubeProps;
  links?: LinkItem[];
}) {
  const { title, url } = youtubeSection || {};
  return (
    <>
      {/* Mobile Version */}
      <div class="md:hidden bg-black p-5 text-white w-1/1	h-auto">
        <h1 class="text-3xl ml-3 font-thin">{title}</h1>
        <div class="mt-0 mb-0 ml-3 max-w-50 mb-2 h-1 bg-white w-1/12"></div>
        <iframe
        class="mb-5"
        width="400"
        height="225"
        src={`${url}?autoplay=1&mute=1`}
        allow="autoplay; encrypted-media"
      ></iframe>
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

    {/* Desktop Version */}
      <div class="hidden md:block bg-black p-5 text-white w-1/2	h-auto">
        <h1 class="text-3xl font-thin">{title}</h1>
        <div class="mt-0 mb-0 max-w-50 mb-2 h-1 bg-white w-1/12"></div>
        <iframe
        class="mb-5"
        width="560"
        height="315"
        src={`${url}?autoplay=1&mute=1`}
        allow="autoplay; encrypted-media"
      ></iframe>
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
    </>
  );
}

export default Youtube;
