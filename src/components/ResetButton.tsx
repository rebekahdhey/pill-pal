interface ResetButtonProps {
  onReset: () => void
}

function ResetButton ({ onReset }: ResetButtonProps ) {
  return (
    <button 
      onClick={onReset}
      className="w-full rounded-2xl border-2 border-dashed border-brand-200 py-2 text-sm font-bold text-brand-600 transition hover:bg-brand-100 active:scale-95"
    >
      Start a new day
    </button>
  )
}

export default ResetButton