"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FieldProps {
  name: string;
  value: string; // Expect a year in string format
  onChange: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export default function TahunPembuatan({ field }: { field: FieldProps }) {
  const [selectedYear, setSelectedYear] = React.useState<string>(
    field.value || ""
  );
  const handleYearChange = (date: Date | undefined) => {
    if (date) {
      const year = format(date, "yyyy"); // Extract only the year
      setSelectedYear(year);
      field.onChange(year); // Update form field value
    }
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !selectedYear && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedYear ? selectedYear : <span>Pilih Tahun</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={
            selectedYear ? new Date(`${selectedYear}-01-01`) : undefined
          }
          onSelect={(date) => handleYearChange(date)}
          initialFocus
          fromYear={2000} // Optional: Set a starting year for the calendar
          toYear={new Date().getFullYear()} // Optional: Restrict to the current year
        />
      </PopoverContent>
    </Popover>
  );
}
