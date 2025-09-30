import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

interface TextChangeFormProps {
  initialValue: {
    text: string;
    color: string;
  };
  onSubmit: (data: { text: string; color: string }) => void;
}

function TextChangerForm({ onSubmit, initialValue }: TextChangeFormProps) {
  const [text, setText] = useState(initialValue.text);
  const [color, setColor] = useState(initialValue.color);

  return (
    <div className="p-0 h-full flex flex-col mt-12 gap-2">
      <div className="flex flex-col gap-2">
        <Label>Texto:</Label>
        <Input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>

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
          onSubmit({ text, color });
        }}
      >
        Cambiar
      </Button>
    </div>
  );
}

export default TextChangerForm;
