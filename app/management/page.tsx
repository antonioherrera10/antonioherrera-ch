import React from "react";
import { Metadata } from "next";
import ManagementPageClient from "./ManagementPageClient";

export const metadata: Metadata = {
  title: "Management",
  description: "Official booking, management, and press channel for Antonio Herrera, Strategic Designer & Performing Artist in Zurich.",
};

export default function ManagementPage() {
  return <ManagementPageClient />;
}
