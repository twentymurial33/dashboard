import { Image, useTheme } from "@aws-amplify/ui-react";
import background from "../assets/amazon.jpg";

export function Head() {
  const { tokens } = useTheme();

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Image
        src="../assets/amazon.jpg"
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </div>
  );
}
