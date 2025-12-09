import type { ReactNode } from "react";

export type AppLayoutProps = {
  title: ReactNode;
  children: ReactNode;
};

export type PageLayoutProps = {
  title?: string; 
  children: ReactNode;
};