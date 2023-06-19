import AWS from "aws-sdk";
import AthenaExpress from "athena-express";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

let database, sts;

try {
  // AWS CONFIGURATION
  const {
    STORAGE_ENDPOINT = "",
    STORAGE_ACCESS_KEY_ID = "",
    STORAGE_SECRET_ACCESS_KEY = "",
    STORAGE_PACKAGES_BUCKET = "",
    ATHENA_DB = "",
    ATHENA_CATALOG = "",
  } = process.env;

  // AWS CREDENTIALS
  const awsCredentials = {
    region: "us-west-2",
    accessKeyId: STORAGE_ACCESS_KEY_ID,
    secretAccessKey: STORAGE_SECRET_ACCESS_KEY,
  };

  AWS.config.update(awsCredentials);

  // ATHENA EXPRESS CONNECTION
  const athenaExpressConfig = {
    aws: AWS,
    s3: `s3://${STORAGE_PACKAGES_BUCKET}`,
    db: ATHENA_DB,
    catalog: ATHENA_CATALOG,
  }; //configuring athena-express with aws sdk object

  database = new AthenaExpress(athenaExpressConfig);
  sts = new AWS.STS();
} catch (e) {
  console.log("ATHENA CONNECTION ERROR: ", e.message);
  console.log("ATHENA CONNECTION ERROR: ", e.stack);
}

export { database, sts };
