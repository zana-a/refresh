//-> STORYBOOK | A REACT BASED PLAYGROUND

import * as React from "react";
import * as Storybook from "@storybook/react";

import "../../dist/lemonade.css";

import ResetIntroduction from "./StandardPackage/Reset/ResetIntroduction";
import Normalize from "./StandardPackage/Reset/Normalize";

import BaseIntroduction from "./StandardPackage/Base/BaseIntroduction";
import Heading from "./StandardPackage/Base/Heading";

Storybook.storiesOf("Standard Package|Reset", module)
  .add("Introduction", () => <ResetIntroduction />)
  .add("Normalize", () => <Normalize />);

Storybook.storiesOf("Standard Package|Base", module)
  .add("Introduction", () => <BaseIntroduction />)
  .add("Heading", () => <Heading />);

Storybook.storiesOf("Lab|Default", module).add("Test Lab", () => {
  return (
    <div>
      <div className='Content'>
        <h1 style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
          Royal rumble as the Queen decides to declare prince William as King!
        </h1>
        <img src='https://placeimg.com/900/300/people' />
      </div>

      <div className='Content' style={{ width: "60%", margin: "0 auto" }}>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          efficitur sed nunc eu porttitor. Fusce facilisis tortor eu fermentum
          aliquet. In vel vehicula odio.
        </h3>
        <h2>Charles arrested?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          efficitur sed nunc eu porttitor. Fusce facilisis tortor eu fermentum
          aliquet. In vel vehicula odio, id lacinia nisi. Cras pharetra, felis
          lobortis cursus ultrices, massa nisi congue risus, nec fringilla justo
          sapien at felis.
        </p>
        <img src='https://placeimg.com/500/300/people' />
      </div>
    </div>
  );
});
