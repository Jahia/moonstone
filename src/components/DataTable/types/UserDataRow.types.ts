import type {ReactNode} from 'react';

export type CellWithIcon = {
    value: string;
    icon?: ReactNode;
};

export type UserDataRowProps = {
  firstName: string | CellWithIcon;
  lastName: string;
  age: number;
  status: 'Accept' | 'In progress' | 'Refuse';
  progress: number;
  date: Date;
  subRows?: UserDataRowProps[];
};

export type UserData = {
  UserData: UserDataRowProps[];
};
