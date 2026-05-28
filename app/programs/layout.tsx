import GAConversionEvent from "@/components/GAConversionEvent";

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GAConversionEvent event="programs_page_view" />
      {children}
    </>
  );
}
