const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    const petArr = [];
    let cat = pets.cats.show();
    let dog = pets.dogs.show();
    petArr.push(cat);
    petArr.push(dog);

    return petArr;
  },

  dequeue(type) {
    // Stringify the type
    // Remove a pet from the queue.
    if (type === pets["cats"]) {
      return pets.cats.dequeue();
    }
    if (type === pets["dogs"]) {
      return pets.dogs.dequeue();
    }
  },
};
