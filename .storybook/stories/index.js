import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./components/Button";

import "../../dist/lemonade.css";

storiesOf("Button", module).add("Base", () => <Button />);
