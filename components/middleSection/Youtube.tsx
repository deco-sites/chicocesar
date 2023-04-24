import Icon from "deco-sites/fashion/components/ui/Icon.tsx";

export interface YoutubeProps {
  title: string;
  url: string;
}

function Youtube({ youtubeSection }: {
  youtubeSection: YoutubeProps;
}) {
  const { title, url } = youtubeSection || {};
  return (
    <div class="bg-black p-5 text-white w-1/2	h-auto">
      <h1 class="text-3xl font-thin">{title}</h1>
      <div class="mt-0 mb-0 max-w-50 h-1 bg-white w-1/12"></div>
      <iframe width="420" height="315" src={url}>
      </iframe>
      <div class="flex flex-row justify-between">
        <a
          href="https://www.instagram.com/oficialchicocesar/"
          target="_blank"
          rel="noopener noreferrer"
          class="gap-2"
        >
          Spotify
          <Icon id="Instagram" width={40} height={40} strokeWidth={0.1} />
        </a>
        <a
          href="https://twitter.com/ChicoCesarOf"
          target="_blank"
          rel="noopener noreferrer"
          class="gap-2"
        >
          Apple Music
          <Icon id="Twitter" width={40} height={40} strokeWidth={0.1} />
        </a>
        <a
          href="https://www.youtube.com/c/ChicoCesarOficial"
          target="_blank"
          rel="noopener noreferrer"
          class="gap-2"
        >
          Youtube
          <Icon id="Youtube" width={40} height={40} strokeWidth={0.1} />
        </a>
      </div>
    </div>
  );
}

export default Youtube;
