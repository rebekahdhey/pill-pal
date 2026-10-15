import type { Medicine } from '../types/medicine'

interface MedicineCardProps {
  medicine: Medicine
  onToggle: (id: number) => void
}

function MedicineCard({ medicine, onToggle }: MedicineCardProps) {
  return (
    <article
      className={`animate-pop-in hover:-translate-y-0.5 flex items-center gap-4 rounded-2xl p-4 shadow-md shadow-brand-100 transition ${
        medicine.taken ? 'bg-brand-100/60' : 'bg-white'
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush-100 text-2xl">
        💊
      </div>

      <div className="flex-1">
        <h2
          className={`text-lg font-bold ${
            medicine.taken ? 'text-slate-400 line-through' : 'text-slate-700'
          }`}
        >
          {medicine.name}
        </h2>
        <p className="text-sm text-slate-500">
          {medicine.dosage} · {medicine.time}
        </p>
      </div>

      <button
        onClick={() => onToggle(medicine.id)}
        aria-label={medicine.taken ? 'Mark as not taken' : 'Mark as taken'}
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold transition active:scale-90 ${
          medicine.taken
            ? 'bg-brand-500 text-white'
            : 'border-2 border-brand-200 text-transparent hover:border-brand-400'
        }`}
      >
        ✓
      </button>
    </article>
  )
}

export default MedicineCard
