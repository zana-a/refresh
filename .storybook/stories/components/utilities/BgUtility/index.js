import React from "react";
import { Box, Flex } from "./box";

import { monoScale, grayScale, colorScale } from "./colors";

const monoColors = monoScale.map(color => {
  return <Box color={color} />;
});

const grayColors = grayScale.map(color => {
  return <Box color={color} />;
});

const colorColors = colorScale.map(color => {
  return <Box color={color} />;
});

function BgUtility() {
  return (
    <div>
      <Flex>{colorColors}</Flex>
      <Flex>{monoColors}</Flex>
      <Flex>{grayColors}</Flex>
      <Flex>
        <div
          className='bg-blue bg-img-contain bg-img-norepeat w-full m-2'
          style={{
            height: "450px",
            backgroundImage: "url('https://www.placecage.com/640/360')"
          }}
        ></div>
      </Flex>
      <Flex>
        <div
          className='bg-blue bg-img-contain bg-img-norepeat bg-img-center w-full m-2'
          style={{
            height: "450px",
            backgroundImage: "url('https://www.placecage.com/640/360')"
          }}
        ></div>
      </Flex>
      <Flex>
        <div
          className='bg-blue bg-img-cover bg-img-norepeat bg-img-center w-full m-2'
          style={{
            height: "450px",
            backgroundImage: "url('https://www.placecage.com/640/360')"
          }}
        ></div>
      </Flex>
      <Flex>
        <div
          className='bg-blue bg-img-repeat bg-img-center w-full m-2'
          style={{
            height: "450px",
            backgroundImage: "url('https://www.placecage.com/100/100')"
          }}
        ></div>
      </Flex>
    </div>
  );
}

export default BgUtility;
