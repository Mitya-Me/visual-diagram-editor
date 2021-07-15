import React, { FC } from 'react';

const Background: FC = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1000 800"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  />
);

export default Background;
