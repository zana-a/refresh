import React from "react";

import {
  monoScale,
  grayScale,
  colorScale,
  redScale,
  pinkScale,
  grapeScale,
  violetScale,
  indigoScale,
  blueScale,
  cyanScale,
  tealScale,
  greenScale,
  limeScale,
  yellowScale,
  orangeScale
} from "./colors";

import { Box, Flex } from "./box";

const monoColors = monoScale.map(color => {
  return <Box color={color} />;
});

const grayColors = grayScale.map(color => {
  return <Box color={color} />;
});

const colorColors = colorScale.map(color => {
  return <Box color={color} />;
});

const redColors = redScale.map(color => {
  return <Box color={color} />;
});

const pinkColors = pinkScale.map(color => {
  return <Box color={color} />;
});

const grapeColors = grapeScale.map(color => {
  return <Box color={color} />;
});

const violetColors = violetScale.map(color => {
  return <Box color={color} />;
});

const indigoColors = indigoScale.map(color => {
  return <Box color={color} />;
});

const blueColors = blueScale.map(color => {
  return <Box color={color} />;
});

const cyanColors = cyanScale.map(color => {
  return <Box color={color} />;
});

const tealColors = tealScale.map(color => {
  return <Box color={color} />;
});

const greenColors = greenScale.map(color => {
  return <Box color={color} />;
});

const limeColors = limeScale.map(color => {
  return <Box color={color} />;
});

const yellowColors = yellowScale.map(color => {
  return <Box color={color} />;
});

const orangeColors = orangeScale.map(color => {
  return <Box color={color} />;
});

function BgUtility() {
  return (
    <div>
      <Flex>{colorColors}</Flex>
      <Flex>{monoColors}</Flex>
      <Flex>{grayColors}</Flex>
      <Flex>{redColors}</Flex>
      <Flex>{pinkColors}</Flex>
      <Flex>{grapeColors}</Flex>
      <Flex>{violetColors}</Flex>
      <Flex>{indigoColors}</Flex>
      <Flex>{blueColors}</Flex>
      <Flex>{cyanColors}</Flex>
      <Flex>{tealColors}</Flex>
      <Flex>{greenColors}</Flex>
      <Flex>{limeColors}</Flex>
      <Flex>{yellowColors}</Flex>
      <Flex>{orangeColors}</Flex>
    </div>
  );
}

export default BgUtility;
