import { Link } from "react-router";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-xl border-none bg-white/90 backdrop-blur-lg rounded-2xl">
        <CardContent className="p-8 flex flex-col items-center space-y-6">
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-semibold text-gray-800">Welcome to</h1>
            <h1 className="text-4xl font-bold text-ecubo">
              <strong>MOOX</strong>
            </h1>
          </div>
          <Link to="/courses" className="w-full">
            <Button className="w-full text-lg bg-slate-950 text-white hover:bg-slate-700">
              Start Learning!
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
