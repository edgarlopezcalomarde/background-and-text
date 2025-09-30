import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

interface TextChangeFormProps {
  initialValue: {
    color: string;
  };
  onSubmit: (data: {  color: string }) => void;
}

function BackgroundChangerForm({ onSubmit, initialValue }: TextChangeFormProps) {
  const [color, setColor] = useState(initialValue.color);

  return (
    <div className="p-0 h-full flex flex-col mt-12 gap-2">
  

      <div className="flex flex-col gap-2">
        <Label>Color:</Label>
        <Input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
      </div>

      <Button
        className="w-full p-4 mt-auto"
        onClick={() => {
          onSubmit({  color });
        }}
      >
        Cambiar
      </Button>
    </div>
  );
}

export default BackgroundChangerForm;
