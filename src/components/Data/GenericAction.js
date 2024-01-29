const areObjectsEqual = (obj1, obj2) =>
    Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);

export const combineArrObject = (inputArray) => {

    const resultArray = [];

    inputArray.forEach((currentObj) => {
        const existingObj = resultArray.find((obj) => areObjectsEqual(obj, currentObj));

        if (existingObj) {
            Object.assign(existingObj, currentObj);
        } else {
            resultArray.push({ ...currentObj });
        }
    });

    return resultArray;
};

export const findArrObject = (inputArray) => {
    const counts = {};
    const result = inputArray.map(item => {
        const key = `${item.id}-${item.name}`;
        counts[key] = (counts[key] || 0) + 1;

        // Check if the item is repeated
        if (counts[key] > 1) {
            // Add a "due" property to the card
            item.due = counts[key];
        }

        return item;
    });

    return result;
}

// console.log(result);



