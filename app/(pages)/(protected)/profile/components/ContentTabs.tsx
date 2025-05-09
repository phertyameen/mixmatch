import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { MediaGrid } from "./ContentGrids";
import { ContentTab } from "@/app/interfaces/pofile";

const tabs: ContentTab[] = [
  {
    value: "videos",
    label: "Videos",
  },
  {
    value: "samples",
    label: "Sample Mixes",
  },
  {
    value: "photos",
    label: "Photos",
  },
];

export function ContentTabs( ) {
  return (
    <div className="flex-1 bg-[#21202D] rounded-[24px] border-8 border-white/[0.12] bg-clip-content w-full overflow-hidden h-auto lg:h-[967px]">
      <div className="p-4 lg:p-6 h-full relative">
        <div className="flex justify-between items-center mb-4 lg:mb-6">
          <h2 className="text-3xl lg:text-[54px] text-white font-bold">WELCOME</h2>
        </div>

        <Tabs defaultValue="videos" className="h-[calc(100%-100px)]">
          <div className="flex items-center justify-center mb-4 lg:mb-6 border-2 bg-black/25 border-white/10 rounded-[28px] max-w-[294px] h-[56px]">
            <TabsList className="flex items-center justify-center gap-0 bg-transparent border-none p-0 w-full">
              {tabs.map((tab) => (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:bg-white data-[state=active]:text-[#0B0A14] text-[#CECDD5] data-[state=active]:rounded-[28px] px-2 lg:px-[12px] text-sm lg:text-base"
                > 
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="videos">
            <MediaGrid type="video" />
          </TabsContent>

          <TabsContent value="samples">
            <MediaGrid type="sample" />
          </TabsContent>

          <TabsContent value="photos">
            <MediaGrid type="photo" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 