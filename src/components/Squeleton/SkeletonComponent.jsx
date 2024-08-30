import { Card, Skeleton } from "@nextui-org/react";

export default function SkeletonComponent() {
  return (
    <Card className="w-[200px] h-[170px] space-y-5 p-4 bg-gray-600 bg-opacity-80" radius="lg">
      <Skeleton className="rounded-lg bg-gray-500">
        <div className="h-36 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-6">
        <Skeleton className="w-3/5 rounded-lg bg-gray-800">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg bg-gray-800">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg bg-gray-800">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
