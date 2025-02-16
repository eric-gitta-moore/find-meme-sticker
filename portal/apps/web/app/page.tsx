import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { EmojiSection } from "@/components/home/emoji-section"
import { Pagination } from "@/components/home/pagination"
import { TagCloud } from "@/components/home/tag-cloud"
import { QRCodeNotice } from "@/components/home/qrcode-notice"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* 主要内容区域 */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧主要内容 */}
          <div className="flex-1">
            <EmojiSection title="可爱的牙膏猫咪表情包" count={9} />
            <EmojiSection title="很内向但外向猫咪表情包" count={17} />
            <EmojiSection title="上菜表情包" count={14} />
            <Pagination />
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