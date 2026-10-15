function EmptyState() {
  return (
    <div className="rounded-3xl border-2 border-dashed border-brand-200 bg-white/60 p-8 text-center">
      <p className="text-4xl">🌱</p>
      <p className="mt-2 font-bold text-slate-600">No medicines yet</p>
      <p className="text-sm text-slate-400">Add your first one below.</p>
    </div>
  )
}

export default EmptyState