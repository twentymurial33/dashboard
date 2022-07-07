const AWS = require("aws-sdk");
const https = require("https");

var quicksight = new AWS.Service({
  apiConfig: require("./quicksight-2018-04-01.min.json"),
  region: "us-east-1",
});

quicksight.generateEmbedUrlForRegisteredUser(
  {
    AwsAccountId: "567024620811",
    ExperienceConfiguration: {
      Dashboard: {
        InitialDashboardId: "a3a80918-6cce-4a41-b0ae-fb782515df70",
      },
    },
    UserArn: "REGISTERED_USER_ARN",
    AllowedDomains: allowedDomains,
    SessionLifetimeInMinutes: 100,
  },
  function (err, data) {
    console.log("Errors: ");
    console.log(err);
    console.log("Response: ");
    console.log(data);
  }
);
