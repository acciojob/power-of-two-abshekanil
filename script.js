const isPowerOfTwo = (number) => {
  //your code here
	if(number === 0 || number < 0)
	{
		return false;
	}

	return Math.log2(number) % 1 === 0;
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
