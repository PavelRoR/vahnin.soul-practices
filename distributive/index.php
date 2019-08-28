<?php $dates = array(strtotime("6 September 2019"),strtotime("7 September 2019"));
$currDate = strtotime("now");
if ($currDate < $dates[0]) {
	header('location: ');
}
elseif (($currDate >= $dates[0]) && ($currDate < $dates[1])) {
	header('location: ');
}
else {
	header('location: https:/vahnin.mastervision.su/soul-practics/');
}
?>