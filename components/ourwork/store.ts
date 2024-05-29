import { create } from 'zustand'


type  WorkStore = {
    inViewFeature:string | null
    setInViewFeature:(feature:string | null)=>void
}


export const useWorkStore = create<WorkStore>((set)=>({
    inViewFeature:null,
    setInViewFeature:(feature:string | null)=>set(()=>({inViewFeature:feature})),
}))