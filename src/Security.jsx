// import React from "react";
// import * as QuickSightEmbedding from "amazon-quicksight-embedding-sdk";

// function onDashboardLoad(payload) {
//   console.log("Do something when the dashboard is fully loaded.");
// }

// function onError(payload) {
//   console.log("Do something when the dashboard fails loading");
// }

// const Security = () => {
//   const dashboardRef = React.createRef();

//   const embed = () => {
//     const options = {
//       url:
//         "https://us-east-1.quicksight.aws.amazon.com/embed/83a3dee265624d7da1ee7da4c7af3a07/dashboards/78a8e352-a998-4705-8e16-94d5f9712491?isauthcode=true&identityprovider=quicksight&code=AYABeBl08g692aDnILAR80VzoYgAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4EeOLgrUr51nsHbjCawUUKjOqEm284CNxqOjvtm6TGiwB1u8YZsEIRPRDCL1gp55IMAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDHlJxDqUaXXH06QOwQIBEIA7FFosfr-ul1cXbTfqEwkNZoiHVxigKsSx7rY7qjnnf2TdgwANaT4VSrW_wAxOMEVZ1DosGT1rzsy1s7cCAAAAAAwAABAAAAAAAAAAAAAAAAAA39PdAgzPPWSDojf0NQzAn_____8AAAABAAAAAAAAAAAAAAABAAAAnr7h1NphyhZ3Qsc8GmCHtzTseLWpfuwpu5815pZ2VJqxFWsRTSrU_awhpci4YyZBhcg4m4wRXY_m4RA_7RoVYExgwuLTrFx7DtvBI41zCGkQh8MEIfp-QJMyrezdjaK2MQqJXnAlmB-8xWUltGNx3HuE1Iec-hl1HLzvoMHLKi0lTcOUDyePQQqJgKEQQboD5bhPFUTMZQTRQFnyS51EQrcCqIH-Y1Xx9A6Kj27dMA%3D%3D",
//       container: dashboardRef.current,
//       scrolling: "no",
//       height: "700px",
//       width: "1000px",
//     };
//     QuickSightEmbedding.embedDashboard(options);
//   };

//   React.useEffect(() => {
//     embed();
//   });

//   return <div ref={dashboardRef} />;
// };

// export default Security;

import * as QuickSightEmbedding from "amazon-quicksight-embedding-sdk";
import { useEffect } from "react";

export default function Security() {
  useEffect(() => {
    embedDashboard();
  }, []);

  function embedDashboard() {
    var containerDiv = document.getElementById("embeddingContainer");
    var options = {
      url:
        "https://us-east-1.quicksight.aws.amazon.com/embed/83a3dee265624d7da1ee7da4c7af3a07/dashboards/78a8e352-a998-4705-8e16-94d5f9712491?isauthcode=true&identityprovider=quicksight&code=AYABeBl08g692aDnILAR80VzoYgAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4EeOLgrUr51nsHbjCawUUKjOqEm284CNxqOjvtm6TGiwB1u8YZsEIRPRDCL1gp55IMAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDHlJxDqUaXXH06QOwQIBEIA7FFosfr-ul1cXbTfqEwkNZoiHVxigKsSx7rY7qjnnf2TdgwANaT4VSrW_wAxOMEVZ1DosGT1rzsy1s7cCAAAAAAwAABAAAAAAAAAAAAAAAAAA39PdAgzPPWSDojf0NQzAn_____8AAAABAAAAAAAAAAAAAAABAAAAnr7h1NphyhZ3Qsc8GmCHtzTseLWpfuwpu5815pZ2VJqxFWsRTSrU_awhpci4YyZBhcg4m4wRXY_m4RA_7RoVYExgwuLTrFx7DtvBI41zCGkQh8MEIfp-QJMyrezdjaK2MQqJXnAlmB-8xWUltGNx3HuE1Iec-hl1HLzvoMHLKi0lTcOUDyePQQqJgKEQQboD5bhPFUTMZQTRQFnyS51EQrcCqIH-Y1Xx9A6Kj27dMA%3D%3D",
      container: containerDiv,
      parameters: {
        country: "United States",
      },
      scrolling: "no",
      height: "700px",
      width: "1000px",
      locale: "en-US",
      footerPaddingEnabled: true,
    };
    const dashboard = QuickSightEmbedding.embedDashboard(options);
    console.log(dashboard);
    dashboard.on("error", (e) => {
      console.log(e);
    });
    dashboard.on("load", (l) => {
      console.log("asdasdasdasdasda");
    });
  }

  return (
    <div className="App">
      <div id="embeddingContainer" />
    </div>
  );
}
