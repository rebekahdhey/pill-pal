export interface Medicine {
  id: number
  name: string
  dosage: string
  time: string
  taken: boolean
}

export type NewMedicine = Omit<Medicine, 'id' | 'taken'>