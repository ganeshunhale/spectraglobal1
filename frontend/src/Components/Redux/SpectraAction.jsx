import { MENUITEM } from "./SpectraType"

export const SetMenuItemAction = (data) => {
    return {
        type: MENUITEM,
        data: data
    }
}