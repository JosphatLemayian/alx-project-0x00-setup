import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="space-y-8 p-6">
      {/* Title and Card */}
      <div>
        <h1 className="text-xl font-extralight mb-2">Landing Page</h1>
        <Card />
      </div>

      {/* Button Variants */}
      <div>
        <h2 className="text-xl font-bold mb-4">Custom Buttons</h2>

        <div className="flex flex-col gap-4">
          {/* Small Buttons */}
          <Button title="Small Rounded-sm" styles="text-sm rounded-sm" />
          <Button title="Small Rounded-md" styles="text-sm rounded-md" />
          <Button title="Small Rounded-full" styles="text-sm rounded-full" />

          {/* Medium Buttons */}
          <Button title="Medium Rounded-sm" styles="text-base rounded-sm" />
          <Button title="Medium Rounded-md" styles="text-base rounded-md" />
          <Button title="Medium Rounded-full" styles="text-base rounded-full" />

          {/* Large Buttons */}
          <Button title="Large Rounded-sm" styles="text-lg rounded-sm" />
          <Button title="Large Rounded-md" styles="text-lg rounded-md" />
          <Button title="Large Rounded-full" styles="text-lg rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
