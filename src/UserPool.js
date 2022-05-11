import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_su3dyjyJJ",
  ClientId: "5oicbepab32fn9bnroidi0h4cq",
};

export default new CognitoUserPool(poolData);
