import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { HealthMetrics, initialMetrics } from "@/types/health";
import BasicMetrics from "@/components/health/BasicMetrics";
import { useForm, FormProvider } from "react-hook-form";

const HealthForm = () => {
  const [loading, setLoading] = useState(false);

  // Initialize react-hook-form
  const methods = useForm<HealthMetrics>({
    defaultValues: initialMetrics,
  });

  const onSubmit = (data: HealthMetrics) => {
    setLoading(true);
    // Handle form submission logic here
    console.log("Form submitted with data:", data);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-xl mx-auto"
      >
        <Card className="fade-in p-6">
          <div className="card-header mb-4">
            <h2 className="card-title text-xl font-bold">Health Form</h2>
            <p className="card-description text-gray-500">
              Please fill out the form below.
            </p>
          </div>

          <BasicMetrics />

          <Button type="submit" className="mt-6 w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>

          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
            Your data is processed securely and never stored. This tool provides
            general insights and is not a substitute for professional medical
            advice.
          </p>
        </Card>
      </form>
    </FormProvider>
  );
};

export default HealthForm;
