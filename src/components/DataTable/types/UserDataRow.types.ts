import type {ReactNode} from 'react';

export type CustomCell = {
    label: string;
    subLabel?: string;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
};

export type UserDataRowProps = {
  firstName: string | CustomCell;
  lastName: string;
  age: number;
  status: string;
  progress: number;
  date: Date;
  subRows?: UserDataRowProps[];
  tags?: string[];
  hoverActions?: string;
  actions?: string;
};
