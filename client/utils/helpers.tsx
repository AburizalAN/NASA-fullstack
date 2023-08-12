export function cleanPayload(values: any) {
  const payload: any = {};
  for (const key in values) {
    const value = values[key];
    if (
      value === null ||
      value === undefined ||
      (typeof value === "string" && value.trim().length == 0)
    ) {
      continue;
    }
    payload[key] = value;
  }
  return payload;
}

export function queryString(payload: any) {
  return decodeURIComponent(new URLSearchParams(payload).toString());
}

export const toNumber = (value: any) => new Intl.NumberFormat("id-ID").format(value);

export const toRupiah = (value: any) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);