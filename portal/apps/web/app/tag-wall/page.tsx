import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@workspace/ui/components/button"

const tags = [
  "mua", "彩色文字", "天线宝宝宝西游记", "小卷鼠", "摩尔庄园",
  "奶茶先", "微信炸弹", "小丑", "舔狗日记", "耗子喂汁",
  "干饭", "打工人", "拍一拍", "干饭人", "sad frog",
  "吞吻", "爱豆", "富家子弟", "萌新", "小黄狗",
  "小黄鸭", "下班啦", "微信红包", "爱的抱抱", "三连",
  "嗷呜", "流鼻血", "想你了", "猥琐", "嘻嘻",
  "小哥哥", "中指", "想你", "谢谢红包", "嘤嘤嘤",
  "熊本熊", "宝宝", "单身狗"
]

export default function TagWallPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* 主要内容区域 */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">表情标签墙</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant="secondary"
              className="text-sm h-12 transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:text-white flex items-center justify-center"
            >
              {tag}
            </Button>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}