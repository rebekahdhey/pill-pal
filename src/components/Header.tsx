
function Header() {
  const now = new Date()
  const hour = now.getHours()

  const greeting = 
    hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'
  

  const today = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="flex items-center justify-between rounded-3xl bg-linear-to-br from-brand-400 to-brand-600 p-6 text-white shadow-lg shadow-brand-200">
      <div>
        <p className="text-sm font-semibold opacity-80">{today}</p>
        <h1 className="text-2xl font-extrabold">{greeting}!</h1>
        <p className="mt-1 text-sm opacity-90">Let's take care of you today!</p>
      </div>

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25 text-3xl">
        💊
      </div>
    </header>
  )
}

export default Header