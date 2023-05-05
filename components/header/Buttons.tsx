import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { useUI } from "deco-sites/fashion/sdk/useUI.ts";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import { sendAnalyticsEvent } from "deco-sites/std/commerce/sdk/sendAnalyticsEvent.ts";

function FacebookButton() {
  return (
    <a
      href="https://www.instagram.com/oficialchicocesar/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Facebook"
      class="inline-flex items-center justify-center gap-4 mx-2 cursor-pointer disabled:cursor-not-allowed transition-colors duration-150 ease-in"
    >
      <Icon id="Facebook" width={20} height={20} strokeWidth={0.1} />
    </a>
  );
}

function InstagramButton() {
  return (
    <a
      href="https://www.facebook.com/OficialChicoCesar"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
      class="inline-flex items-center justify-center gap-2 mx-2 cursor-pointer disabled:cursor-not-allowed transition-colors duration-150 ease-in"
    >
      <Icon id="Instagram" width={20} height={20} strokeWidth={0.1} />
    </a>
  );
}

function TwitterButton() {
  return (
    <a
      href="https://twitter.com/ChicoCesarOf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
      class="inline-flex items-center justify-center mx-2 gap-2 cursor-pointer disabled:cursor-not-allowed transition-colors duration-150 ease-in"
    >
      <Icon id="Twitter" width={20} height={20} strokeWidth={0.1} />
    </a>
  );
}

function YoutubeButton() {
  const { displayYoutube } = useUI();

  return (
    <a
      href="https://www.youtube.com/c/ChicoCesarOficial"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
      class="inline-flex items-center justify-center mx-2 gap-2 cursor-pointer disabled:cursor-not-allowed transition-colors duration-150 ease-in"
    >
      <Icon id="Youtube" width={20} height={20} strokeWidth={0.1} />
    </a>
  );
}

function HeaderButton(
  { variant }: {
    variant: "instagram" | "facebook" | "menu" | "twitter" | "youtube";
  },
) {
  if (variant === "instagram") {
    return <InstagramButton />;
  }

  if (variant === "facebook") {
    return <FacebookButton />;
  }

  if (variant === "twitter") {
    return <TwitterButton />;
  }

  if (variant === "youtube") {
    return <YoutubeButton />;
  }

  return null;
}

export default HeaderButton;

function onHover() {
  throw new Error("Function not implemented.");
}

function onHoverLeave() {
  throw new Error("Function not implemented.");
}
