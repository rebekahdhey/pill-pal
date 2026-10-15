import { useState } from 'react'
import type { FormEvent } from 'react'
import type { NewMedicine } from '../types/medicine'

interface AddMedicineFormProps {
  onAdd: (medicine: NewMedicine) => void
}

function AddMedicineForm({ onAdd }: AddMedicineFormProps) {
  const [name, setName] = useState('')
  const [dosage, setDosage] = useState('')
  const [time, setTime] = useState('08:00')

  const formatTime = (value: string) => {
    const [h, m] = value.split(':').map(Number)
    const period = h >= 12 ? 'PM' : 'AM'
    const hour12 = h % 12 === 0 ? 12 : h % 12
    return `${hour12}:${String(m).padStart(2, '0')} ${period}`
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name.trim() || !dosage.trim()) return

    onAdd({ name: name.trim(), dosage: dosage.trim(), time: formatTime(time) })

    setName('')
    setDosage('')
    setTime('08:00')
  }

    return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-3xl bg-white p-5 shadow-md shadow-brand-100"
    >
      <h2 className="text-lg font-extrabold text-slate-700">Add a medicine ➕</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Medicine name (e.g. Zinc)"
        className="w-full rounded-xl border-2 border-brand-100 px-4 py-2 outline-none transition focus:border-brand-400"
      />

      <input
        type="text"
        value={dosage}
        onChange={(e) => setDosage(e.target.value)}
        placeholder="Dosage (e.g. 1 tablet, 50mg)"
        className="w-full rounded-xl border-2 border-brand-100 px-4 py-2 outline-none transition focus:border-brand-400"
      />

      <div className="flex gap-3">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="flex-1 rounded-xl border-2 border-brand-100 px-4 py-2 outline-none transition focus:border-brand-400"
        />

        <button
          type="submit"
          className="rounded-xl bg-brand-500 px-5 py-2 font-bold text-white transition hover:bg-brand-600 active:scale-95"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default AddMedicineForm