import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TagCloud } from "@/components/home/tag-cloud"
import { QRCodeNotice } from "@/components/home/qrcode-notice"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Tag } from "lucide-react"
import { HotEmojis } from "@/components/home/hot-emojis"

export default function EmojiDetail() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧主要内容 */}
          <div className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">可爱的牙膏猫咪表情包</CardTitle>
                <div className="flex items-center space-x-2 mt-4">
                  <Tag className="h-4 w-4 text-blue-500" />
                  <div className="flex flex-wrap gap-2">
                    <Button variant="secondary" size="sm" className="text-sm">可爱</Button>
                    <Button variant="secondary" size="sm" className="text-sm">猫咪</Button>
                    <Button variant="secondary" size="sm" className="text-sm">牙膏</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gray-100 rounded-lg transition-transform hover:scale-[1.02] hover:bg-gray-200 animate-pulse"
                    />
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" className="text-blue-500">
                    <span className="mr-2">←</span>
                    上一篇：开心的小狗表情包
                  </Button>
                  <Button variant="outline" className="text-blue-500">
                    下一篇：可爱的小兔子表情包
                    <span className="ml-2">→</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* 热门表情模块 */}
            <HotEmojis className="mt-8" />
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