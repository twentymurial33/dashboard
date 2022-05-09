import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_pHKQVIvJc",
  ClientId: "19k1aa49j9jiikfeo7hl69kf51",
};

export default new CognitoUserPool(poolData);
