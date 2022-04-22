const Queue = () => {
  const data = [];

  const add = (value) => {
    data.unshift(value);
  };

  const remove = () => {
    if (data.length === 0) {
      return -1;
    }

    const value = data[data.length - 1];
    data.splice(data.length - 1, 1);
    return value;
  };

  const print = () => console.log(data);

  return {
    add,
    remove,
    print,
  };
};
const queue = Queue();

//add fila
addQueue = () => {
  for (index = 1; index < 5; index += 1) {
    queue.add(index);
  }
};
addQueue();
queue.print();

//removendo item da fila
console.log(queue.remove());
queue.print();
