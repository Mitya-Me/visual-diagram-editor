import React, { FC } from 'react';

type GroupProps = {
  width: string;
  height: string;
  children: React.ReactNode;
};

const Group: FC<GroupProps> = (props) => <svg width={props.width} height={props.height}>{props.children}</svg>;

export default Group;
