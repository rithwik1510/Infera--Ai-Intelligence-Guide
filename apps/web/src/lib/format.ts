const numberFormatter = new Intl.NumberFormat("en-US");
const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
const fullDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function formatNumber(value?: number | null): string {
  if (value === undefined || value === null) {
    return "";
  }
  return numberFormatter.format(value);
}

export function formatSignedNumber(value: number): string {
  const formatted = numberFormatter.format(Math.abs(value));
  if (value > 0) {
    return `+${formatted}`;
  }
  if (value < 0) {
    return `-${formatted}`;
  }
  return formatted;
}

export function formatMonthYear(value: string | number | Date): string {
  const date = value instanceof Date ? value : new Date(value);
  return monthYearFormatter.format(date);
}

export function formatFullDate(value: string | number | Date): string {
  const date = value instanceof Date ? value : new Date(value);
  return fullDateFormatter.format(date);
}


const decimalFormatters = new Map<number, Intl.NumberFormat>();

function getDecimalFormatter(fractionDigits: number) {
  if (!decimalFormatters.has(fractionDigits)) {
    decimalFormatters.set(
      fractionDigits,
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
      })
    );
  }
  return decimalFormatters.get(fractionDigits)!;
}

export function formatDecimal(value: number, fractionDigits = 1): string {
  return getDecimalFormatter(fractionDigits).format(value);
}

export function formatPercent(value: number, fractionDigits = 1): string {
  return `${formatDecimal(value, fractionDigits)}%`;
}

type CurrencyFormatterKey = `${string}-${number}-${number}`;

const currencyFormatters = new Map<CurrencyFormatterKey, Intl.NumberFormat>();

function getCurrencyFormatter(currency: string, minimumFractionDigits: number, maximumFractionDigits: number) {
  const key = `${currency}-${minimumFractionDigits}-${maximumFractionDigits}` as CurrencyFormatterKey;
  if (!currencyFormatters.has(key)) {
    currencyFormatters.set(
      key,
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        minimumFractionDigits,
        maximumFractionDigits,
      })
    );
  }
  return currencyFormatters.get(key)!;
}

export interface CurrencyFormatOptions {
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

export function formatCurrency(
  value: number,
  currency = "USD",
  options: CurrencyFormatOptions = {}
): string {
  const minimumFractionDigits =
    options.minimumFractionDigits ?? (value < 10 && value % 1 !== 0 ? 2 : 0);
  const maximumFractionDigits = options.maximumFractionDigits ?? minimumFractionDigits;
  return getCurrencyFormatter(currency, minimumFractionDigits, maximumFractionDigits).format(value);
}
