<?php

$xml_path = "test.xml";

// SET SIMPLEXMLELEMENT
$conf = file_get_contents( $xml_path );
$xml = new SimpleXMLElement( $conf );

// GET XML VARS
$environment = (string) $xml->environment;

foreach ( $xml as $key => $value ) {
	
}

// ADD TO XML
$new = $xml->addChild('details');
$new->addChild('UsrInitials', $rs_login[0]["UsrInitials"]);
$new->addChild('Name', $rs_login[0]["Name"]);

$xml->asXml($xml_path);