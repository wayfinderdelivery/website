import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocsSidebar from "@/components/docs/DocsSidebar";

export default function DocsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <div className="bg-white pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16 grid lg:grid-cols-[220px_minmax(0,1fr)] gap-8 lg:gap-14">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <DocsSidebar />
          </aside>
          <main className="min-w-0">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
