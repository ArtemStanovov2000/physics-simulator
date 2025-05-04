export const deleteElement = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = array[i].length; j > 0; j--) {
            array[i].pop();
        }
    }
};
//# sourceMappingURL=deleteElement.js.map