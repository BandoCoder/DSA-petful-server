const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const Cats = new Queue();

store.cats.forEach((cat) => Cats.enqueue(cat));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    return Cats.show();
  },

  dequeue() {
    // Remove a pet from the queue.
    let aCat = Cats.dequeue();
    Cats.enqueue(aCat);
    return aCat;
  },
};
