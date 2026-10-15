import { useState } from 'react'
import Header from './components/Header'
import ProgressSummary from './components/ProgressSummary'
import MedicineCard from './components/MedicineCard'
import AddMedicineForm from './components/AddMedicineForm'
import type { Medicine, NewMedicine } from './types/medicine'
import ResetButton from './components/ResetButton'

const initialMedicines: Medicine[] = [
  { id: 1, name: 'Vitamin C', dosage: '1 tablet, 500mg', time: '8:00 AM', taken: false },
  { id: 2, name: 'Omega-3', dosage: '2 capsules', time: '9:00 AM', taken: false },
  { id: 3, name: 'Iron Supplement', dosage: '1 tablet, 65mg', time: '1:00 PM', taken: false },
  { id: 4, name: 'Magnesium', dosage: '1 tablet, 200mg', time: '9:00 PM', taken: false },
]

function App() {
  const [medicines, setMedicines] = useState<Medicine[]>(initialMedicines)

  const toggleTaken = (id: number) => {
    setMedicines((current) =>
      current.map((medicine) =>
        medicine.id === id
          ? { ...medicine, taken: !medicine.taken }
          : medicine
      )
    )
  }

  const addMedicine = (newMedicine: NewMedicine) => {
    setMedicines((current) => [
      ...current,
      { ...newMedicine, id: Date.now(), taken: false },
    ])
  }

  const takenCount = medicines.filter((medicine) => medicine.taken).length

  const resetDay = () => {
    setMedicines((current) => 
      current.map((medicine) => ({...medicine, taken: false}))
    )
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <main className="mx-auto w-full max-w-md space-y-4">
        <Header />

        <ProgressSummary total={medicines.length} taken={takenCount} />

        <section className="space-y-3">
          {medicines.map((medicine) => (
            <MedicineCard
              key={medicine.id}
              medicine={medicine}
              onToggle={toggleTaken}
            />
          ))}

          {takenCount > 0 && <ResetButton onReset={resetDay} />}
        </section>

        <AddMedicineForm onAdd={addMedicine} />
      </main>
    </div>
  )
}

export default App