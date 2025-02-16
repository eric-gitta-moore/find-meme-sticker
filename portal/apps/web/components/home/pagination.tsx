import { Button } from "@workspace/ui/components/button"

export function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      <Button variant="default" className="bg-blue-500 text-white hover:bg-blue-600">1</Button>
      {[2, 3, 4, 5, 6].map((page) => (
        <Button key={page} variant="outline">{page}</Button>
      ))}
      <span className="px-2">...</span>
      <Button variant="outline">997</Button>
      <Button variant="link" className="text-blue-500">下一页</Button>
      <Button variant="link" className="text-blue-500">表情包专辑</Button>
    </div>
  )
} 