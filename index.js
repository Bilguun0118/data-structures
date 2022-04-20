class Stack {
    constructor() {
        this.top = null;
    }

    // add new element to stack
    push(node) {
        node.prev = this.top;
        this.top = node;
    }

    // remove top element
    pop() {
        const removingElement = this.top;
        const newTop = removingElement.prev;
        removingElement.prev = null;
        this.top = newTop;
        return removingElement;
    }

    // return top;
    peek() {
        return this.top;
    }

    // checks stack is empty
    isEmpty() {
        return this.top === null;
    }

    // print stack from bottom to top
    print() {
        const printValue = (node) => {
            if (node.prev) {
                printValue(node.prev);
            }

            console.log(node.value);
        }

        printValue(this.top);
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
    }
}