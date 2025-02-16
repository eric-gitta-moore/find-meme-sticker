import { Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 第一列：Logo和备案信息 */}
          <div className="flex flex-col items-start">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">😊</span>
            </div>
            <p className="text-sm mb-2">京ICP备 13026175号-3</p>
            <p className="text-sm flex items-center">
              <Shield className="w-4 h-4 mr-1" />
              京公安网安备 46010502000117号
            </p>
          </div>

          {/* 第二列：关于表情 */}
          <div className="flex flex-col items-center">
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">关于表情</h4>
                <p className="text-sm text-gray-400">
                  发表情(fabiaoqing.com)成立于2016年，
                  致力于打造全网最全的表情包下载网站。
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-4">版本申明</h4>
                <p className="text-sm text-gray-400">
                  本站所有内容均来自互联网，如有侵权请联系我们删除。
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-4">联系我们</h4>
                <p className="text-sm text-gray-400">
                  邮箱：fabiaoqing#163.com(将#替换为@)
                </p>
              </div>
            </div>
          </div>

          {/* 第三列：社交媒体 */}
          <div className="flex flex-col space-y-6 items-center">
            <div className="">
              <h4 className="font-medium mb-4">新浪微博</h4>
              <Link href="#" className="text-sm text-gray-400 hover:text-white flex items-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full mr-2" />
                表情包集中营
              </Link>
            </div>
            <div>
              <h4 className="font-medium mb-4">头条号</h4>
              <p className="text-sm text-gray-400">
                奇怪的表情增加了
              </p>
            </div>
          </div>

          {/* 第四列：微信公众号 */}
          <div className="flex flex-col items-center">
            <div className="space-y-6">
              <h4 className="font-medium mb-4">微信公众号</h4>
              <div className="aspect-square w-32 bg-white rounded-lg mb-2" />
              <p className="text-sm text-gray-400">
                扫一扫，站在斗图的巅峰
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}