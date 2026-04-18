const SimpleNode = require("./SimpleNode");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addFirst(value) {
    const newNode = new SimpleNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
    this._size++;
  }

  addLast(value) {
    const newNode = new SimpleNode(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._size++;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this._size--;
    return value;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (this._isSameValue(current.value, value)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  countOccurrences(value) {
    let count = 0;
    let current = this.head;
    while (current != null){
      if (this._isSameValue(current.value, value)){
        count++;
      }
      current = current.next;
    }
    return count;
  }

  clean() {
   let count = 0;
   let current = this.head;
   while (current != null){
    let next = current.next;
    current.next = null;
    current = next;
    count++;
   }
   this.head = null;
   this.tail = null;
   this._size = 0;
    return count;
  }

  reverseInPlace() {
    if  (this.head == null || this.head.next == null){
      return;
    }
    this.tail = this.head;
    let previous = null;
    let current = this.head;
    while (current != null){
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  removeDuplicates() {
    let count = 0;
    let other = this.head;
    while (other != null){
      let previous = other;
      let current = other.next;
      while (current != null){
        if(this._isSameValue(other.value, current.value)){
          previous.next = current.next;
          if (current == this.tail){
            this.tail = previous;
          }
          this._size--;
          count++;
          current = current.next;
        } else {
          previous = current;
          current = current.next;
        }
      }
      other = other.next;
    }
    return count;

  
  }
  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  toString() {
    let out = "[";
    let current = this.head;
    while (current !== null) {
      out += String(current.value);
      if (current.next !== null) {
        out += ", ";
      }
      current = current.next;
    }
    out += "]";
    return out;
  }

  _isSameValue(left, right) {
    return left === right;
  }
}

module.exports = SinglyLinkedList;
