"use client";

import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import AnimatedText from "./AnimatedText";
import { useKBar } from "./kbar/kbar-client";

const Header: NextPage = () => {
  const router = useRouter();
  const { query } = useKBar();

  const openCommandBar = () => {
    query.toggle();
  };

  return (
    <div className="w-full sticky top-0 text-white z-50 backdrop-blur-md bg-dark-900/90 border-b border-dark-700/50">
      <div className="px-3 sm:px-5 py-3 sm:py-4 flex justify-between items-center max-w-[900px] mx-auto gap-2 sm:gap-4">
        <AnimatedText
          text="thuo"
          className="text-green-brand cursor-pointer font-bold text-lg sm:text-xl flex-shrink-0"
          onClick={() => router.push("/")}
        />

        {/* Search input that opens kbar */}
        <button
          onClick={openCommandBar}
          className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1.5 sm:py-2 bg-dark-800 border border-dark-600 rounded-lg hover:border-dark-500 transition-colors group max-w-[140px] sm:max-w-[200px] w-full"
        >
          <LuSearch className="w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors flex-shrink-0" />
          <span className="hidden sm:block text-sm text-gray-500 flex-1 text-left">
            Search...
          </span>
          <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs font-mono text-gray-500 bg-dark-700 border border-dark-600 rounded">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
      </div>
    </div>
  );
};

export default Header;
