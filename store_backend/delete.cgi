use CGI;
use DBI;
use File::Basename;

my $q = new CGI;
my $sku = $q->param('sku');

my $host = 'opatija.sdsu.edu';
my $port = '3306';
my $database = 'jadrn047';
my $username = 'jadrn047';
my $password = 'socket';


my $database_source = "dbi:mysql:$database:$host:$port";
my $dbh = DBI->connect($database_source, $username, $password)
	or die "Cannot connect to DB";
	
my $sth = $dbh->prepare("DELETE from product where sku = '$sku'");

 #my $sth = $dbh->prepare("INSERT into product values ('acr','1','2','fhjd','nndn','mdm','123.33','45.25','5','sdjf')");

$sth->execute();
my $number_of_rows = $sth->rows;
$sth->finish();
$dbh->disconnect();
print "content-type: text/html\n\n";
if($number_of_rows != 0) {
	print "DELETED";
	}
else {
	print "(sku)";
	print "NOT DELETED";
	}