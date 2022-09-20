class Stack {
    constructor() {
        this.itemStacks = [];
    }

    top() {
        return this.itemStacks[this.itemStacks.length - 1];
    }

    add(element) {
        return this.itemStacks.push(element);
    }

    remove() {
        if (this.itemStacks.length > 0) {
            return this.itemStacks.pop();
        }
    }

    isEmpty() {
       if(this.itemStacks.length == 0){
        return ("yes");
       }
       else{
        return ("no");
       }
    }

    size() {
        return this.itemStacks.length;
    }
}

let newStack = new Stack();
newStack.add(5);
newStack.add(9);
newStack.add(2);
newStack.add(8);
newStack.add(3);
newStack.add(2);
newStack.add(8);
newStack.add(0);
newStack.add(1);
console.log("The stack:"+newStack.itemStacks);

console.log("The top element(last ement added to the stack):"+newStack.top());

newStack.remove();
this.items = [5];
console.log(newStack.itemStacks);

console.log("Is the stack empty :"+newStack.isEmpty());

console.log("The size of the stack:"+newStack.size());

const removeOdd = (myArray) => {
    for (let j = 0; j < newStack.size(); j++) {
        if (myArray[j] % 2 === 1) {
            myArray.splice(j,1);
            break;
        }
    }
    return myArray;
};
removeOddOutput = removeOdd(newStack.itemStacks);
console.log("the output stack after removing odd numbers: "+removeOddOutput);

const duplicateStack = (myStack) => {
    let duplicate = new Stack();
    for (let i = 0; i < newStack.size(); i++) {
        duplicate.add(myStack[i]);
    }
    return duplicate;
};
duplicateArray = duplicateStack(newStack.itemStacks);
console.log("The duplicate array"+duplicateArray);
