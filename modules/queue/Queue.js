class _Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.data;
  }

  show() {
    // Return the next item in the queue.
    return this.last.data;
  }

  all() {
    // Return all items in the queue.
    let currNode = this.first;
    let result = [];

    while (currNode) {
      result.push(currNode.data);
      currNode = currNode.next;
    }
    return result;
  }
}

module.exports = Queue;
