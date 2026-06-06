"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "./utils";
import { buttonVariants } from "./button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        month_caption: "flex justify-center pt-1 relative items-center w-full", // v8 'caption' mudou para 'month_caption'
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        button_previous: cn( // Mudou de 'nav_button_previous' para 'button_previous'
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1",
        ),
        button_next: cn( // Mudou de 'nav_button_next' para 'button_next'
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1",
        ),
        month_grid: "w-full border-collapse space-x-1", // v8 'table' mudou para 'month_grid'
        weekdays: "flex", // v8 'head_row' mudou para 'weekdays'
        weekday: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]", // v8 'head_cell' mudou para 'weekday'
        week: "flex w-full mt-2", // v8 'row' mudou para 'week'
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100",
        ),
        range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        selected: // v8 'day_selected' mudou para 'selected'
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-accent text-accent-foreground", // v8 'day_today' mudou para 'today'
        outside: // v8 'day_outside' mudou para 'outside'
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        disabled: "text-muted-foreground opacity-50", // v8 'day_disabled' mudou para 'disabled'
        range_middle: // v8 'day_range_middle' mudou para 'range_middle'
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible", // v8 'day_hidden' mudou para 'hidden'
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className, ...chevronProps }) => {
          // Aqui decidimos qual ícone renderizar com base no lado
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight;
          return (
            <Icon 
              className={cn("size-4", className)} 
              {...chevronProps} 
            />
          );
        },
      }}
      {...props}
    />
  );
}

export { Calendar };