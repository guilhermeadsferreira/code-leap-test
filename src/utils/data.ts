import { formatDistanceToNowStrict } from "date-fns";
import { enGB } from "date-fns/locale";

export const getDistanceBetweenAnyDateAndNowDate = (date: string) => {
  return formatDistanceToNowStrict(new Date(date), {
    locale: enGB,
  });
};
