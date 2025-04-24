import { Card } from "@/components/ui/card";
import React from "react";
import { Button } from "./ui/button";

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // Handle form submission logic here
  console.log("Form submitted");
};

const HealthForm = () => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xl mx-auto">
      <Card className="fade-in p-6">
        <div className="card-header">
          <h2 className="card-title">Health Form</h2>
          <p className="card-description">Please fill out the form below.</p>
        </div>
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </Card>
    </form>
  );
};

export default HealthForm;
