const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const Dogs = new Queue();

store.dogs.forEach((dog) => Dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    return Dogs.show();
  },

  dequeue() {
    // Remove a pet from the queue.
    let aDog = Dogs.dequeue();
    Dogs.enqueue(aDog);
    return aDog;
  },
};
