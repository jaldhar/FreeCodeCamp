// Return Largest Numbers in Arrays

function largestOfFour(arr){
	return arr.map(function(elem){
		return elem.sort(function(a, b){
			return a < b;
		})[0];		
	});
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);