import create from 'zustand'

const useStore = create(set => ({
    x: 0,
    setX: (v) => set(state => ({ x: v })),

    show: 'none',
    setShow: (v) => set(state => ({ show: v })),

    checkInText: 'Check In',
    setCheckInText: (v) => set(state => ({ checkInText: v })),

}))
export { useStore }