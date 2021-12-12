import {makeLogger} from './logger.js';

function makeQueue(options = {}) {

    let {
        verbose = true,
        maxSize = 10,
        items = [],
        name = undefined,
    } = options;

    let logger = makeLogger({verbose, name});

    function getMaxSize() {
        return maxSize;
    }

    let log = () => logger.log(JSON.stringify(items));
    let isEmpty = () => items.length === 0;
    let isFull = () => items.length >= maxSize;

    function enqueue(element) {
        if (isFull()) {
            log("overflow!");
        } else if (Array.isArray(element)) {
            // push array
            element.forEach(el => items.push(el));
        } else {
            // Add to end
            items.push(element);
        }
    }

    function dequeue() {
        if (isEmpty()) {
            log("Underflow!");
            return;
        }
        return items.shift();
    }

    function peek() {
        if (this.isEmpty()) {
            log("[QUEUE] Underflow!");
            return;
        }
        return items[0];
    }

    function clear() {
        items = [];
    }

    return {
        getMaxSize,
        log,
        isEmpty,
        isFull,
        enqueue,
        dequeue,
        peek,
        clear,
    }
};


let q = makeQueue({ 
    maxSize: 100,
    name: 'Q1', 
});

q.enqueue('Alpha');
q.enqueue('Beta');
q.enqueue('Gamma');
q.enqueue(['One', 'Two'])
q.log();
while (!q.isEmpty()) {
    let item = q.dequeue();
    console.log(item);
    q.log();
}
