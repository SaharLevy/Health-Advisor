export type Gender = "male" | "female";

export interface HealthMetrics {
  height: string;
  weight: string;
  age: string;
  gender: Gender;
}

export const initialMetrics: HealthMetrics = {
  height: "",
  weight: "",
  age: "",
  gender: "male",
};
