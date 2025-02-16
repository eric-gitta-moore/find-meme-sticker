import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Pagination } from "@/components/home/pagination"

interface SearchPageProps {
  params: {
    keyword: string
  }
}

export default function SearchPage({ params }: SearchPageProps) {
  const { keyword } = params

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* 主要内容区域 */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">搜索结果：{decodeURIComponent(keyword)}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* 临时使用占位图，实际项目中应该根据关键词获取搜索结果 */}
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-100 rounded-lg transition-transform hover:scale-[1.02] hover:bg-gray-200 animate-pulse"
                />
              ))}
            </div>
            <div className="mt-8">
              <Pagination />
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}