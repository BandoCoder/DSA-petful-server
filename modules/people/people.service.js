const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    let input = people.all();
    const peopleArr = input;
    return peopleArr;
  },

  enqueue(person) {
    // Add a person to the queue.
    return people.enqueue(person);
  },

  dequeue() {
    // Remove a person from the queue.
    return people.dequeue();
  },
};
