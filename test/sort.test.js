import sortInsertion from "../sort/sortInsertion";
import sortSelection from "../sort/sortSelection";
import sortBubble from "../sort/sortBubble";
import sortGnome from "../sort/sortGnome";
import sortCocktail from "../sort/sortCocktail";
import sortMerge from "../sort/sortMerge";
import sortQuick from "../sort/sortQuick";

const sortAlgorithms = [
  sortInsertion,
  sortSelection,
  sortBubble,
  sortGnome,
  sortCocktail,
  sortMerge,
  sortQuick
];

const cases = {
  "пустой массив": {
    unsortedArray: [],
    sortedArray: []
  },
  "массив с одним элементом": {
    unsortedArray: [1],
    sortedArray: [1]
  },
  "массив с одним нулевым элементом": {
    unsortedArray: [0],
    sortedArray: [0]
  },
  "массив из нескольких элементов": {
    unsortedArray: [4, 1, 5, 0, 3, 2, 7, -1, 6, 8, 9],
    sortedArray: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  "массив с повторяющимися элементами": {
    unsortedArray: [4, 1, 5, 3, 2, 7, 6, 0, 2, -1, 5],
    sortedArray: [-1, 0, 1, 2, 2, 3, 4, 5, 5, 6, 7]
  },
  "отсортированный массив": {
    unsortedArray: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    sortedArray: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
};

sortAlgorithms.forEach(sortAlgorithm => {
  describe(sortAlgorithm.name, () => {
    for (const [desc, arrays] of Object.entries(cases)) {
      it(desc, () => {
        expect(sortAlgorithm(arrays.unsortedArray)).toEqual(arrays.sortedArray);
      });
    }
  });
});
