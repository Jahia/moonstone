export type UserDataProps = {
  firstName: string;
  lastName: string;
  age: number;
  status: 'Accept' | 'In progress' | 'Refuse';
  progress: number;
  date: Date;
};
