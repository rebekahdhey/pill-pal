interface ProgressSummaryProps {
  total: number
  taken: number
}

function ProgressSummary({ total, taken }: ProgressSummaryProps) {
  const percent = total === 0 ? 0 : Math.round((taken / total) * 100)

  const radius = 36
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - percent / 100)

  const message =
    total === 0
      ? 'No medicines yet'
      : taken === total
        ? 'All done for today! 🎉'
        : taken === 0
          ? "Let's get started!"
          : `${total - taken} more to go, you've got this!`

  const isDone = total > 0 && taken === total

    return (
    <section className="flex items-center gap-5 rounded-3xl bg-white p-5 shadow-md shadow-brand-100">
      <div className="relative h-24 w-24 shrink-0">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="10"
            className="stroke-brand-100"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={`transition-all duration-500 ${
              isDone ? 'stroke-blush-400' : 'stroke-brand-500'
            }`}
          />
        </svg>

        <span className="absolute inset-0 flex items-center justify-center text-xl font-extrabold text-brand-600">
          {percent}%
        </span>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-400">Today's progress</p>
        <p className="text-2xl font-extrabold text-slate-700">
          {taken} of {total} taken
        </p>
        <p className="text-sm text-slate-500">
          {message}
          {isDone && <span className="ml-1 inline-block animate-bounce">💖</span>}
        </p>
      </div>
    </section>
  )
}

export default ProgressSummary