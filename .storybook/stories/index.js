import React from "react";
import { storiesOf } from "@storybook/react";

import "../../dist/lemonade.css";

import BgUtility from "./components/utilities/BgUtility/index";
import ColorUtility from "./components/utilities/ColorUtility/index";
import BorderUtility from "./components/utilities/BorderUtility/index";
import FloatUtility from "./components/utilities/FloatUtility";
import PositionUtility from "./components/utilities/PositionUtility";

storiesOf("Utilities", module)
  .add("Background Utility", () => <BgUtility />)
  .add("Color Utility", () => <ColorUtility />)
  .add("Border Utility", () => <BorderUtility />)
  .add("Float Utility", () => <FloatUtility />)
  .add("Position Utility", () => <PositionUtility />);
