import React from "react";

function Paragraph() {
  return (
    <div>
      <p>This is a simple paragraph.</p>
      <p>
        Some broken <br /> text
      </p>
      <p>
        Above <hr /> Below
      </p>
      <p>
        <b>Bold text</b>
      </p>
      <p>
        <strong>Strong text</strong>
      </p>
      <p>
        <i>Italic text</i>
      </p>
      <p>
        <q>Quoted Text</q>
      </p>
      <p>
        <ol>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ol>
      </p>
      <p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </p>
      <p>
        This is <small>small</small>.
      </p>
      <p>
        <pre>This is pre-formated</pre>
      </p>
    </div>
  );
}

export default Paragraph;
