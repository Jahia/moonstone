export type UserDataRowProps = {
  firstName: string;
  lastName: string;
  age: number;
  status: 'Accept' | 'In progress' | 'Refuse';
  progress: number;
  date: Date;
};

export type UserData = {
UserData : UserDataRowProps[]
}
