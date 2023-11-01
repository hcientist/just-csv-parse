import { setupCounter } from "./counter.js";
import { parse } from "https://unpkg.com/csv-parse@5.5.2/dist/esm/sync.js";



setupCounter(document.querySelector("#counter"));

fetch("beg-band-hcb-melody-and-basslines-from-flat.io.csv")
  .then((r) => r.text())
  .then((t) =>
    parse(t, {
      columns: true,
      skip_empty_lines: true,
    })
  )
  .then(console.log);
