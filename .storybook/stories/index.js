import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";

import Colors from "./components/Base/Colors";
import Headings from "./components/Base/Headings";
import Paragraphs from "./components/Base/Paragraphs";
import Buttons from "./components/Elements/Buttons";

import "../../dist/lemonade.css";

storiesOf("Base", module)
  .add("Colors", () => <Colors />)
  .add("Headings", () => <Headings />)
  .add("Paragraphs", () => <Paragraphs />);
storiesOf("Elements", module).add("Buttons", () => <Buttons />);
