import { BottomBar } from "@/components/bottom-bar";
import { SearchBar } from "@/components/search-bar";
import { SideBar } from "@/components/side-bar";
import { Suggestions } from "@/components/suggestions";
import { Trends } from "@/components/trends";
import { Separator } from "@/components/ui/separator";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto flex min-h-screen w-screen min-w-[280px] flex-col px-0 md:pr-8 lg:px-8">
      <div className="flex min-h-full w-full flex-row justify-center">
        <SideBar />
        <Separator orientation="vertical" className="h-auto min-h-screen" />
        <div className="w-full min-w-[257px] md:max-w-[600px]">{children}</div>
        <Separator orientation="vertical" className="h-auto min-h-screen" />
        <div className="hidden min-h-full w-1/4 min-w-[300px] flex-none shrink-0 flex-col justify-start pl-[30px] pt-0 md:flex">
          <div className="sticky top-0 z-10 bg-card py-4">
            <SearchBar />
          </div>
          <div className="flex flex-col gap-5">
            <Suggestions />
            <Trends />
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
