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

export function TagCloud() {
  return (
    <div className="mb-8">
      <h3 className="text-gray-500 mb-4">表情包精选</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Button
            key={tag}
            variant="secondary"
            className="text-sm h-8 transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:text-white"
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  )
}