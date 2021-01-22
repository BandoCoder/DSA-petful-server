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
    let inputCats = pets.cats.all();
    let inputDogs = pets.dogs.all();

    const petObj = {
      cats: inputCats.reverse(),
      dogs: inputDogs.reverse(),
    };
    return petObj;
  },

  dequeue(type) {
    // Stringify the type
    // Remove a pet from the queue.
    if (type === "cats") {
      return pets.cats.dequeue();
    }
    if (type === "dogs") {
      return pets.dogs.dequeue();
    }
  },
};
