import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function NewsActivity() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">News Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
            <p className="text-gray-500 text-sm">No news activity available</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Stay updated with latest news and activities</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}