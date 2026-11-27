import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { WebsiteLayout } from "@/components/layout/WebsiteLayout";

export default function NotFound() {
  return (
    <WebsiteLayout lang="en">
      <div className="mx-auto flex min-h-[65vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
        <span className="font-display text-8xl font-black text-teal-700">404</span>
        <h1 className="mt-4 font-display text-3xl font-black text-slate-950">
          Page Not Found
        </h1>
        <p className="mt-3 text-base text-slate-600">
          The Evminov Spine Systems page you requested could not be found or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-800"
          >
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/products/"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-3.5 text-sm font-bold text-slate-900 hover:bg-slate-50"
          >
            <span>Browse Evminov Boards</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </WebsiteLayout>
  );
}
