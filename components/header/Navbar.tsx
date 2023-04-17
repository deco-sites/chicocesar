import HeaderButton from "deco-sites/fashion/islands/HeaderButton.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";

function Navbar({ leftItems, rightItems }: {
  leftItems: INavItem[];
  rightItems: INavItem[];
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] border-b-1 border-default w-full px-2 gap-2`}
      >
        <HeaderButton variant="menu" />

        <a
          href="/"
          class={`flex-grow inline-flex items-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <Icon id="Logo" width={126} height={16} />
        </a>

        <div class="flex gap-1">
          <HeaderButton variant="facebook" />
          <HeaderButton variant="instagram" />
          <HeaderButton variant="twitter" />
          <HeaderButton variant="youtube" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center border-b-1 border-default w-full">
        <div class="flex-auto flex justify-left text-white">
          {leftItems.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex-auto flex justify-right text-white">
          {rightItems.map((item) => <NavItem item={item} />)}
        </div>
        <div class="text-white">
          PORTUGUÊS 
        </div>
        <div class="flex-none w-22 flex items-center justify-end">
          <HeaderButton variant="facebook" />
          <HeaderButton variant="instagram" />
          <HeaderButton variant="twitter" />
          <HeaderButton variant="youtube" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
