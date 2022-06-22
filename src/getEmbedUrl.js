global.fetch = require("node-fetch");
const AWS = require("aws-sdk");

function generateEmbedUrlForAnonymousUser(
  accountId, // YOUR AWS ACCOUNT ID
  initialDashboardId, // DASHBOARD ID TO WHICH THE CONSTRUCTED URL POINTS
  quicksightNamespace, // VALID NAMESPACE WHERE YOU WANT TO DO NOAUTH EMBEDDING
  authorizedResourceArns, // DASHBOARD ARN LIST TO EMBED
  sessionTags, // SESSION TAGS USED FOR ROW-LEVEL SECURITY
  generateEmbedUrlForAnonymousUserCallback, // GENERATEEMBEDURLFORANONYMOUSUSER SUCCESS CALLBACK METHOD
  errorCallback // GENERATEEMBEDURLFORANONYMOUSUSER ERROR CALLBACK METHOD
) {
  const experienceConfiguration = {
    Dashboard: {
      InitialDashboardId: initialDashboardId,
    },
  };

  const generateEmbedUrlForAnonymousUserParams = {
    AwsAccountId: accountId,
    Namespace: quicksightNamespace,
    AuthorizedResourceArns: authorizedResourceArns,
    ExperienceConfiguration: experienceConfiguration,
    SessionTags: sessionTags,
    SessionLifetimeInMinutes: 600,
  };

  const quicksightClient = new AWS.QuickSight({
    region: process.env.AWS_REGION,
  });

  quicksightClient.generateEmbedUrlForAnonymousUser(
    generateEmbedUrlForAnonymousUserParams,
    function (err, data) {
      if (err) {
        console.log(err, err.stack);
        errorCallback(err);
      } else {
        const result = {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*", // USE YOUR WEBSITE DOMAIN TO SECURE ACCESS TO THIS API
            "Access-Control-Allow-Headers": "Content-Type",
          },
          body: JSON.stringify(data),
          isBase64Encoded: false,
        };
        generateEmbedUrlForAnonymousUserCallback(result);
      }
    }
  );
}
