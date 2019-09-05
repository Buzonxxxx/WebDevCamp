#Note

- BIG O of HASH TABLES
  Insert: O(1)
  Deletion: O(1)
  Access: O(1)

- Hash tables are collections of key-value pairs

- Hash tables can find values quickly given a key

- Hash tables can add new key-values quickly

- Hash tables store data in a large array, and work by hashing the keys

- A good hash should be fast, distribute keys uniformly, and be deterministic

- Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
  - `Separate chaining`: 兩個陣列放在一起 (better)
  With separate chaining, at each index in our array we store values using a more sophisticated data structure. (e.g. an array or a linked list).

  - `Linear probing`: 往下找空位, 有map長度限制
  With linear probing, when we find a collision, we search through the array to find the next empty slot.

- When in doubt, use a hash table!

pros use Map rather than obj: 
1. Anything can be keys
2. map is iterable
3. easy to get map size
4. easy to add/remove value in map

#When to use?
- You should always use a Map when you need a key-value collection

- 可以透過key找value, 不能透過value找key

- Reference:
  - https://en.wikipedia.org/wiki/Associative_array
  
  - https://blog.kdchang.cc/2016/09/23/javascript-data-structure-algorithm-dictionary-hash-table/
