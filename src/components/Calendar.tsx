import {
  Box,
  ColorSwatch,
  Group,
  List,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Tooltip,
} from "@mantine/core";

import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

dayjs.extend(isToday);

import { PropsWithChildren, useEffect, useState } from "react";
import clsx from "clsx";
import { getMonthDays } from "@/utils/getWeekDays";

import axios from "axios";
import { GoogleHoliday } from "@/interface/holidays";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Cookies from "js-cookie";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [holidays, setHolidays] = useState<GoogleHoliday[]>([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
      const CALENDAR_REGION = "en.ng";
      const countries = Cookies.get("country");

      try {
        const { data: res } = await axios.get(
          `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_REGION}%23holiday@group.v.calendar.google.com/events?key=${API_KEY}&ctz=Africa%2FLagos`
        );

        setHolidays(res.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHolidays();
  }, []);

  const startOfMonth = dayjs(date).startOf("month");
  const endOfMonth = dayjs(date).endOf("month");

  const prefixDays = startOfMonth.day();
  const suffixDays = 6 - endOfMonth.day();

  const addMonth = () => setDate(dayjs(date).add(1, "month").toDate());

  const subtractMonth = () =>
    setDate(dayjs(date).subtract(1, "month").toDate());

  return (
    <Paper p={20}>
      <Group justify="space-between" align="center" mb={10}>
        <Group gap={5} align="center">
          <ThemeIcon onClick={subtractMonth} variant="transparent">
            <IconChevronLeft size={15} />
          </ThemeIcon>
          <Text fz={14} fw={700} ta="center" c="#ED982A">
            {dayjs(date).format("MMMM YY")}
          </Text>
          <ThemeIcon onClick={addMonth} variant="transparent">
            <IconChevronRight size={15} />
          </ThemeIcon>
        </Group>

        <List style={{ display: "flex", gap: 20 }}>
          {lists.map((list, index) => (
            <List.Item
              key={index}
              fz={8}
              icon={<ColorSwatch radius={0} size={8} color={list.bg} />}
            >
              {list.label}
            </List.Item>
          ))}
        </List>
      </Group>

      <div className="w-full border-dashed border-t-2 border-l-2">
        <div className="grid grid-cols-7 items-center justify-center text-center">
          {Array.from({ length: prefixDays }).map((_, index) => (
            <Cell key={index} />
          ))}

          {getMonthDays(date).map((day, index) => {
            const dates = dayjs(date).date(index + 1);
            const isToday = dates.isToday();
            const hasHolidays = holidays.filter((holiday) =>
              dayjs(dates).isSame(dayjs(holiday.start.date), "day")
            );

            return (
              <Cell
                key={index}
                isToday={isToday}
                isHoliday={!!hasHolidays.length}
              >
                {/* <Stack gap={0} h="100%"> */}
                <Text fz={10} c={isToday ? "white" : "dimmed"}>
                  {day}
                </Text>
                <Text fz={12} fw={700} c={hasHolidays.length ? "#ED982A" : ""}>
                  {index + 1}
                </Text>
                <Box className="align-self-end" w="100%">
                  {hasHolidays.length ? (
                    hasHolidays.map((holiday) => (
                      <Tooltip
                        key={holiday.id}
                        label={holiday.summary}
                        withArrow
                      >
                        <Text fz={6} truncate w="100%" c="#ED982A">
                          {holiday.summary}
                        </Text>
                      </Tooltip>
                    ))
                  ) : (
                    <Text fz={6} truncate w="100%" c={isToday ? "white" : ""}>
                      No Holiday
                    </Text>
                  )}
                </Box>
                {/* </Stack> */}
              </Cell>
            );
          })}

          {Array.from({ length: suffixDays }).map((_, index) => (
            <Cell key={index} />
          ))}
        </div>
      </div>
    </Paper>
  );
}

const Cell = ({ children, className, isToday, isHoliday }: Props) => {
  return (
    <div
      className={clsx(
        "h-[50px] border-dashed border-b-2 border-r-2 flex flex-col items-center justify-center  select-none transition-colors",
        className,
        {
          "bg-[#40748C] text-white": isToday,
          "bg-[#11A1C80D]": isHoliday,
        }
      )}
    >
      {children}
    </div>
  );
};

interface Props extends PropsWithChildren {
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
  isToday?: boolean;
  isHoliday?: boolean;
}

const lists = [
  {
    label: "Active Day",
    bg: "#40748C",
  },
  {
    label: "Holiday",
    bg: "#F3FAFC",
  },
];
