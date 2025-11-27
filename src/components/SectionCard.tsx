import { ReactNode } from "react";

export default function SectionCard({ children }: { children: ReactNode }) {
  return (
    <section className="bg-cardDark/60 border border-white/10 shadow-card rounded-xl p-6 md:p-8">
      {children}
    </section>
  );
}
