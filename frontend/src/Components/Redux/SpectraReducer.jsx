import { MENUITEM } from "./SpectraType";

const initialState = []
const SpectraReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENUITEM:
            // console.log(action.data);
            return { ...state, menuitem: action.data }
        default:
            break;
    }
}
export default SpectraReducer;