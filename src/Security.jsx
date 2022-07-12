import * as QuickSightEmbedding from "amazon-quicksight-embedding-sdk";
import React, { useLayoutEffect } from "react";

var dashboard;
function onDashboardLoad(payload) {
  console.log("Do something when the dashboard is fully loaded.");
}

function onError(payload) {
  console.log("Do something when the dashboard fails loading");
}

function Security() {
  useLayoutEffect(() => {
    var containerDiv = document.getElementById("dashboardContainer");
    console.log(containerDiv);
    var options = {
      url:
        "https://us-east-1.quicksight.aws.amazon.com/embed/01971f3613b44e78866dadc28ce9441b/dashboards/78a8e352-a998-4705-8e16-94d5f9712491?isauthcode=true&identityprovider=quicksight&code=AYABeByW8mWOjU3pj41qYwJgfsYAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4EeOLgrUr51nsHbjCawUUKjOqEm284CNxqOjvtm6TGiwByX_WP4t2t_BpAc5dKgXvFgAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDP9TNWowYyBeBpUEZgIBEIA7YHf2XUZMXE_6TuVWoe1FBGH9slnHYiwWpzi96njT21PCBsY9EivJ_lMoi1kcvEFcOlupQ6xEZbIAbUsCAAAAAAwAABAAAAAAAAAAAAAAAAAAOrVV9UaSQ_5oeVtfq5nwCf____8AAAABAAAAAAAAAAAAAAABAAAAniHk3S26G7Vevh6Qt1c0CgVEiOlpGjtrv3YJrD5by5D8BiYOngTRyll6kQnz5SVAtHVyS9WBU0Iyq2Ch5EyLaxTNRL0lW3PB7uTaI9qyu0gHT8KCnV81nzYPnQ3VIVS-anXPl4hnVhodhamOkD0bZOA2yD-w9vOJy33Z3TDi0fLt5o7DXYv3qA5EcXfOPvXdnefT1aCjlyrTqvo1xVlVBw7Hxit6fTYhW8BnjmDqpw%3D%3D",
      container: containerDiv,
      parameters: {
        country: "United States",
      },
      scrolling: "no",
      height: "700px",
      width: "1000px",
    };
    dashboard = QuickSightEmbedding.embedDashboard(options);
    dashboard.on("error", onError);
    dashboard.on("load", onDashboardLoad);
  }, []);
  return <div id="dashboardContainer" />;
}

export default Security;
