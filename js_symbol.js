const kFriends = Symbol('friends');

class Friends {
	constructor() {
		this[kFriends] = [];
	}

	add(name) {
		this[kFriends].push(name);
	}

	* [Symbol.iterator]() {
		for (const friend of this[kFriends]) {
			yield friend;
		}
	}
}

const x = new Friends();
x.add('joao');
x.add('tiago');

console.log(Array.from(x))
console.log(x)
