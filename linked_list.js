class Node {
	constructor(value) {
		this.value = value;
		this.nextRef = undefined;
	}
}

class LinkedList {
	constructor() {
		this.head = undefined;
	}

	transverse() {
		while (this.head) {
			console.log(this.head.value);

			this.head = this.head.nextRef;
		}
	}
}

const linkedList = new LinkedList();
const n1 = new Node('amo');
const n2 = new Node('o');
const n3 = new Node('mor');

linkedList.head = n1;
n1.nextRef = n2;
n2.nextRef = n3;

linkedList.transverse()
