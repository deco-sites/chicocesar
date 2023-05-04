import Modals from "deco-sites/fashion/islands/HeaderModals.tsx";
import type { Image } from "deco-sites/std/components/types.ts";

import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Props {
  leftNavItems?: NavItem[];
  rightNavItems?: NavItem[];
}

// class={`h-[${headerHeight}]`}

function Header(
  {
    leftNavItems = [],
    rightNavItems = [],
  }: Props,
) {
  return (
    <header>
      <div class="bg-black fixed w-full z-50">
        <Navbar leftItems={leftNavItems} rightItems={rightNavItems} />
      </div>
    </header>
  );
}

export default Header;
