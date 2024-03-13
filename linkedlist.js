class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// const n1 = new Node(100);
// console.log(n1);
// const n2 = new Node(200, n1);
// console.log(n2);

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert first
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //printall
  printAll() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  //insert last
  instertLast(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  insertIndex(data, index) {
    if (index == 0 && index > this.size) {
      return;
    }
    if (index == 0) {
      this.insertFirst(data);
      return;
    }
    const node = new Node(data);
    let prev,
      current = this.head,
      count = 0;
    while (count < index) {
      prev = current;
      count++;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
    this.size++;
  }

  //reverse the list
  reverse() {
    let current = this.head;
    let prev, next;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const ll = new Linkedlist();

ll.instertLast(100);
ll.instertLast(200);
ll.instertLast(300);
ll.instertLast(400);
ll.instertLast(500);
ll.reverse();
ll.printAll();
