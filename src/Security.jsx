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
        "https://us-east-1.quicksight.aws.amazon.com/embed/bb3dd96ceec24e4eb6f861c1a4c25419/dashboards/78a8e352-a998-4705-8e16-94d5f9712491?code=AYABeB91MmH6kZKjRBr5oZU-0GUAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4EeOLgrUr51nsHbjCawUUKjOqEm284CNxqOjvtm6TGiwBI306xaNuS6X-Mre5a0hLOQAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDHUyUsius8FqzRDfmgIBEIA7824NTbb61CwzDrThJ5PPrOI6gUBaAkIIMD37HdGQE7XOKAr1YcthrTh1OpXc4mW2jfZxbEydibUVoAMCAAAAAAwAABAAAAAAAAAAAAAAAAAACocmaXuiSgrjnUeNijMrx_____8AAAABAAAAAAAAAAAAAAABAAAA5YDaRRkw6K0ntg2HDVw_g2b7jifZcP1wDrc0FZFmmscpV4hlhFB6UlxWIj1klrj-w85EALJoBBNs3d--gbaQTfkvWiS0QYNojtapC8jYw8GP1eialudlMsjjBDeixGZwJyVaiNDWircT-BUW_56lCFZtB51xKr99Gq4XPSdL2mPHQUBWvKGV-GkMBIvZ9BYSYsnbSyt1BAZjimA796nBwD6ByrI0U-nKapVbkbBNHRMOx0JMtCnH32R8vLDJ-2eb6VtAalmCu_EJp32MCMjFd3w5HefqVkv_KXJfNEdTztw3uQFa_0CtcTc_60pbe5iyYPF-CqRf&identityprovider=quicksight&isauthcode=true&undoRedoDisabled=true&resetDisabled=true",
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
