//-> STORYBOOK | A REACT BASED PLAYGROUND

import * as React from "react";
import * as Storybook from "@storybook/react";

import "../../dist/lemonade.css";

Storybook.storiesOf("Standard Package|Reset", module)
  .add("Introduction", () => (
      <div className="lemonade">
        hi
      </div>
  ));