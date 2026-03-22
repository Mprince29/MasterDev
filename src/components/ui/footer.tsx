import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black/80 backdrop-blur-sm mt-20 z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">© {year} Prince. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="https://github.com/Mprince29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/master-prince-83609b257/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link href="https://x.com/Mprince_28" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaTwitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
