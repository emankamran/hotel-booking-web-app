import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="lg:col-span-1">
      <Card className="bg-emerald-600 text-white p-6 md:p-8">
        <CardContent className="p-0">
          <div className="mb-6">
            <img
              src="/images/appointment-card.jpg"
              alt="Contact"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">(+1) 987 654 3210</h3>
            <p className="text-emerald-100 mb-1">Mon-Fri: 7:00 am - 9:00 pm</p>
            <p className="text-emerald-100 mb-6">24/7 Service Available</p>

            <Button
              variant="secondary"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-2"
            >
              Call Us Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
