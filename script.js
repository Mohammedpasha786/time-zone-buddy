const { DateTime, Interval } = luxon;

async function getTimeZone(city) {
  const geoUrl = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&format=json&limit=1`;
  const response = await fetch(geoUrl);
  const data = await response.json();
  if (!data[0]) throw new Error("City not found");
  const lat = data[0].lat;
  const lon = data[0].lon;

  const tzUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=GET_YOUR_KEY&format=json&by=position&lat=${lat}&lng=${lon}`;
  throw new Error("To get full functionality, replace with your own timezone API or use local zone identifiers.");
}

function getLocalInterval(zone) {
  const now = DateTime.now().setZone(zone);
  const start = now.set({ hour: 9, minute: 0 });
  const end = now.set({ hour: 20, minute: 0 });
  return Interval.fromDateTimes(start.toUTC(), end.toUTC());
}

function findOverlap() {
  const input = document.getElementById("cities").value;
  const cities = input.split(",").map(c => c.trim());

  const fixedZones = {
    "New York": "America/New_York",
    "London": "Europe/London",
    "Tokyo": "Asia/Tokyo",
    "Delhi": "Asia/Kolkata",
    "Sydney": "Australia/Sydney"
  };

  let intervals = [];
  let output = "";

  for (let city of cities) {
    const zone = fixedZones[city];
    if (!zone) {
      output += `<p>❌ Timezone for ${city} not found (use: New York, London, Tokyo...)</p>`;
      continue;
    }
    const interval = getLocalInterval(zone);
    intervals.push({ city, zone, interval });
  }

  if (intervals.length < 2) {
    document.getElementById("results").innerHTML = "<p>Please enter at least two valid cities.</p>" + output;
    return;
  }

  let common = intervals[0].interval;
  for (let i = 1; i < intervals.length; i++) {
    common = common.intersection(intervals[i].interval);
  }

  if (!common) {
    document.getElementById("results").innerHTML = "<p>❌ No common time window found.</p>" + output;
    return;
  }

  output += `<p>✅ Common time window (UTC): ${common.start.toFormat("HH:mm")} – ${common.end.toFormat("HH:mm")}</p>`;

  for (let { city, zone } of intervals) {
    const startLocal = common.start.setZone(zone).toFormat("hh:mm a");
    const endLocal = common.end.setZone(zone).toFormat("hh:mm a");
    output += `<p>📍 ${city}: ${startLocal} – ${endLocal}</p>`;
  }

  document.getElementById("results").innerHTML = output;
}
