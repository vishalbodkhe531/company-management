import { TabsContent } from "@/components/ui/tabs";

function ActivityLogs() {
  return (
    <>
      <TabsContent value="logs" className="space-y-2">
        <p>No recent activity logs available.</p>
      </TabsContent>
    </>
  );
}

export default ActivityLogs;
