import boto3
import StringIO
import zipfile

def lambda_handler(event, context):
    s3 = boto3.resource('s3')
    portfolio_bucket = s3.Bucket('portfolio.harshsondhi.info')
    build_bucket=s3.Bucket('portfoliobuild.harshsondhi.info')
    portfolio_zip = StringIO.StringIO()
    build_bucket.download_fileobj('portfoliobuild.zip',portfolio_zip)
    with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
            obj=myzip.open(nm)
            portfolio_bucket.upload_fileobj(obj,nm)
            portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
    print "Job Done!!!!"
    return 'Hello from Lambda'
