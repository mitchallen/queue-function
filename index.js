

function createQueue(options = {}) {

    let {
        maxSize = 10,
        items = [],
    } = options;

    function getMaxSize() {
        return maxSize;
    }

    function log() {
        console.log(items);
    }

    let isEmpty = () => items.length === 0;
    let isFull = () => items.length >= maxSize;

    function enqueue(element) {
        if (isFull()) {
            console.log("[QUEUE] overflow!");
            return;
        }
        if (Array.isArray(element)) {
            // push array
            element.forEach(el => items.push(el));
        } else {
            // Add to end
            items.push(element);
        }
    }

    function dequeue() {
        if (isEmpty()) {
            console.log("[QUEUE] Underflow!");
            return;
        }
        return items.shift();
    }

    function peek() {
        if (this.isEmpty()) {
            console.log("[QUEUE] Underflow!");
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


let q = createQueue({ maxSize: 100 });

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
