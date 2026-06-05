function makeid(l) {
  // write your code here

	let listChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcedefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for(let i = 1; i <= l; i++){
		result += listChar.charAt(
			Math.floor(
				Math.random() * listChar.length
			)
		);
	}

	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
