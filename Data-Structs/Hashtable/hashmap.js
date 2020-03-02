// module.exports = HashMapModule
;('use strict')
class HashMap {
  constructor(initialCapacity = 10) {
    this.buckets = new Array(initialCapacity)
    this.collisions = 0
    this.size = 0
  }

  put(key, value) {
    if (!this.containsKey(key)) {
      this.set(key, value)
      this.size++
    }
  }

  containsKey(key) {
    const index = this.getIndex(key)
    let itemList = this.buckets[index]
    if (itemList != null) {
      // console.log(itemList)
      for (let j = 0; j < itemList.length; j++) {
        if (itemList[j].key === key) {
          return true
        }
      }
    }
    return false
  }
  containsValue(value) {}

  set(key, value) {
    const bucketIndex = this.getIndex(key)
    if (this.buckets[bucketIndex]) {
      this.buckets[bucketIndex].push({ key, value })
      if (this.buckets[bucketIndex].length > 1) {
        this.collision++
      }
    } else {
      this.buckets[bucketIndex] = [{ key, value }]
    }
    return this
  }

  get(key) {
    if (this.containsKey(key)) {
      const index = this.getIndex(key)
      const itemList = this.buckets[index]
      let entry
      for (let i = 0; i < itemList.length; i++) {
        entry = itemList[i]
        if (entry.key === key) {
          return entry.value
        }
      }
      return entry
    }
  }

  remove(key) {
    if (this.containsKey(key)) {
      const index = this.getIndex(key)
      const itemList = this.buckets[index]
      let entry
      for (let i = 0; i < itemList.length; i++) {
        entry = itemList[i]
        if (entry.key === key) {
          itemList.splice(i, 1)
          break
        }
      }
      return entry
    }
  }

  hash(key) {
    let hashValue = 0
    const stringKey = `${key}${typeof key}`

    for (let i = 0; i < stringKey.length; i++) {
      const charCode = stringKey.charCodeAt(i)
      hashValue += charCode << (i * 8)
    }
    return Math.floor(hashValue)
  }

  getIndex(key) {
    const indexHash = this.hash(key)
    const index = indexHash % this.buckets.length
    return index
  }
  getSize() {
    return this.size
  }

  toString() {
    let string = ''
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== null && typeof this.buckets[i] !== 'undefined') {
        // console.log(element.key + element.value)
        // console.log(this.buckets[i][0])
        string += '{\n'
        for (let j = 0; j < this.buckets[i].length; j++) {
          string +=
            '\t' +
            this.buckets[i][j].key +
            ' => ' +
            this.buckets[i][j].value +
            '\n'
        }
        string += '}'
      }
    }
    return string
  }
}
module.exports = { HashMap }

// let hm = new HashMap(14)
// hm.put('cards', 'red')
// hm.put('cards1', 'green')
// // console.log(hm.buckets)
// console.log(hm.toString())
// console.log(hm.containsKey('cards'))
// console.log(hm.getSize())
// console.log(hm.hash('rat'))
// console.log(hm.hash('art'))
// console.log(hm.hash('eag'))
