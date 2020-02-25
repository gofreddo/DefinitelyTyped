import createRBTree = require('functional-red-black-tree');

const t1 = createRBTree<number, string>();

// Insert some items into the tree
const t2 = t1.insert(1, '1');
const t3 = t2.insert(2, '2');
const t4 = t3.insert(4, '4');
const t5 = t4.insert(7, '7');
const t6 = t5.insert(9, '9');
const t7 = t6.insert(11, '11');
const a = t7.gt(0).value;
console.log(a);
console.log(t2.values);
console.log(t4.values);
