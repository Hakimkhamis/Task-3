const myObjArray = [
    {
        name: "Eva Devore",
        character: "Evandra",
        episodes: 15,
    },
    {
        name: "Alessia Medina",
        character: "Nixie",
        episodes: 15,
    },
    {
        name: "Kendall Drury",
        character: "DM",
        episodes: 15,
    },
    {
        name: "Thomas Taufan",
        character: "Antrius",
        episodes: 14,
    },
    {
        name: "Alessia Medina",
        character: "Nixie",
        episodes: 15,
    },
];


// Creates an array of objects with unique "name" property values.
let uniqueObjArray = [
  ...new Map(myObjArray.map((item) => [item["name"], item])).values(),
];

// Creates a new 2d array with the selected key in position 0 and the object in position 1 of each iteration.
let test_uniqueObjArray_map = myObjArray.map((item) => {
    return [item["name"], item];
});

let test_uniqueObjArray_NewMap = new Map(test_uniqueObjArray_map);

let test_uniqueObjArray_NewMap_keys = test_uniqueObjArray_NewMap.keys();

let test_uniqueObjArray_NewMap_values = test_uniqueObjArray_NewMap.values();

let test_uniqueObjArray_NewMap_values_asArray = [... test_uniqueObjArray_NewMap_values,
];

console.log(test_uniqueObjArray_NewMap_values_asArray);

