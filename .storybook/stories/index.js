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
      <div style={{ margin: "1em" }}>
        <input type="text" className="input" placeholder="Search database..." />
      </div>
      <div style={{ margin: "1em" }}>
        <input
          type="text"
          className="input input-default"
          placeholder="Search database..."
        />
      </div>
      <div style={{ margin: "1em" }}>
        <input
          type="text"
          className="input input-success"
          placeholder="Search database..."
        />
      </div>
      <div style={{ margin: "1em" }}>
        <input
          type="text"
          className="input input-warning"
          placeholder="Search database..."
        />
      </div>
      <div style={{ margin: "1em" }}>
        <input
          type="text"
          className="input input-danger"
          placeholder="Search database..."
        />
      </div>
    </div>
  );
});
