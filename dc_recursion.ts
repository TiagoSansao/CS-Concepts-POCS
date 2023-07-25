function add(numbers: number[]): number {
	 console.log(numbers);

	if (!numbers.length) throw Error('Missing args');

	if (numbers.length === 1) return numbers[0];
	return numbers.pop()! + add(numbers);
}

const response: number = add([4, 3, 1]);
console.log(response);

