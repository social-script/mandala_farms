"use client"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Download, ArrowRight } from 'lucide-react'
import Link from "next/link"

const accommodations = [
  {
    name: "Luxury Eco Cottage",
    type: "Premium Stay",
    occupancy: "2-3",
    package: "2 Queen Beds & Breakfast",
    rate: "₹12,000",
    rateOnWeekends:"15,000"
  },
]

export default function TariffTable() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="space-y-8 md:space-y-12">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
          <div className="space-y-4">
            <h3 className="font-poppins text-[#E8FF8B] text-sm md:text-base font-medium tracking-wider">
              ACCOMMODATION RATES
            </h3>
            <h2 className="font-playfair text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Our Tariff Plans
            </h2>
            <p className="font-poppins text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl">
              Experience luxury sustainable living with our carefully curated stays. All rates include complimentary breakfast and access to common areas.
            </p>
          </div>
          <div className="flex gap-3 md:gap-4">
            <Link href='/contact-us'>
            <Button 
              className="bg-[#E8FF8B] text-[#2F4538] hover:bg-[#E8FF8B]/90 rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base"
            >
              Book Now
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
            </Link>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-white/10">
                <TableHead className="w-[250px] text-white/70 font-poppins py-3 px-4">Accommodation</TableHead>
                <TableHead className="text-white/70 font-poppins py-3 px-4">Type</TableHead>
                <TableHead className="text-white/70 font-poppins py-3 px-4">Package</TableHead>
                <TableHead className="text-right text-white/70 font-poppins py-3 px-4">Rate On Weekdays</TableHead>
                <TableHead className="text-right text-white/70 font-poppins py-3 px-4">Rate On Weekends</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accommodations.map((accommodation) => (
                <TableRow 
                  key={accommodation.name}
                  className="border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <TableCell className="font-playfair text-white py-3 px-4">{accommodation.name}</TableCell>
                  <TableCell className="font-poppins text-white/80 py-3 px-4">{accommodation.type}</TableCell>
                  <TableCell className="font-poppins text-white/80 py-3 px-4">{accommodation.package}</TableCell>
                  <TableCell className="text-right font-poppins text-[#E8FF8B] py-3 px-4">{accommodation.rate}</TableCell>
                  <TableCell className="text-right font-poppins text-[#E8FF8B] py-3 px-4">{accommodation.rateOnWeekends}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="font-poppins text-white/60 text-xs md:text-sm text-center">
          * Rates are subject to change based on season and availability. Additional charges may apply for extra amenities.
        </p>
      </div>
    </section>
  )
} 