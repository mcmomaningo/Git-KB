<?php

try {
	$conn = new PDO('mysql:host=localhost; dbname=dbname', 'php-user', 'secret', $options);
} catch (PDOException $e) {
	echo "Could not connect to database";
}

# perform query
$stmt = $conn->query( 'SELECT * FROM table' );

# display results
while( $row = $stmt->fetch() ) {
	echo $row['name']. " " . $row['chef']; 
}

# fetch array result
$result = $stmt->fetch( PDO::FETCH_ASSOC );
print_r( $result );

PDO::FETCH_ASSOC # array result
PDO::FETCH_NUM # array with numeric keys
PDO::FETCH_BOTH # combined FETCH_ASSOC and FETCH_NUM
PDO::FETCH_CLASS # object returned