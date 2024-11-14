import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.get("/api/data", (req, res) => {
  const data = [
    {
      _id: "6606d9ab6fb9cbee37cba965",
      ip: "67.213.212.52",
      anonymityLevel: "elite",
      asn: "AS32780",
      city: "New York",
      country: "US",
      created_at: "2024-03-29T15:09:31.802Z",
      google: false,
      isp: "Hosting Services, Inc.",
      lastChecked: 1729144334,
      latency: 72.942,
      org: "Hosting Services, Inc.",
      port: "30071",
      protocols: ["socks4"],
      speed: 1,
      upTime: 83.51648351648352,
      upTimeSuccessCount: 1216,
      upTimeTryCount: 1456,
      updated_at: "2024-10-17T05:52:14.172Z",
      responseTime: 729,
    },
    {
      _id: "631db88b2fb0f02dd5fe856d",
      ip: "188.166.99.171",
      anonymityLevel: "elite",
      asn: "AS14061",
      city: "Amsterdam",
      country: "NL",
      created_at: "2022-09-11T10:29:31.231Z",
      google: false,
      isp: "DigitalOcean, LLC",
      lastChecked: "1729144332",
      latency: "11.624",
      org: "Digital Ocean",
      port: "18113",
      protocols: ["socks4"],
      region: null,
      responseTime: 959,
      speed: 1,
      updated_at: "2024-10-17T05:52:12.972Z",
      workingPercent: null,
      upTime: 99.95037836496714,
      upTimeSuccessCount: 8057,
      upTimeTryCount: 8061,
    },
    {
      _id: "670f783b6b79c1e0b5cf860c",
      ip: "35.223.155.249",
      anonymityLevel: "elite",
      asn: "AS396982",
      city: "Council Bluffs",
      country: "US",
      created_at: "2024-10-16T08:24:27.641Z",
      google: false,
      isp: "Google LLC",
      lastChecked: 1729144332,
      latency: 186.551,
      org: "Google Cloud (us-central1)",
      port: "80",
      protocols: ["http"],
      speed: 5001,
      upTime: 100,
      upTimeSuccessCount: 7,
      upTimeTryCount: 7,
      updated_at: "2024-10-17T05:52:12.466Z",
      responseTime: 615,
    },
  ];
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on the http://127.0.0.1:${port}`);
});
