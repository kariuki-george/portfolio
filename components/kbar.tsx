// All code for this component was copied from this repository: https://github.com/zenorocha/zenorocha.com/blob/master/components/CommandBar.js
// Author: Zeno Rocha
import * as React from "react";
import { useRouter } from "next/router";
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useDeepMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from "kbar";

export default function CommandBar(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<
        any,
        | string //github.com/zenorocha/zenorocha.com/blob/master/components/CommandBar.js
        // Author: Zeno Rocha
        | React.JSXElementConstructor<any>
      >
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
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
      perform: () => router.push("/"),
      icon: <Icon type="ri-home-5-line" />,
    },
    {
      id: "about",
      name: "About",
      shortcut: ["g", "a"],
      keywords: "go-about",
      section: "Go To",
      perform: () => router.push("#about"),
      icon: <Icon type="ri-user-line" />,
    },
    {
      id: "skills",
      name: "Skills",
      shortcut: ["g", "s"],
      keywords: "go-skills",
      section: "Go To",
      perform: () => router.push("#skills"),
      icon: <Icon type="ri-user-line" />,
    },
    {
      id: "projects",
      name: "Project",
      shortcut: ["g", "p"],
      keywords: "go-project",
      section: "Go To",
      perform: () => router.push("#projects"),
      icon: <Icon type="ri-user-line" />,
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
        <KBarPositioner className="fixed flex flex-start justify-center w-full inset-0 p-[16px] bg-black-500/70  bg-black-200 text-white  border-gray box-border">
          <KBarAnimator className="kbar-blur max-w-[600px] w-full text-white border bg-black-500/90 rounded-md overflow-hidden">
            <KBarSearch
              className="px-[12px] py-[16px] text-md w-full box-border bg-black-500/90 outline-none bottom-0 m-0 "
              placeholder="Type a command or search…"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {props.children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useDeepMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-[8px] py-[16px] text-[10px] ">{item}</div>
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
      <div ref={ref} style={getResultStyle(active)}>
        <div style={actionStyle}>
          {action.icon && action.icon}
          <div className="flex flex-col">
            <span>{action.name}</span>
          </div>
        </div>
        {action.shortcut?.length ? (
          <div aria-hidden style={shortcutStyle}>
            {action.shortcut.map((shortcut: React.Key | null | undefined) => (
              <kbd key={shortcut} className="px-[4px] py-[8px] ">
                {shortcut}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);

const Icon = ({ type }: { type: string }) => {
  return <i className={`relative top-[-2px] ${type}`} />;
};

const shortcutStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gap: "4px",
};

const actionStyle = {
  display: "flex",
  gap: "8px",
  alignItems: "center",
};

const getResultStyle = (active: any) => {
  return {
    padding: "12px 16px",
    background: active ? "rgba(255, 255, 255, 0.1)" : "var(--commandColor)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
    cursor: "pointer",
    color: active ? "var(--primaryColor)" : "var(--secondaryColor)",
  };
};
