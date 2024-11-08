export default class HashMap {
  constructor(size = 16) {
    this.buckets = new Array(size).fill(null).map(() => []);
    this.size = 0;
  }

  static hash(key, bucketCount = 16) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % bucketCount;
    }
    return hashCode;
  }

  set(key, value) {
    const hashKey = HashMap.hash(key, this.buckets.length);
    const bucket = this.buckets[hashKey];

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];
      if (storedKey === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size += 1;
  }

  get(key) {
    const hashKey = HashMap.hash(key, this.buckets.length);
    const bucket = this.buckets[hashKey];

    for (const [storedKey, storedValue] of bucket) {
      if (storedKey === key) {
        return storedValue;
      }
    }
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const hashKey = HashMap.hash(key, this.buckets.length);
    const bucket = this.buckets[hashKey];

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey] = bucket[i];
      if (storedKey === key) {
        bucket.splice(i, 1);
        this.size -= 1;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
    this.size = 0;
  }

  keys() {
    const keysArray = [];
    for (const bucket of this.buckets) {
      for (const [key] of bucket) {
        keysArray.push(key);
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (const bucket of this.buckets) {
      for (const [, value] of bucket) {
        valuesArray.push(value);
      }
    }
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        entriesArray.push(entry);
      }
    }
    return entriesArray;
  }
}
