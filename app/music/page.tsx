import React from "react";
import { Metadata } from "next";
import MusicPageClient from "./MusicPageClient";

export const metadata: Metadata = {
  title: "Music",
  description: "Explore the live music, acoustic curation, and performance offerings of Antonio Herrera, performing artist based in Zurich.",
};

export default function MusicPage() {
  return <MusicPageClient />;
}
