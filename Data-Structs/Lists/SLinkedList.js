;('use strict')

class LinkedList {
  constructor(value = null) {
    if (value != null) {
      this.head = new Node(value)
      this.tail = this.head
      this.size = 1
    } else {
      this.head = null
      this.tail = null
      this.size = 0
    }
  }

  addLast(value) {
    const node = new Node(value)

    if (this.head) {
      // let currentNode = this.head
      // while (currentNode && currentNode.next) {
      //   currentNode = currentNode.next
      // }
      this.tail.next = node
      this.tail = node
      this.tail.next = null
    } else {
      this.head = node
    }
  }

  removeLast() {
    let current = this.head
    let target

    if (current && current.next) {
      while (current && current.next && current.next.next) {
        current = current.next
      }
      target = current.next
      current.next = null
    } else {
      this.head = null
      target = current
    }

    if (target) {
      return target.value
    }
  }

  addFirst(value) {
    const node = new Node(value)
    node.next = this.head
    this.head = node
  }

  removeFirst() {
    const first = this.head

    if (first) {
      this.head = first.next
      return first.value
    }
  }

  remove(index = 0) {
    if (index === 0) {
      return this.removeFirst()
    }

    for (
      let current = this.first, i = 0;
      current;
      i++, current = current.next
    ) {
      if (i === index) {
        if (!current.next) {
          // if it doesn't have next it means that it is the last
          return this.removeLast()
        }
        current.previous = current.next
        this.size--
        return current.value
      }
    }
  }

  contains(value) {
    for (
      let current = this.first, index = 0;
      current;
      index++, current = current.next
    ) {
      if (current.value === value) {
        return index
      }
    }
  }

  toString() {
    let string = ''
    string += 'head --> '
    for (let current = this.head; current; current = current.next) {
      string += current.toString() + ' --> '
    }
    string += 'end'
    return string
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }

  toString() {
    let string = this.value
    return string
  }
}

module.exports = { LinkedList, Node }

let SLL = new LinkedList('lol')
SLL.addLast('tomato')
SLL.addLast('apple')
// console.log(SLL.head)
console.log(SLL.toString())
SLL.removeFirst()
SLL.removeFirst()
SLL.removeFirst()
SLL.removeFirst()
console.log(SLL.toString())
