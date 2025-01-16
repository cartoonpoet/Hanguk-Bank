import {create} from "zustand";
import {Mode} from "@/_constants/mode";

interface Common {
    mode: Mode,
    setMode: (mode: Mode) => void,
}

const CommonStore = create<Common>((set) => ({
    mode: '',
    setMode: (mode) => set(() => ({mode})),
}));

export default CommonStore;