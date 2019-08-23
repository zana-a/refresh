import React from "react";
import { storiesOf } from "@storybook/react";

import "../../dist/lemonade.css";

import BgUtility from "./components/utilities/BgUtility/index";
import ColorUtility from "./components/utilities/ColorUtility/index";
import BorderUtility from "./components/utilities/BorderUtility/index";
import FloatUtility from "./components/utilities/FloatUtility";
import PositionUtility from "./components/utilities/PositionUtility";
import DisplayUtility from "./components/utilities/DisplayUtility";
import SpacingUtility from "./components/utilities/SpacingUtility";
import FlexUtility from "./components/utilities/FlexUtility";

import Buttons from "./components/elements/Buttons";
import Inputs from "./components/elements/Inputs";

import InputGroup from "./components/components/InputGroup";

import LoginPage from "./components/examples/LoginPage";

storiesOf("Utilities", module)
  .add("Background Utility", () => <BgUtility />)
  .add("Color Utility", () => <ColorUtility />)
  .add("Spacing Utility", () => <SpacingUtility />)
  .add("Border Utility", () => <BorderUtility />)
  .add("Float Utility", () => <FloatUtility />)
  .add("Display Utility", () => <DisplayUtility />)
  .add("Position Utility", () => <PositionUtility />)
  .add("Flex Utility", () => <FlexUtility />);

storiesOf("Elements", module)
  .add("Buttons", () => <Buttons />)
  .add("Inputs", () => <Inputs />);

storiesOf("Components", module).add("InputGroup", () => <InputGroup />);

storiesOf("Examples", module).add("Login Page", () => <LoginPage />);
