import Agenda from "./Agenda.tsx";
import Youtube, { YoutubeProps } from "./Youtube.tsx";
import type { Image } from "deco-sites/std/components/types.ts";

export interface Links {
  name: string;
  linkUrl: string;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Agenda {
  date: string;
  location: string;
  description: string;
}

export interface Props {
  youtube: YoutubeProps;
  links: Links[];
  agenda: Agenda[];
}

function Middle({ youtube, links = [], agenda = [] }: Props) {
  return (
    <div className="flex bg-black">
      <Youtube youtubeSection={youtube} links={links} />
      <Agenda agendaItems={agenda} />
    </div>
  );
}

export default Middle;
