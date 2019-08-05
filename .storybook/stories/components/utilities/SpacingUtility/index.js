import React from "react";

const BoxPadding = props => {
  return (
    <div>
      <div className={"d-inline-block bg-red t-opac-light-80 " + props.class}>
        Example Box | <strong>{props.class}</strong>
      </div>
      <br />
      <br />
    </div>
  );
};

const BoxMargin = props => {
  return (
    <div className='clearfix d-block my-4'>
      <div className='f-left clear-both border border-gray-8 d-inline-block'>
        <div
          className={"d-inline-block bg-orange t-opac-light-80 " + props.class}
        >
          Example Box | <strong>{props.class}</strong>
        </div>
      </div>
    </div>
  );
};

function SpacingUtility() {
  return (
    <div>
      <div>
        <BoxPadding class='p-1' />
        <BoxPadding class='p-2' />
        <BoxPadding class='p-3' />
        <BoxPadding class='p-4' />
        <BoxPadding class='p-5' />
        <BoxPadding class='p-6' />
        <BoxPadding class='p-7' />
        <BoxPadding class='p-8' />
        <BoxPadding class='p-9' />
      </div>
      <div>
        <BoxPadding class='px-1' />
        <BoxPadding class='px-2' />
        <BoxPadding class='px-3' />
        <BoxPadding class='px-4' />
        <BoxPadding class='px-5' />
        <BoxPadding class='px-6' />
        <BoxPadding class='px-7' />
        <BoxPadding class='px-8' />
        <BoxPadding class='px-9' />
      </div>
      <div>
        <BoxPadding class='py-1' />
        <BoxPadding class='py-2' />
        <BoxPadding class='py-3' />
        <BoxPadding class='py-4' />
        <BoxPadding class='py-5' />
        <BoxPadding class='py-6' />
        <BoxPadding class='py-7' />
        <BoxPadding class='py-8' />
        <BoxPadding class='py-9' />
      </div>
      <div>
        <BoxPadding class='pt-1' />
        <BoxPadding class='pt-2' />
        <BoxPadding class='pt-3' />
        <BoxPadding class='pt-4' />
        <BoxPadding class='pt-5' />
        <BoxPadding class='pt-6' />
        <BoxPadding class='pt-7' />
        <BoxPadding class='pt-8' />
        <BoxPadding class='pt-9' />
      </div>
      <div>
        <BoxPadding class='pr-1' />
        <BoxPadding class='pr-2' />
        <BoxPadding class='pr-3' />
        <BoxPadding class='pr-4' />
        <BoxPadding class='pr-5' />
        <BoxPadding class='pr-6' />
        <BoxPadding class='pr-7' />
        <BoxPadding class='pr-8' />
        <BoxPadding class='pr-9' />
      </div>
      <div>
        <BoxPadding class='pb-1' />
        <BoxPadding class='pb-2' />
        <BoxPadding class='pb-3' />
        <BoxPadding class='pb-4' />
        <BoxPadding class='pb-5' />
        <BoxPadding class='pb-6' />
        <BoxPadding class='pb-7' />
        <BoxPadding class='pb-8' />
        <BoxPadding class='pb-9' />
      </div>
      <div>
        <BoxPadding class='pl-1' />
        <BoxPadding class='pl-2' />
        <BoxPadding class='pl-3' />
        <BoxPadding class='pl-4' />
        <BoxPadding class='pl-5' />
        <BoxPadding class='pl-6' />
        <BoxPadding class='pl-7' />
        <BoxPadding class='pl-8' />
        <BoxPadding class='pl-9' />
      </div>

      <div>
        <BoxMargin class='m-1' />
        <BoxMargin class='m-2' />
        <BoxMargin class='m-3' />
        <BoxMargin class='m-4' />
        <BoxMargin class='m-5' />
        <BoxMargin class='m-6' />
        <BoxMargin class='m-7' />
        <BoxMargin class='m-8' />
        <BoxMargin class='m-9' />
      </div>
      <div>
        <BoxMargin class='mx-1' />
        <BoxMargin class='mx-2' />
        <BoxMargin class='mx-3' />
        <BoxMargin class='mx-4' />
        <BoxMargin class='mx-5' />
        <BoxMargin class='mx-6' />
        <BoxMargin class='mx-7' />
        <BoxMargin class='mx-8' />
        <BoxMargin class='mx-9' />
      </div>
      <div>
        <BoxMargin class='my-1' />
        <BoxMargin class='my-2' />
        <BoxMargin class='my-3' />
        <BoxMargin class='my-4' />
        <BoxMargin class='my-5' />
        <BoxMargin class='my-6' />
        <BoxMargin class='my-7' />
        <BoxMargin class='my-8' />
        <BoxMargin class='my-9' />
      </div>
      <div>
        <BoxMargin class='mt-1' />
        <BoxMargin class='mt-2' />
        <BoxMargin class='mt-3' />
        <BoxMargin class='mt-4' />
        <BoxMargin class='mt-5' />
        <BoxMargin class='mt-6' />
        <BoxMargin class='mt-7' />
        <BoxMargin class='mt-8' />
        <BoxMargin class='mt-9' />
      </div>
      <div>
        <BoxMargin class='mr-1' />
        <BoxMargin class='mr-2' />
        <BoxMargin class='mr-3' />
        <BoxMargin class='mr-4' />
        <BoxMargin class='mr-5' />
        <BoxMargin class='mr-6' />
        <BoxMargin class='mr-7' />
        <BoxMargin class='mr-8' />
        <BoxMargin class='mr-9' />
      </div>
      <div>
        <BoxMargin class='mb-1' />
        <BoxMargin class='mb-2' />
        <BoxMargin class='mb-3' />
        <BoxMargin class='mb-4' />
        <BoxMargin class='mb-5' />
        <BoxMargin class='mb-6' />
        <BoxMargin class='mb-7' />
        <BoxMargin class='mb-8' />
        <BoxMargin class='mb-9' />
      </div>
      <div>
        <BoxMargin class='ml-1' />
        <BoxMargin class='ml-2' />
        <BoxMargin class='ml-3' />
        <BoxMargin class='ml-4' />
        <BoxMargin class='ml-5' />
        <BoxMargin class='ml-6' />
        <BoxMargin class='ml-7' />
        <BoxMargin class='ml-8' />
        <BoxMargin class='ml-9' />
      </div>
    </div>
  );
}

export default SpacingUtility;
