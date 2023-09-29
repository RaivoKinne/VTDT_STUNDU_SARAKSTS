export type info = {
  classes: string[];
  teachers: string[];
};

export type Data = {
  loading: boolean;
  error: Error | null;
  data: {
    [key: string]: info[];
  };
};
