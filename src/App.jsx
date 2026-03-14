import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [resetValue, setResetValue] = useState("");

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  const resetToValue = () => {
    const value = Number(resetValue);
    if (!isNaN(value)) setCount(value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-6">
      <div className="flex gap-6 flex-wrap justify-center">
        
        {/* Counter Card */}
        <Card className="w-[350px] shadow-lg">
          <CardHeader className="text-center">
            <CardTitle>My Counter App</CardTitle>
            <CardDescription className="text-lg font-semibold">
              Count: {count}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex gap-3 justify-center">
            <Button variant="outline" onClick={increment}>
              Increment
            </Button>

            <Button
              variant="outline"
              onClick={decrement}
              disabled={count === 0}
            >
              Decrement
            </Button>
          </CardContent>

          <CardFooter className="justify-center">
            <Button variant="outline" onClick={reset}>
              Reset
            </Button>
          </CardFooter>
        </Card>

        {/* Reset to Value Card */}
        <Card className="w-[350px] shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Reset to Value</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid gap-2">
              <Label htmlFor="value">Value</Label>
              <Input
                id="value"
                type="number"
                placeholder="Enter a value"
                value={resetValue}
                onChange={(e) => setResetValue(e.target.value)}
              />
            </div>
          </CardContent>

          <CardFooter className="justify-center">
            <Button variant="outline" onClick={resetToValue}>
              Reset to {resetValue || "value"}
            </Button>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}

export default App;
