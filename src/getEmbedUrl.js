global.fetch = require("node-fetch");
const AWS = require("aws-sdk");

function generateEmbedUrlForRegisteredUser(
  accountId,
  dashboardId,
  openIdToken, // Cognito-based token
  userArn, // registered user arn
  roleArn, // IAM user role to use for embedding
  sessionName, // Session name for the roleArn assume role
  getEmbedUrlCallback, // GetEmbedUrl success callback method
  errorCallback // GetEmbedUrl error callback method
) {
  const stsClient = new AWS.STS();
  let stsParams = {
    RoleSessionName: sessionName,
    WebIdentityToken: openIdToken,
    RoleArn: roleArn,
  };

  stsClient.assumeRoleWithWebIdentity(stsParams, function (err, data) {
    if (err) {
      console.log("Error assuming role");
      console.log(err, err.stack);
      errorCallback(err);
    } else {
      const getDashboardParams = {
        AwsAccountId: accountId,
        ExperienceConfiguration: {
          QuickSightConsole: {
            InitialPath: "/start",
          },
        },
        UserArn: userArn,
        SessionLifetimeInMinutes: 600,
      };

      const quicksightGetDashboard = new AWS.QuickSight({
        region: process.env.AWS_REGION,
        credentials: {
          accessKeyId: data.Credentials.AccessKeyId,
          secretAccessKey: data.Credentials.SecretAccessKey,
          sessionToken: data.Credentials.SessionToken,
          expiration: data.Credentials.Expiration,
        },
      });

      quicksightGetDashboard.generateEmbedUrlForRegisteredUser(
        getDashboardParams,
        function (err, data) {
          if (err) {
            console.log(err, err.stack);
            errorCallback(err);
          } else {
            const result = {
              statusCode: 200,
              headers: {
                "Access-Control-Allow-Origin": "*", // Use your website domain to secure access to GetEmbedUrl API
                "Access-Control-Allow-Headers": "Content-Type",
              },
              body: JSON.stringify(data),
              isBase64Encoded: false,
            };
            getEmbedUrlCallback(result);
          }
        }
      );
    }
  });
}

export default generateEmbedUrlForRegisteredUser;
