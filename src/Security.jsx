import React from "react";
// import Layout from "./components/Layout";
import * as QuickSightEmbedding from "amazon-quicksight-embedding-sdk";

function onDashboardLoad(payload) {
  console.log("Do something when the dashboard is fully loaded.");
}

function onError(payload) {
  console.log("Do something when the dashboard fails loading");
}

const Security = () => {
  const dashboardRef = React.createRef();

  const embed = () => {
    const options = {
      url:
        "https://us-east-1.quicksight.aws.amazon.com/embed/bfc31ae446794336a7d305b01d349b7c/dashboards/78a8e352-a998-4705-8e16-94d5f9712491?isauthcode=true&identityprovider=quicksight&code=AYABeKHfKeCUl-FvfD9-wiVgjWIAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4EeOLgrUr51nsHbjCawUUKjOqEm284CNxqOjvtm6TGiwBsyCd0eaX7CLDfq3zQNfr4AAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDE90acJ9H8jPWzrHeAIBEIA7vS-lLUY2JmKjH5v35fmrZ9qND5v5QrxvR6N3qNIdLLGWwXI_PjUc3D4I0r4i4WGPaEeM1WEod-jmewkCAAAAAAwAABAAAAAAAAAAAAAAAAAA1fc8ZYySiszqVTxrT0hD0_____8AAAABAAAAAAAAAAAAAAABAAAAnurIY7-jZlFEsRMsweGoJt3MS5ZSt0EbOGVGHw5s1k2a7_E2RVL3GmXzLI7iINoztVx4SWYp1lj405w5Gm3Xwfbe3Hh-B9DLjjZxlFrFiA9GuiVe6cawDJjWKVjziG3uyh1ThHBEi08sc_NUKZT12RnbiNwh4FckzstemJeAkXc_z3OrWRN24VLegUoj_ErsXyZahyf3F2s9O8ItWZAspj6aJlqLi2jYkWHh8h2c0Q%3D%3D",
      container: dashboardRef.current,
      scrolling: "no",
      height: "700px",
      width: "1000px",
      locale: "en-US",
      footerPaddingEnabled: true,
    };
    QuickSightEmbedding.embedDashboard(options);
  };

  React.useEffect(() => {
    embed();
  });

  return <div ref={dashboardRef} />;
};

export default Security;
