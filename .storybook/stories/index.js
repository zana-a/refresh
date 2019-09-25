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
      <div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-default">Hello, World!</button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-primary">Hello, World!</button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-success">Hello, World!</button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-warning">Hello, World!</button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-danger">Hello, World!</button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-default btn-outline">Hello, World!</button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-success btn-outline">Hello, World!</button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-warning btn-outline">Hello, World!</button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-danger btn-outline">Hello, World!</button>
        </div>
      </div>
      <div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-default btn-rounded">Hello, World!</button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-primary btn-rounded">Hello, World!</button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-success btn-rounded">Hello, World!</button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-warning btn-rounded">Hello, World!</button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-danger btn-rounded">Hello, World!</button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-default btn-outline btn-rounded">
            Hello, World!
          </button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-success btn-outline btn-rounded">
            Hello, World!
          </button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-warning btn-outline btn-rounded">
            Hello, World!
          </button>
        </div>
        <div style={{ margin: "1em" }}>
          <button class="btn btn-danger btn-outline btn-rounded">
            Hello, World!
          </button>
        </div>
      </div>
    </div>
  );
});
