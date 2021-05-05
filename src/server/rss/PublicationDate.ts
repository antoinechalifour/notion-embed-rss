import { format, isAfter, isValid, parse, parseISO, subDays } from "date-fns";

export class PublicationDate {
  private readonly value: Date | null;

  constructor(dateInRandomFormat: string) {
    const parsingAttempts = [
      parseISO(dateInRandomFormat),
      parse(dateInRandomFormat, "E, dd MMM yyyy HH:mm:ss 'GMT'", new Date()),
      parse(dateInRandomFormat, "E, dd MMM yyyy HH:mm:ss xxxx", new Date()),
    ];

    this.value = parsingAttempts.find((attempt) => isValid(attempt)) || null;
  }

  isKnown() {
    return this.value !== null;
  }

  isRecent(now: Date) {
    return isAfter(this.value!, subDays(now, 14));
  }

  display() {
    return format(this.value!, "dd/MM/yyyy HH:mm");
  }
}
