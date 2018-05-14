use CGI;
use DBI;
use File::Basename;

my $q = new CGI;
my $sku = $q->param('sku');
my $cat = $q->param('cat');
my $ven = $q->param('ven');
my $ven_model = $q->param('ven_model');
my $desc = $q->param('desc');
my $feature = $q->param('feature');
my $cost = $q->param('cost');
my $retail = $q->param('retail');
my $quant = $q->param('quant');
my $filename = $q->param("product_image");


my $host = 'opatija.sdsu.edu';
my $port = '3306';
my $database = 'jadrn047';
my $username = 'jadrn047';
my $password = 'socket';

unless($filename) {
    die "There was a problem uploading the image; ".
        "it's probably too big.";
    }

my ($name, $path, $extension) = fileparse($filename, qr/\..+$/);
#my @extension = split('\.',$filename);
$filename = $sku.$extension;
$filename =~ s/ //; #remove any spaces




my $database_source = "dbi:mysql:$database:$host:$port";
my $dbh = DBI->connect($database_source, $username, $password)
	or die "Cannot connect to DB";
	
my $sth = $dbh->prepare("INSERT into product VALUES ('$sku','$cat','$ven','$ven_model','$desc','$feature','$cost','$retail','$quant','$filename')");

 #my $sth = $dbh->prepare("INSERT into product values ('acr','1','2','fhjd','nndn','mdm','123.33','45.25','5','sdjf')");

$sth->execute();
my $number_of_rows = $sth->rows;
$sth->finish();
$dbh->disconnect();
print "content-type: text/html\n\n";
if($number_of_rows != 0) {
	print "INSERTED";
	}
else {
	print "(sku)";
	print "$cat";
	print "NOT INSERTED";
	}