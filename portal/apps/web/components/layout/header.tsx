import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-blue-500">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo和导航 */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">😊</span>
            </div>
            <span className="text-white text-xl font-medium">表情</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/emojis" className="text-white hover:text-blue-100">表情包</Link>
            <Link href="/hot" className="text-white hover:text-blue-100">热门表情</Link>
            <Link href="/tags" className="text-white hover:text-blue-100">标签墙</Link>
            <Link href="/remove-bg" className="text-white hover:text-blue-100">表情包去白底</Link>
          </nav>
        </div>
        {/* 搜索框 */}
        <div className="flex items-center">
          <div className="relative">
            <Input 
              className="w-64 pr-10 bg-white" 
              placeholder="搜索表情包..." 
            />
            <Button 
              size="icon"
              className="absolute right-0 top-0 h-full bg-blue-500 hover:bg-blue-600"
            >
              <Search className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 