import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";

import "../../dist/lemonade.css";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Hello", module).add("Dumbo", () => <span>You dumbo!</span>);
