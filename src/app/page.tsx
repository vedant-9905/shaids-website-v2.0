import CollapsingHeroSection from "@/components/CollapsingHeroSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-[#eaf1f7] text-[#0a0a0a]">
      {/* Hero Section: Collapses and Disassembles on Scroll */}
      <CollapsingHeroSection />
    </div>
  );
}
