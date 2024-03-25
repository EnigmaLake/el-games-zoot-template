import * as d3 from "d3-format";

export function smartRoundPrice(
  price: number,
  roundingFactor: number,
  maxRoundingFactor = 10 ** 15
): number {
  if (!roundingFactor || !price) {
    return price;
  }
  const rounded =
    Math.round((price + Number.EPSILON) * roundingFactor) / roundingFactor;
  if (!rounded && roundingFactor < maxRoundingFactor) {
    return smartRoundPrice(price, roundingFactor * 10, maxRoundingFactor);
  }
  return rounded;
}

export const d3Format = d3;
const DEFAULT_SEPARATORS = {
  group: ",",
  decimal: ".",
};
const isSsr = typeof window === "undefined";
export const navigatorLanguage = isSsr ? "en-US" : navigator.language;

export const formatAbbreviated = (num: number, decimals = 1) => {
  const sDecimals = decimals > 0 ? decimals + 1 : decimals;
  if (!Number.isFinite(num)) {
    return "-";
  }
  if (num >= 10 ** 9) {
    return "+1B";
  } else if (num > 0 && num < 0.001) {
    // Very small values render as 0. So we force that it render at least one decimal.
    const roundedPrice = roundPrice(num, decimals);
    const places = Math.floor(Math.log(roundedPrice) / Math.log(10) + 1);
    return roundedPrice.toLocaleString(navigatorLanguage, {
      minimumFractionDigits: Math.max(
        decimals,
        Number.isFinite(places) ? -places + 1 : 0
      ),
    });
  }
  return num < 1000
    ? roundPrice(num, decimals).toLocaleString(navigatorLanguage)
    : d3Format.format(`.${sDecimals}s`)(num).replace("k", "K");
};

/**
 * Figure precision we should display for small amounts, eg 0.0000012 CMD
 * @param value
 */
export const figureDecimalsForAmounts = (value: number) => {
  if (!value) {
    return 2;
  }

  if (Number.isInteger(value)) {
    return 2;
  }

  if (value === 0) {
    return 2;
  }

  if (Math.floor(value) > 0) {
    return 2;
  }

  return -Math.floor(Math.log10(value) + 1) + 2;
};

export const formatPriceAbbreviated = (
  num: number,
  decimals = 2,
  currencySymbol = ""
) => {
  let formattedPrice;
  if (!Number.isFinite(num)) {
    formattedPrice = "-";
  } else if (num >= 10 ** 9) {
    formattedPrice = "+1B";
  } else if (num < 1000) {
    formattedPrice = roundAndFormatPrice(num, decimals);
  } else {
    formattedPrice = d3Format
      .format(`.${decimals + 1}s`)(num)
      .replace("k", "K");
  }
  return `${currencySymbol ? ` ${currencySymbol}` : ""}${formattedPrice}`;
};

/**
 * Format a percentage value using d3format fixed-point and SI-prefix for big values.
 */
export const formatPercentageAbbreviated = (num: number, decimals = 1) => {
  if (!isFinite(num)) {
    return "+1B%";
  }
  // Add 1 to the qty. of decimals (to get correct number of decimals) when using d3's .%s SI-prefix.
  const sDecimals = decimals > 0 ? decimals + 1 : decimals;
  if (num < 1000) {
    return formatPercentage(num, decimals);
  }
  const formatted = d3Format.format(`.${sDecimals}s`)(num).replace("k", "K");
  return `${formatted}%`;
};

/**
 * Format a percentage value using d3Format fixed-point.
 */
export const formatPercentage = (num: number, decimals = 2) => {
  const formatted = d3Format.format(`.${decimals}f`)(num);
  return `${formatted}%`;
};

export const formatRound = (value: number) => d3Format.format(".1f")(value);

export const CURRENCY_PRECISION = 6;
export const USD_CURRENCY_PRECISION = 2;
// 8 because server turns 8 decimal points we do not want data loss when sorting by price
export const DATA_CURRENCY_PRECISION = 8;

export function roundPrice(price: number, precision = CURRENCY_PRECISION) {
  return smartRoundPrice(price, 10 ** precision);
}

export function roundAndFormatPrice(
  price: number,
  decimals = CURRENCY_PRECISION
) {
  const roundedPrice = roundPrice(price, decimals);
  // Very small values render as 0. So we force that it render at least one decimal.
  const places = Math.floor(Math.log(roundedPrice) / Math.log(10) + 1);
  const precision = Math.max(
    decimals,
    Number.isFinite(places) ? -places + 1 : 0
  );
  let formatted = d3Format.format(`.${precision}f`)(roundedPrice);
  if (decimals > USD_CURRENCY_PRECISION) {
    // Remove trailing zeros (e.g. 5.000000 => 5, 5.001000 => 5.001)
    formatted = formatted.replace(/\.?(0*)$/, "");
  }
  return formatted;
}

export function formatUsdValue(value: number) {
  return value < 0.01 ? "<$0.01" : `$${formatPriceAbbreviated(value, 2)}`;
}

/** Shrink a wallet address to only show the first / last 4 digits */
export function shrinkAddress(roninAddress: string) {
  // Might be a ronin address, normalize it
  const address = roninAddress.replace("ronin:", "0x");
  return (
    address.substring(0, 6) + "..." + address.substring(address.length - 4)
  );
}

export function getSeparator(
  locale: string,
  separatorType: "group" | "decimal"
) {
  const numberWithGroupAndDecimalSeparator = 10000.1;
  return (
    Intl.NumberFormat(locale)
      .formatToParts(numberWithGroupAndDecimalSeparator)
      .find((part) => part.type === separatorType)?.value ??
    DEFAULT_SEPARATORS[separatorType]
  );
}

export function setupD3Format(lang: string) {
  d3Format.formatDefaultLocale({
    decimal: getSeparator(lang, "decimal"),
    thousands: getSeparator(lang, "group"),
    grouping: [3],
    currency: ["", ""], // We don't use currency formatting with d3
  });
}

export function numberToLocaleString(value: number) {
  return value ? value.toLocaleString(navigatorLanguage) : "0";
}

/**
 * Formats the date and time using the users locale e.g.: 09/29/2022 11:45:26 AM
 */
export function dateToLocaleString(date: Date) {
  return date ? date.toLocaleString(navigatorLanguage) : "";
}

/**
 * Formats the date using the users locale e.g.: 09/29/2022
 */
export function dateToLocaleDateString(date: Date) {
  return date ? date.toLocaleDateString(navigatorLanguage) : "";
}

/**
 * Formats the time using the users locale e.g.: 11:45:26 AM
 */
export function dateToLocaleTimeString(date: Date) {
  return date ? date.toLocaleTimeString(navigatorLanguage) : "";
}

/**
 * Formats the date and time using the users locale and the specified separator e.g.: 09/29/2022 · 11:45:26 AM
 */
export function dateToLocaleDateTimeString(date: Date, separator = "") {
  const sepText = separator ? ` ${separator} ` : " ";
  return date
    ? `${dateToLocaleDateString(date)}${sepText}${dateToLocaleTimeString(date)}`
    : "";
}

export const formatUSDBigNumber = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

export const formatBigNumber = (price) =>
  price.toLocaleString("en-GB", { timeZone: "UTC" });
