import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_8IQDUwli2",
  ClientId: "6qr817061su0l7a2jckdq3ae4g",
};

export default new CognitoUserPool(poolData);