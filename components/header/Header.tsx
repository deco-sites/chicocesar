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
  /** @title Search Bar */
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  leftNavItems?: NavItem[];
  rightNavItems?: NavItem[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */

  /**
   * @title Enable Top Search terms
   */
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
{/* 
      <Modals
        menu={{ items: leftNavItems }}
      /> */}
    </header>
  );
}

export default Header;
