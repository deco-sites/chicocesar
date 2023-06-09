import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";

export interface LinkItem {
  name: string;
  linkUrl: string;
  image?: { src?: string; alt?: string };
}

function Link({ link }: { link: LinkItem }) {
  const { name, linkUrl, image } = link;

  return (
    <>
      {/* Mobile Version */}
      <div class="md:hidden mx-2 font-thin text-base tracking-normal flex">
        {image?.src && (
          <Image
            src={image.src}
            alt={image.alt}
            width={20}
            height={20}
          />
        )}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">{name}</a>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex mx-2 font-thin text-2xl tracking-normal flex">
        {image?.src && (
          <Image
            src={image.src}
            alt={image.alt}
            width={25}
            height={25}
          />
        )}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">{name}</a>
      </div>
    </>
  );
}

export default Link;
