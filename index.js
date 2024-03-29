export const genericNgCompareWith = (modelData, selectListItemData) => {
    modelData = modelData;
    selectListItemData = selectListItemData;

    if (modelData && selectListItemData) {
        if (modelData.id && selectListItemData.id && modelData.id === selectListItemData.id) {
            return true;
        } else {
            return String(modelData) === String(selectListItemData);
        }
    }

    return false;
}