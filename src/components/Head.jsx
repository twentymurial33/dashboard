import { Image, useTheme } from "@aws-amplify/ui-react";
import background from "../amazon.jpg";

export function Head() {
  const { tokens } = useTheme();

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Image src="../amazon.jpg" width="100%" height="100%" objectFit="cover" />
    </div>
    // <Image
    //   alt="logo"
    //   src={{
    //     backgroundImage: `url(${background})`,
    //   }}
    //   padding={tokens.space.medium}
    // />
  );
}
