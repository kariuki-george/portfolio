import Text from "@/ui/atoms/Text";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  CaretRightIcon,
  CodeSandboxLogoIcon,
  FileIcon,
  Link2Icon,
  MixIcon,
  Pencil1Icon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";

interface RadixMenuItem {
  label: string;
  shortcut?: string;
  icon?: ReactNode;
  url: string;
}

interface Socials {
  name: string;
  url?: string;
}

const generalMenuItems: RadixMenuItem[] = [
  {
    label: "Home",
    icon: <FileIcon className="mr-2 h-3.5 w-3.5" />,
    // shortcut: "⌘+N",
    url: "/",
  },
  {
    label: "Writing",
    icon: <Pencil1Icon className="mr-2 h-3.5 w-3.5" />,
    // shortcut: "⌘+,",
    url: "/writing",
  },
];

const meMenuItems: RadixMenuItem[] = [
  {
    label: "AMA - Coming Soon",
    icon: <PersonIcon className="mr-2 h-3.5 w-3.5" />,
    // shortcut: "⌘+F",
    url: "/",
  },
  {
    label: "Stack - Coming Soon",
    icon: <MixIcon className="mr-2 h-3.5 w-3.5" />,
    // shortcut: "⌘+S",
    url: "/",
  },
];

const projectMenuItems: RadixMenuItem[] = [
  {
    label: "Rental - Coming Soon",
    icon: <RocketIcon className="mr-2 h-3.5 w-3.5" />,
    // shortcut: "⌘+F",
    url: "/",
  },
  {
    label: "Coming Soon",
    icon: <CodeSandboxLogoIcon className="mr-2 h-3.5 w-3.5" />,
    // shortcut: "⌘+S",
    url: "/",
  },
];

const socials: Socials[] = [
  {
    name: "Twitter",
    url: "https://pbs.twimg.com/profile_images/1529484742630035461/nOF82ixm_400x400.jpg",
  },
  {
    name: "LinkedIn",
    url: "https://media.licdn.com/dms/image/C4D03AQFeU-Zqi8kR3A/profile-displayphoto-shrink_200_200/0/1651513903759?e=1681344000&v=beta&t=EQTBbWhvOUvnHZfIT6oaiKmx_j1FyNIl8W0xMpKSHSU",
  },
  {
    name: "Github",
    url: "https://github.com/smiley-geek.png",
  },
];

interface DropdownMenuProps {}

const MobileMenu = (props: DropdownMenuProps) => {
  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <svg
            viewBox="0 0 15 15"
            className="h-6 w-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.49998 4.09998C2.27906 4.09998 2.09998 4.27906 2.09998 4.49998C2.09998 4.72089 2.27906 4.89998 2.49998 4.89998H12.5C12.7209 4.89998 12.9 4.72089 12.9 4.49998C12.9 4.27906 12.7209 4.09998 12.5 4.09998H2.49998ZM2.49998 6.09998C2.27906 6.09998 2.09998 6.27906 2.09998 6.49998C2.09998 6.72089 2.27906 6.89998 2.49998 6.89998H12.5C12.7209 6.89998 12.9 6.72089 12.9 6.49998C12.9 6.27906 12.7209 6.09998 12.5 6.09998H2.49998ZM2.09998 8.49998C2.09998 8.27906 2.27906 8.09998 2.49998 8.09998H12.5C12.7209 8.09998 12.9 8.27906 12.9 8.49998C12.9 8.72089 12.7209 8.89998 12.5 8.89998H2.49998C2.27906 8.89998 2.09998 8.72089 2.09998 8.49998ZM2.49998 10.1C2.27906 10.1 2.09998 10.2791 2.09998 10.5C2.09998 10.7209 2.27906 10.9 2.49998 10.9H12.5C12.7209 10.9 12.9 10.7209 12.9 10.5C12.9 10.2791 12.7209 10.1 12.5 10.1H2.49998Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="start"
            sideOffset={5}
            side="bottom"
            className={clsx(
              "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
              "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56 border border-text-secondary",
              "bg-background-primary  "
            )}
          >
            {generalMenuItems.map(({ label, icon, shortcut, url }, i) => (
              <DropdownMenuPrimitive.Item
                key={`${label}-${i}`}
                className={clsx(
                  "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                  "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                )}
              >
                {icon}
                <Link passHref href={url}>
                  <Text text={label} />
                </Link>
                {shortcut && <span className="text-xs">{shortcut}</span>}
              </DropdownMenuPrimitive.Item>
            ))}

            <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

            <DropdownMenuPrimitive.Label className="select-none px-2 py-2 text-xs text-gray-700 dark:text-gray-200">
              Me
            </DropdownMenuPrimitive.Label>

            {meMenuItems.map(({ label, icon, shortcut, url }, i) => (
              <DropdownMenuPrimitive.Item
                key={`${label}-${i}`}
                className={clsx(
                  "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                  "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                )}
              >
                {icon}
                <Link passHref href={url}>
                  <Text text={label} />
                </Link>

                {shortcut && <span className="text-xs">{shortcut}</span>}
              </DropdownMenuPrimitive.Item>
            ))}

            <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

            <DropdownMenuPrimitive.Label className="select-none px-2 py-2 text-xs text-gray-700 dark:text-gray-200">
              Projects
            </DropdownMenuPrimitive.Label>

            {projectMenuItems.map(({ label, icon, shortcut, url }, i) => (
              <DropdownMenuPrimitive.Item
                key={`${label}-${i}`}
                className={clsx(
                  "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                  "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                )}
              >
                {icon}

                <Link passHref href={url}>
                  <Text text={label} />
                </Link>
                {shortcut && <span className="text-xs">{shortcut}</span>}
              </DropdownMenuPrimitive.Item>
            ))}

            <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

            <DropdownMenuPrimitive.Sub>
              <DropdownMenuPrimitive.SubTrigger
                className={clsx(
                  "flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                  "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                )}
              >
                <Link2Icon className="mr-2 h-3.5 w-3.5" />
                <span className="flex-grow text-gray-700 dark:text-gray-300">
                  Socials
                </span>
                <CaretRightIcon className="h-3.5 w-3.5" />
              </DropdownMenuPrimitive.SubTrigger>
              <DropdownMenuPrimitive.Portal>
                <DropdownMenuPrimitive.SubContent
                  className={clsx(
                    "origin-radix-dropdown-menu radix-side-right:animate-scale-in",
                    "w-full rounded-md px-1 py-1 text-xs shadow-md border border-text-secondary",
                    "bg-background-primary"
                  )}
                >
                  {socials.map(({ name, url }, i) => (
                    <DropdownMenuPrimitive.Item
                      key={`${name}-${i}`}
                      className={clsx(
                        "flex w-28 cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none md:w-32",
                        "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                      )}
                    >
                      {url ? (
                        <img
                          className="mr-2.5 h-6 w-6 rounded-full"
                          src={url}
                        />
                      ) : (
                        <PersonIcon className="mr-2.5 h-6 w-6" />
                      )}
                      <Text text={name} />
                    </DropdownMenuPrimitive.Item>
                  ))}
                </DropdownMenuPrimitive.SubContent>
              </DropdownMenuPrimitive.Portal>
            </DropdownMenuPrimitive.Sub>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export default MobileMenu;
