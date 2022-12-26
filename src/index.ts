// myPackage.js → myPackage.d.ts → index.ts
import { init, exit } from "myPackage";

init({
  url: "true",
});

exit(1);
