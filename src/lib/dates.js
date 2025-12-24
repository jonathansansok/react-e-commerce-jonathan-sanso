export const pad2 = (n) => String(n).padStart(2, "0");

export const toISODate = (d) => {
  const y = d.getFullYear();
  const m = pad2(d.getMonth() + 1);
  const day = pad2(d.getDate());
  return `${y}-${m}-${day}`;
};

export const addDaysISO = (iso, days) => {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + days);
  return toISODate(dt);
};

export const formatDMY = (iso) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

export const todayISO = () => toISODate(new Date());

export const futureLimitISO = (yearsAhead = 2) => {
  const dt = new Date();
  dt.setFullYear(dt.getFullYear() + yearsAhead);
  return toISODate(dt);
};
