"use client";
import React from "react";

const SplineAvatar = () => (
  <div className="mb-6 sm:mb-8 w-48 sm:w-64 h-48 sm:h-64 mx-auto md:mx-0 bg-black">
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-ignore */}
    <spline-viewer
      url="https://prod.spline.design/2qNUCtoem5ZxJgRr/scene.splinecode"
      style={{ width: "100%", height: "100%" }}
    />
  </div>
);

export default SplineAvatar; 