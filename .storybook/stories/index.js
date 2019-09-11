import React from "react";
import { storiesOf } from "@storybook/react";

import "../../dist/lemonade.css";

function ResetModule() {
  return <p>Hello</p>;
}

storiesOf("Standard Package", module).add("Reset", () => <ResetModule />);
