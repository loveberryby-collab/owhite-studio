import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Админ-панель — OWhite Automation Studio",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
