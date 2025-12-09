import { useParams } from "react-router-dom";
import { Header } from "@/widgets/header/ui/Header";
import type { PageLayoutProps } from "./types";

export function AppLayout({ title, children }: PageLayoutProps) {
  const params = useParams();

  const resolvedTitle = title ?? (params.id ? `Round: ${params.id}` : "Application");

  return (
    <div className="min-h-screen bg-base text-text px-4 py-10 md:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <Header />
        {resolvedTitle && (
          <div>
            <h1 className="text-2xl font-semibold mt-4">{resolvedTitle}</h1>
          </div>
        )}
        <main className="animate-fadeInUp flex flex-col gap-6">{children}</main>
      </div>
    </div>
  );
}
