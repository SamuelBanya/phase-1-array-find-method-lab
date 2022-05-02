// code your solution here
function superbowlWin(objectsArray) {
    // let foundItem = books.find(book => book.title === 'Javascript: The Definitive Guide');
    const foundObject = objectsArray.find(object => object.result === 'W');

    if (foundObject) {
        return foundObject.year;
    }
    else {
        return undefined;
    }
}

const record = [
    { year: "2015", result: "W" },
    { year: "2018", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
]

superbowlWin(record);
