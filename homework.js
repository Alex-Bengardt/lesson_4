for (let i = 1; i < 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(`Число ${i} кратно 3 и 5 одновременно`);
	} else if (i % 3 === 0) {
		console.log(`Число ${i} кратно 3`);
	} else if (i % 5 === 0) {
		console.log(`Число ${i} кратно 5`);
	} else {
		console.log(i);
	}
}

for (i = 1; i < 10; ++i) {
	for (let o = 0; o < 10; ++o) {
		for (let p = 0; p < 10; ++p) {
			let pow = (Math.pow(i, 3) + Math.pow(o, 3) + Math.pow(p, 3));
			let num = (i * 100 + o * 10 + p);
			if (pow == num) {
				console.log(pow);
			}
		}
	}
}



let a = 9;
let b = 7;
let c = 0;

while (a != b) {
	if (a > b) {
		a = a - b;
	} else {
		b = b - a;
	}
}
c = a;
console.log(c);