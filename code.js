class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    dfs(values=[]) {
        if (this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.dfs(values);
        }
        return values;
    }

    bfs(tree, values = []) {
        const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
        const node = tree.root;
        queue.enqueue(node);
        while (queue.length) {
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value); // add that value from the queue to an array

            if (node.left) {
                queue.enqueue(node.left); //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right); // add right child to the queue
            }
        }

        return values;
    }
}

function binarySearch(array, value, start, end, tries=1) {
    array.sort();
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return `After ${tries} tries, it's been determined that ${value} is not in the array.`;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];


    console.log(index, tries);
    if (item == value) {
        tries++;
        return `${value} found in array after ${tries} tries.`;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end, tries + 1);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1, tries + 1);
    }
};



function indexOf(array, value) {
    let tries = 0;
    for (let i = 0; i < array.length; i++) {
        tries++;
        if (array[i] == value) {
            return `${value} was found after ${tries} tries.`;
        }
    }
    return `After ${tries} tries it was determined that ${value} is not in the array.`
};

const arrayOne = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
console.log(binarySearch(arrayOne, 13, 1, 98))

function find_book(library, dewey, title) {
	var start = 0, end = library.length;
	while (start < end) {
		var middle = Math.floor((start + end) / 2);
		if (library[middle].dewey == dewey) {
			//Found the right code. Great! Did we find the book?
			if (library[middle].title == title) return library[middle];
			//Nope. Linearly search around for the book we want.
			for (var idx = middle + 1; library[idx].dewey == dewey; ++idx)
				if (library[idx].title == title) return library[idx];
			for (var idx = middle - 1; library[idx].dewey == dewey; --idx)
				if (library[idx].title == title) return library[idx];
			//Well, we found the right section, but the book isn't
			//here. Guess someone else has borrowed it. Sorry!
			return null;
		}
		if (library[middle].dewey < dewey)
			start = middle + 1;
		else
			end = middle - 1;
	}
	//We don't have anything of that Dewey code, so that book isn't
	//available. Sorry! Try another library.
	return null;
}