import React from "react";
import { Metadata } from "next";
import { getAllProjects } from "@/lib/work";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "ANTONIO HERRERA | Designer & Performing Artist, Zurich",
  description: "Official website of Antonio Herrera, Strategic Designer and Performing Artist based in Zurich.",
};

export default async function HomePage() {
  const projects = await getAllProjects();

  return <HomePageClient projects={projects} />;
}
