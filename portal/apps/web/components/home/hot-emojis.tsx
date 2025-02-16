import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"

interface HotEmojisProps {
  title?: string
  count?: number
  gridCols?: {
    default: number
    md?: number
    lg?: number
  }
  className?: string
}

export function HotEmojis({
  title = "热门表情",
  count = 8,
  gridCols = {
    default: 2,
    md: 3,
    lg: 4
  },
  className
}: HotEmojisProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`grid grid-cols-${gridCols.default} md:grid-cols-${gridCols.md} lg:grid-cols-${gridCols.lg} gap-4`}>
          {[...Array(count)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-100 rounded-lg transition-transform hover:scale-[1.02] hover:bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}