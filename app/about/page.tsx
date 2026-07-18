import React from "react";
import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description: "Explore the biography, curriculum vitae, and professional expertise of Antonio Herrera, Strategic Designer & Performing Artist based in Zurich, Switzerland.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
