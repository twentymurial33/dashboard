import { Amplify } from "aws-amplify";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

Amplify.configure({
  Auth: {
    identityPoolId: "us-east-1_pHKQVIvJc",
    region: "us-east-1",
  },
  Interactions: {
    bots: {
      BookTrip: {
        name: "BookTrip",
        alias: "TSTALIASID",
        region: "us-east-1",
      },
    },
  },
});

function Chatbot() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Chatbot;
