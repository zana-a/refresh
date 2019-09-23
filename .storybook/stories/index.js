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
    <div style={{ margin: "4em" }}>
      <div style={{ margin: "4em 2em" }}>
        <a href='#' class='tooltip tooltip-n' aria-label='Hello, World!'>
          Hello!
        </a>
      </div>
      <div style={{ margin: "4em 2em" }}>
        <a href='#' class='tooltip tooltip-ne' aria-label='Hello, World!'>
          Hello!
        </a>
      </div>
      <div style={{ margin: "4em 2em" }}>
        <a href='#' class='tooltip tooltip-nw' aria-label='Hello, World! '>
          Hello!
        </a>
      </div>
      <div style={{ margin: "4em 2em" }}>
        <a href='#' class='tooltip tooltip-s' aria-label='Hello, World!'>
          Hello!
        </a>
      </div>
      <div style={{ margin: "4em 2em" }}>
        <a href='#' class='tooltip tooltip-se' aria-label='Hello, World!'>
          Hello!
        </a>
      </div>
      <div style={{ margin: "4em 2em" }}>
        <a href='#' class='tooltip tooltip-sw' aria-label='Hello, World!'>
          Hello!
        </a>
      </div>
      <div style={{ margin: "4em 2em" }}>
        <a href='#' class='tooltip tooltip-e' aria-label='Hello, World!'>
          Hello!
        </a>
      </div>
      <div style={{ margin: "4em 2em" }}>
        <a href='#' class='tooltip tooltip-w' aria-label='Hello, World!'>
          Hello!
        </a>
      </div>

      <div style={{ margin: "4em" }}>
        <div style={{ margin: "4em 2em" }}>
          <button href='#' class='tooltip tooltip-n' aria-label='Hello, World!'>
            Hello!
          </button>
        </div>
        <div style={{ margin: "4em 2em" }}>
          <button
            href='#'
            class='tooltip tooltip-ne'
            aria-label='Hello, World!'
          >
            Hello!
          </button>
        </div>
        <div style={{ margin: "4em 2em" }}>
          <button
            href='#'
            class='tooltip tooltip-nw'
            aria-label='Hello, World!'
          >
            Hello!
          </button>
        </div>
        <div style={{ margin: "4em 2em" }}>
          <button href='#' class='tooltip tooltip-s' aria-label='Hello, World!'>
            Hello!
          </button>
        </div>
        <div style={{ margin: "4em 2em" }}>
          <button
            href='#'
            class='tooltip tooltip-se'
            aria-label='Hello, World!'
          >
            Hello!
          </button>
        </div>
        <div style={{ margin: "4em 2em" }}>
          <button
            href='#'
            class='tooltip tooltip-sw'
            aria-label='Hello, World!'
          >
            Hello!
          </button>
        </div>
        <div style={{ margin: "4em 2em" }}>
          <button href='#' class='tooltip tooltip-e' aria-label='Hello, World!'>
            Hello!
          </button>
        </div>
        <div style={{ margin: "4em 2em" }}>
          <button href='#' class='tooltip tooltip-w' aria-label='Hello, World!'>
            Hello!
          </button>
        </div>
      </div>
    </div>
  );
});
