import AWS from "aws-sdk";
import AthenaExpress from "athena-express";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

// AWS CONFIGURATION
const {
  STORAGE_ENDPOINT,
  STORAGE_ACCESS_KEY_ID,
  STORAGE_SECRET_ACCESS_KEY,
  STORAGE_PACKAGES_BUCKET,
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
  db: "default",
  catalog: "jupiter_dev",
}; //configuring athena-express with aws sdk object

const database = new AthenaExpress(athenaExpressConfig);
const sts = new AWS.STS();

export { database, sts };
