import Agenda from "./Agenda.tsx";
import Youtube, { YoutubeProps } from "./Youtube.tsx";

export interface Youtube {
  title: string;
  url: string;
}

export interface Agenda {
  date: string;
  location: string;
  description: string;
}

export interface Props {
  youtube: YoutubeProps;
  agenda: Agenda[];
}

function Middle(
  {
    youtube,
    agenda = [],
  }: Props,
) {
  return (
    <div class="flex bg-black">
      <Youtube youtubeSection={youtube} />
      <Agenda agendaItems={agenda} />
    </div>
  );
}

export default Middle;
