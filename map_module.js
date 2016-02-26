var arrMap = [
	{
		firstName: '_Andrew',
		lastName: '_Gaponik'
	}
];

var funcMap = function(fullName) {
	return fullName.fullName = fullName.firstName + fullName.lastName;
}

module.exports.arrMap = arrMap; 
module.exports.funcMap = funcMap; 