import { create } from 'zustand'
import { FormsSlice, createFormsSlice } from '@/lib/slices/createFormsSlice'

type StoreState = FormsSlice

export const useAppStore = create<StoreState>()((...a) => ({
  ...createFormsSlice(...a)
}))
