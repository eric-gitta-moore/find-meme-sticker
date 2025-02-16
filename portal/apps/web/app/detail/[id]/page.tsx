import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TagCloud } from "@/components/home/tag-cloud"
import { QRCodeNotice } from "@/components/home/qrcode-notice"
import { HotEmojis } from "@/components/home/hot-emojis"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface DetailPageProps {
  params: {
    id: string
  }
}

export default function DetailPage({ params }: DetailPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* 主要内容区域 */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧主要内容 */}
          <div className="flex-1">
            <Card>
              <CardContent className="p-6">
                {/* 表情图片区域 */}
                <CardTitle className="text-2xl">表情标题</CardTitle>
                <div className="flex flex-col items-center">
                  <div className="w-96 h-96 bg-gray-100 rounded-lg animate-pulse" />
                  <div className="mt-6 text-center">
                    <p className="text-gray-600">这是一个可爱的表情包描述，描述这个表情包的特点和用途。</p>
                    {/* 标签展示区域 */}
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {["可爱", "猫咪", "日常", "搞笑"].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 表情包集合卡片 */}
                <div className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">所属表情合辑</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg animate-pulse" />
                        <div>
                          <h3 className="font-medium">可爱的牙膏猫咪表情包</h3>
                          <p className="text-sm text-gray-500">共 24 个表情</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* 上一篇/下一篇导航 */}
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <ChevronLeft className="w-4 h-4" />
                    <span>上一篇</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <span>下一篇</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 相似表情推荐 */}
            <div className="mt-8">
              <HotEmojis title="相似表情推荐" />
            </div>
          </div>
          
          {/* 右侧边栏 */}
          <aside className="w-full lg:w-80">
            <TagCloud />
            <QRCodeNotice />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}