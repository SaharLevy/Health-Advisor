import { useFormContext } from "react-hook-form";
import { HealthMetrics } from "@/types/health";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const BasicMetrics = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HealthMetrics>();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Height Field */}
        <div className="space-y-2">
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            placeholder="Enter your height"
            {...register("height", {
              required: "Height is required",
              min: {
                value: 50,
                message: "Height must be at least 50cm",
              },
              max: {
                value: 250,
                message: "Height must be less than 250cm",
              },
            })}
          />
          {errors.height && (
            <p className="text-sm text-red-500">{errors.height.message}</p>
          )}
        </div>

        {/* Weight Field */}
        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="Enter your weight"
            {...register("weight", {
              required: "Weight is required",
              min: {
                value: 20,
                message: "Weight must be at least 20kg",
              },
              max: {
                value: 500,
                message: "Weight must be less than 500kg",
              },
            })}
          />
          {errors.weight && (
            <p className="text-sm text-red-500">{errors.weight.message}</p>
          )}
        </div>
      </div>

      {/* Age Field */}
      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          placeholder="Enter your age"
          className="w-full md:w-1/2"
          {...register("age", {
            required: "Age is required",
            min: {
              value: 1,
              message: "Age must be at least 1",
            },
            max: {
              value: 120,
              message: "Age must be less than 120",
            },
          })}
        />
        {errors.age && (
          <p className="text-sm text-red-500">{errors.age.message}</p>
        )}
      </div>

      {/* Gender Field */}
      <div className="space-y-2">
        <Label>Gender</Label>
        <RadioGroup
          defaultValue="male"
          className="flex space-x-4"
          {...register("gender", { required: "Gender is required" })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
        </RadioGroup>
        {errors.gender && (
          <p className="text-sm text-red-500">{errors.gender.message}</p>
        )}
      </div>
    </div>
  );
};

export default BasicMetrics;
