import { jsx as _jsx } from "react/jsx-runtime";
import { useStore } from '../../store/useStore';
export const Search = () => {
    const { filter, setFilter } = useStore();
    return (_jsx("div", { children: _jsx("input", { type: "text", value: filter, onChange: (e) => setFilter(e.target.value), placeholder: "buscar producto", className: "px-2 py-1 rounded text-black border-2 border-amber-100" }) }));
};
