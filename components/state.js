import create from 'zustand'

const useStore = create(set => ({
  x: 0,
  setX: (v) => set(state => ({ x:v })),
}))