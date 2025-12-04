/* eslint-disable react/display-name */
"use client";

import { useRouter } from "next/navigation";
// All code for this component was copied from this repository: https://github.com/zenorocha/zenorocha.com/blob/master/components/CommandBar.js
// Author: Zeno Rocha
import * as React from "react";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from "./kbar/kbar-client";

export default function CommandBar(props: { children: React.ReactNode }) {
  const router = useRouter();

  const actions = [
    {
      id: "copy",
      name: "Copy URL",
      shortcut: ["u"],
      keywords: "copy-url",
      section: "General",
      perform: () => navigator.clipboard.writeText(window.location.href),
      icon: <Icon type="ri-file-copy-line" />,
    },
    {
      id: "blog",
      name: "Read Blog",
      shortcut: ["b"],
      keywords: "read-blog",
      section: "General",
      perform: () => window.open("https://blog.kariukigeorge.me/", "_blank"),
      icon: <Icon type="ri-braces-line" />,
    },
    {
      id: "email",
      name: "Send Email",
      shortcut: ["e"],
      keywords: "send-email",
      section: "General",
      perform: () =>
        window.open("mailto:kariukigeorge2030@gmail.com", "_blank"),
      icon: <Icon type="ri-mail-line" />,
    },
    {
      id: "source",
      name: "View Source",
      shortcut: ["s"],
      keywords: "view-source",
      section: "General",
      perform: () =>
        window.open("https://github.com/smiley-geek/portfolio", "_blank"),
      icon: <Icon type="ri-braces-line" />,
    },
    {
      id: "home",
      name: "Home",
      shortcut: ["g", "h"],
      keywords: "go-home",
      section: "Go To",
      perform: () => router.push("/", { scroll: true }),
      icon: <Icon type="ri-home-5-line" />,
    },
    {
      id: "about",
      name: "About",
      shortcut: ["g", "a"],
      keywords: "go-about",
      section: "Go To",
      perform: () => {
        const element = document.getElementById("about");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
      icon: <Icon type="ri-user-line" />,
    },
    {
      id: "experience",
      name: "Experience",
      shortcut: ["g", "e"],
      keywords: "go-experience",
      section: "Go To",
      perform: () => {
        const element = document.getElementById("experience");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
      icon: <Icon type="ri-briefcase-line" />,
    },
    {
      id: "projects",
      name: "Projects",
      shortcut: ["g", "p"],
      keywords: "go-projects",
      section: "Go To",
      perform: () => {
        const element = document.getElementById("projects");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
      icon: <Icon type="ri-code-box-line" />,
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["g", "c"],
      keywords: "go-contact",
      section: "Go To",
      perform: () => {
        const element = document.getElementById("contact");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
      icon: <Icon type="ri-mail-line" />,
    },

    {
      id: "twitter",
      name: "Twitter",
      shortcut: ["f", "t"],
      keywords: "go-twitter",
      section: "Follow",
      perform: () =>
        window.open("https://twitter.com/_kariuki_george", "_blank"),
      icon: <Icon type="ri-twitter-line" />,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      shortcut: ["f", "l"],
      keywords: "go-linkedin",
      section: "Follow",
      perform: () =>
        window.open("https://www.linkedin.com/in/kariukigeorge/", "_blank"),
      icon: <Icon type="ri-linkedin-line" />,
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="fixed z-50 flex flex-start justify-center w-full inset-0 p-4 bg-black/60 backdrop-blur-sm">
          <KBarAnimator className="w-full max-w-[600px] bg-dark-900/90 backdrop-blur-xl border border-dark-700/50 rounded-xl shadow-2xl overflow-hidden transform transition-all">
            <div className="flex items-center border-b border-dark-700/50 px-4">
              <span className="text-gray-400 mr-2">
                <Icon type="ri-search-line" />
              </span>
              <KBarSearch
                className="w-full py-4 bg-transparent text-white placeholder-gray-500 outline-none text-lg font-medium"
                placeholder="Type a command or search..."
              />
              <div className="px-2 py-1 bg-dark-800 rounded text-xs text-gray-500 font-mono border border-dark-700">
                ESC
              </div>
            </div>
            <div className="py-2 max-h-[400px] scrollbar-hide">
              <RenderResults />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {props.children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider mt-2 mb-1">
            {item}
          </div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(
  ({ action, active }: { action: any; active: any }, ref: any) => {
    return (
      <div
        ref={ref}
        className={`mx-2 px-4 py-3 rounded-lg flex items-center justify-between cursor-pointer transition-all duration-200 ${
          active
            ? "bg-green-brand/10 text-green-brand border-l-2 border-green-brand"
            : "text-gray-300 hover:bg-dark-800 border-l-2 border-transparent"
        }`}
      >
        <div className="flex items-center gap-3">
          {action.icon && (
            <span
              className={`text-xl ${active ? "text-green-brand" : "text-gray-400"}`}
            >
              {action.icon}
            </span>
          )}
          <div className="flex flex-col">
            <span className="font-medium">{action.name}</span>
            {action.subtitle && (
              <span className="text-xs text-gray-500">{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div className="flex gap-1">
            {action.shortcut.map((shortcut: any) => (
              <kbd
                key={shortcut}
                className={`px-2 py-1 text-xs font-mono rounded border ${
                  active
                    ? "bg-green-brand/20 border-green-brand/30 text-green-brand"
                    : "bg-dark-800 border-dark-700 text-gray-500"
                }`}
              >
                {shortcut}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  },
);

const Icon = ({ type }: { type: string }) => {
  // Mapping simple icon names to actual icons if needed, or just using a generic placeholder if the font icon isn't loaded
  // Since the original code used class names like "ri-file-copy-line", assuming Remix Icons are loaded or we should replace with react-icons
  // For now, keeping the structure but ensuring it renders something visible if classes fail
  return <i className={`${type}`} />;
};
