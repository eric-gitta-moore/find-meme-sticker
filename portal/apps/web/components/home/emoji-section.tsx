interface EmojiSectionProps {
  title: string
  count: number
}

export function EmojiSection({ title, count }: EmojiSectionProps) {
  return (
    <section className="mb-8 border border-gray-200 rounded-xl bg-white p-6 transition-all duration-200 hover:shadow-md hover:border-gray-300">
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-medium text-gray-900">{title}</h2>
        <span className="text-sm text-gray-500 ml-2">( {count}个表情 )</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-gray-100 rounded-lg transition-transform [transition-duration:200ms] hover:scale-[1.02] hover:bg-gray-200 animate-pulse"
          />
        ))}
      </div>
    </section>
  )
}