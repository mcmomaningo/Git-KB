
// LIST / DICTIONARY
var dict = new Object();
// OR
var dict = []

for ( i in dict ) {
	// Key
	console.log(i);
	// Value
	console.log( dict[i] );
	// If dict has property
	console.log(keywords.hasOwnProperty(i));
}

// Add key or value to list
dict.push( value );

// Create key and assign value
dict["key"] = value;

var stringJSON = JSON.stringify( dict );