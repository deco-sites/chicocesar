import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";

import type { ComponentChildren } from "preact";

export type ImageItem = { src: string; alt?: string; href?: string };
export type StringItem = {
  label: string;
  isEmail?: boolean;
};

export type Item = StringItem | ImageItem;

export type Section = {
  label: string;
  children: Item[];
};

const isImage = (item: Item): item is ImageItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.src === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse">
      {isImage(item)
        ? (
          <div class="py-1.5 px-2.5">
            <a href={item.href}>
              <Image
                class=""
                src={item.src}
                alt={item.alt}
                width={194}
                height={74}
                loading="lazy"
              />
            </a>
          </div>
        )
        : (
          <>
            {item.isEmail
              ? (
                <a href={`mailto:${item.label}`} class="hover:text-gray-500">
                  {item.label}
                </a>
              )
              : <p>{item.label}</p>}
          </>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  sections?: Section[];
}

function Footer({ sections = [] }: Props) {
  return (
    <footer class="w-full bg-footer flex flex-col divide-y-1 divide-default">
      <div>
        <Container class="w-full flex flex-col divide-y-1 divide-default">
          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden sm:flex flex-row gap-20">
              {sections.map((section) => (
                <li class="relative m-0 px-3.5 pb-7 w-full font-thin">
                  <div>
                    <Text variant="heading-3" tone="default-inverse">
                      {section.label}
                    </Text>

                    <ul
                      class={`flex ${
                        isImage(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2 flex-wrap`}
                    >
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile view */}
            <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
              {sections.map((section) => (
                <li class="mb-3">
                  <Text variant="body" tone="default-inverse">
                    {section.label}

                    <ul
                      class={`flex ${
                        isImage(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2`}
                    >
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </Text>
                </li>
              ))}
            </ul>
          </FooterContainer>
        </Container>
      </div>

      <div>
        <Container class="w-full">
          <FooterContainer class="flex justify-between w-full">
            {/* Desktop view */}
            <Text
              class="flex items-center gap-1 hidden sm:flex "
              variant="body"
              tone="default-inverse"
            >
              Powered by{" "}
              <a
                href="https://www.deco.cx"
                aria-label="powered by https://www.deco.cx"
              >
                <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
              </a>
            </Text>
            <Text
              class="flex items-center gap-1 hidden sm:flex "
              variant="body"
              tone="default-inverse"
            >
              © Todos os direitos reservados
            </Text>
            <ul class="flex items-center justify-center gap-2 hidden sm:flex ">
              <li>
                <a
                  href="https://www.instagram.com/deco.cx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram logo"
                >
                  <Icon
                    class="text-default-inverse"
                    width={32}
                    height={32}
                    id="Instagram"
                    strokeWidth={1}
                  />
                </a>
              </li>
              <li>
                <a
                  href="http://www.deco.cx/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord logo"
                  class="hidden sm:flex"
                >
                  <Icon
                    class="text-default-inverse"
                    width={32}
                    height={32}
                    id="Discord"
                    strokeWidth={5}
                  />
                </a>
              </li>
            </ul>
            {/* Mobile view */}
            <div class="flex flex-col sm:hidden sm:flex-row gap-4">
              <Text
                class="flex items-center gap-1 text-sm"
                variant="body"
                tone="default-inverse"
              >
                © Todos os direitos reservados
              </Text>
              <Text
                class="flex items-center gap-1"
                variant="body"
                tone="default-inverse"
              >
                Powered by{" "}
                <a
                  href="https://www.deco.cx"
                  aria-label="powered by https://www.deco.cx"
                >
                  <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
                </a>
              </Text>
              <ul class="flex justify-left gap-2">
                <li>
                  <a
                    href="https://www.instagram.com/deco.cx"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram logo"
                  >
                    <Icon
                      class="text-default-inverse"
                      width={32}
                      height={32}
                      id="Instagram"
                      strokeWidth={1}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.deco.cx/discord"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord logo"
                  >
                    <Icon
                      class="text-default-inverse"
                      width={32}
                      height={32}
                      id="Discord"
                      strokeWidth={5}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </FooterContainer>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
