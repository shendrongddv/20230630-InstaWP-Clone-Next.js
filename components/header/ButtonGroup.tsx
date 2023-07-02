import React from "react";
import { Button } from "../ui/button";

const ButtonGroup = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button variant="ghost" size="lg">
        Login
      </Button>

      <Button variant="default" size="lg">
        Try for Free
      </Button>
    </div>
  );
};

export default ButtonGroup;
