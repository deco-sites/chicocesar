import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { useUI } from "deco-sites/fashion/sdk/useUI.ts";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import { sendAnalyticsEvent } from "deco-sites/std/commerce/sdk/sendAnalyticsEvent.ts";

function FacebookButton() {
  const { displayFacebook } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="Follow us on Facebook"
      onClick={() => {
        // link to proper site
      }}
    >
      <Icon id="Facebook" width={20} height={20} strokeWidth={0.1} />
    </Button>
  );
}

function InstagramButton() {
  const { displayInstagram } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="Follow us on Instagram"
      onClick={() => {
        // link to proper site
      }}
    >
      <Icon id="Instagram" width={20} height={20} strokeWidth={0.1} />
    </Button>
  );
}

function TwitterButton() {
  const { displayTwitter } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="Follow us on Twitter"
      onClick={() => {
        // link to proper site
      }}
    >
      <Icon id="Twitter" width={20} height={20} strokeWidth={0.1} />
    </Button>
  );
}

function YoutubeButton() {
  const { displayYoutube } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="Follow us on Youtube"
      onClick={() => {
        // link to proper site
      }}
    >
      <Icon id="Youtube" width={20} height={20} strokeWidth={0.1} />
    </Button>
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
