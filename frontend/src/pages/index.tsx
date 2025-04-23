import HealthForm from "@/components/HealthForm";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-background to-muted">
      <ThemeSwitcher />
      <div className="container px-4 py-8 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl fade-in">
            HealthStat Advisor
          </h1>
          <p className="mt-3 text-lg text-muted-foreground slide-up">
            Enter your health metrics for personalized insights and
            recommendations
          </p>
        </div>
        <HealthForm />
      </div>
    </div>
  );
};

export default Index;
