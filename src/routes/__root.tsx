import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Petals, GoldenParticles } from "@/components/Petals";
import { SparkleCursor } from "@/components/SparkleCursor";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gold-gradient">404</h1>
        <p className="mt-4 text-lg text-ivory/80">This page doesn't exist in our story.</p>
        <Link to="/" className="mt-6 inline-block rounded-full border border-gold bg-maroon px-6 py-2 text-ivory">
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <p className="text-ivory">Something didn't load. <a href="/" className="text-gold underline">Return home</a></p>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aarav weds Anaya — A Royal Indian Wedding" },
      { name: "description", content: "Join us for the royal wedding celebrations of Aarav & Anaya — June 2026, Gorakhpur." },
      { property: "og:title", content: "Aarav weds Anaya — A Royal Indian Wedding" },
      { name: "twitter:title", content: "Aarav weds Anaya — A Royal Indian Wedding" },
      { property: "og:description", content: "Join us for the royal wedding celebrations of Aarav & Anaya — June 2026, Gorakhpur." },
      { name: "twitter:description", content: "Join us for the royal wedding celebrations of Aarav & Anaya — June 2026, Gorakhpur." },
      { name: "twitter:card", content: "summary" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1e105aff-6b40-4fe0-aa3b-d2df0a6610f0/id-preview-cbc52840--f20f01f6-319c-4529-920f-359d0044e29b.lovable.app-1778156110452.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1e105aff-6b40-4fe0-aa3b-d2df0a6610f0/id-preview-cbc52840--f20f01f6-319c-4529-920f-359d0044e29b.lovable.app-1778156110452.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <GoldenParticles />
      <SparkleCursor />
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
