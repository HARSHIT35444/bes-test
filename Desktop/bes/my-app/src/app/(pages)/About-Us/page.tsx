"use client";

import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-8 py-5"> {/* increased container padding */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-bold mb-6">Company Profile</CardTitle> {/* increased title font size */}
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-xl leading-relaxed">
            Bombay Engineering Syndicate (BES) is one of the oldest, largest & most reputed authorized channel partners of CG Power and Industrial Solutions Ltd (Formerly Crompton Greaves Ltd) & Crompton Greaves Consumer Electricals Ltd since 1957.
          </p>
          <p className="mb-6 text-xl leading-relaxed">
            It is an Established Electric Motors business from 1957 onwards & to our credit BES is now known as ROTATING MACHINE PEOPLE.
          </p>
          <p className="mb-6 text-xl leading-relaxed">
            Bombay Engineering Syndicate is having presence in Mumbai (Maharashtra) and at Ahmedabad (Gujarat).
          </p>
          <p className="mb-6 text-xl leading-relaxed">
            We are well equipped to handle project enquiries and retail enquiries with equal ease. We are well versed with all consultant / project jobs such as EIL, TOYO, L&T, Lurgi, Mecons, Foster Wheeler, Jacobs, BHEL, NTPC, NPC, etc. We have understanding of all document related processes and provide very prompt pre tendering and post order execution support. We are well versed with special requirements such as Hazardous Area Motors (such as Increased Safety Ex “e”, Non sparking Ex “n”, Flame Proof, Ex “d” for Gas Group IIA / IIB or IIC), Crane Duty motors, Roller Table Motors, Ginning Motors, Energy Saving Motors, AC Drives for varied applications etc.
          </p>
          <p className="mb-6 text-xl leading-relaxed">
            We also offer products / solutions which can help the client in energy savings.
          </p>
          <p className="mb-6 text-xl leading-relaxed">
            We also offer substitutes for imported motors, be it in NEMA frame or IEC frame.
          </p>
          <p className="text-xl leading-relaxed">
            We are geared up to meet any challenging requirements of clients. We believe in giving the best solution to a customer need which is also cost effective and ultimately results in customer delight.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
