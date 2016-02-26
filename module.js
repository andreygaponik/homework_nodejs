var arr = [
    {
        firstName: 'Andrew',
        lastName: 'Gaponik'
    }, 
    {
        firstName: 'Dima',
        lastName: 'Paloskin'
    }
];

var showFullName = function(name) {
	console.log(name.firstName + ' ' + name.lastName);
};


module.exports.arr = arr;
module.exports.showFullName = showFullName;