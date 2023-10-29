import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Frame } from "lucide-react";
const LeftTab = () => {
  return (
    <div className="">
      <Tabs defaultValue="today" className="w-[200px] bg-transparent">
        <TabsList className="grid w-full  grid-cols-2 bg-transparent">
          <TabsTrigger value="today" className="flex items-center gap-2">
            <Frame className="w-4 h-4" />
            Today
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
                Activity
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default LeftTab;
