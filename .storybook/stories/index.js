import React from "react";
import { storiesOf } from "@storybook/react";

import "../../dist/lemonade.css";

import BgUtility from "./components/utilities/BgUtility/index";
import ColorUtility from "./components/utilities/ColorUtility/index";

storiesOf("Utilities", module)
  .add("Background Utility", () => <BgUtility />)
  .add("Color Utility", () => <ColorUtility />);
