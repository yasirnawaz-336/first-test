import React from "react";
import { InstagramIcon, Facebook, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#065F46] text-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12 space-y-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Brand + Subscribe */}
          <div className="space-y-4">
            <img src="/Logoipsum.png" alt="Logoipsum" className="max-w-[140px]" />
            <p className="text-sm opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui assumenda
              necessitatibus nisi similique reprehenderit totam!
            </p>
            <div className="relative max-w-sm">
              <input
                className="w-full h-[40px] rounded-full px-4 text-sm bg-white text-black"
                type="email"
                placeholder="Enter Your Email"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 h-[32px] px-4 bg-[#065F46] border border-white/40 text-white rounded-full text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <p className="font-semibold">Fill opacity</p>
              <p className="opacity-70">Device variant</p>
              <p className="opacity-70">Auto create</p>
              <p className="opacity-70">Inspect underline</p>
              <p className="opacity-70">Flows fill</p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Fill opacity</p>
              <p className="opacity-70">Device variant</p>
              <p className="opacity-70">Auto create</p>
              <p className="opacity-70">Inspect underline</p>
              <p className="opacity-70">Flows fill</p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Ellipse arrange</p>
              <p className="opacity-70">Undo inspect</p>
              <p className="opacity-70">Community selection</p>
              <p className="opacity-70">Line subtract</p>
              <p className="opacity-70">Pixel union</p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Mask duplicate</p>
              <p className="opacity-70">Flows export</p>
              <p className="opacity-70">Ipsum strikethrough</p>
              <p className="opacity-70">Vector resizing</p>
              <p className="opacity-70">Group connection</p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Fill opacity</p>
              <p className="opacity-70">Device variant</p>
              <p className="opacity-70">Auto create</p>
              <p className="opacity-70">Inspect underline</p>
              <p className="opacity-70">Flows fill</p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Fill opacity</p>
              <p className="opacity-70">Device variant</p>
              <p className="opacity-70">Auto create</p>
              <p className="opacity-70">Inspect underline</p>
              <p className="opacity-70">Flows fill</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/40" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="opacity-70 text-center sm:text-left">
            Copyright © 2025. Religion & Reason. All rights reserved.
          </p>
          <div className="flex gap-5">
            <InstagramIcon />
            <Facebook />
            <Youtube />
            <Linkedin />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
