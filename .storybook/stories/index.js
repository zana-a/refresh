import React from "react";
import { storiesOf } from "@storybook/react";

import "../../dist/lemonade.css";

import BgUtility from "./components/utilities/BgUtility/index";

storiesOf("Utilities", module).add("Background Utility", () => <BgUtility />);
