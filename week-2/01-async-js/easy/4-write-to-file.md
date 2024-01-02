## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

```javascript
const fs = require("fs");
const dataToWrite = "Hi Today is 2nd january and I am writing to the File!";

fs.readFile("A.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("An error has occurred:", err);
    return;
  }
  console.log(data);
  
  fs.writeFile("A.txt", dataToWrite, "utf-8", (err) => {
    if (err) {
      console.error("And error has occurred:", err);
      return;
    }
    fs.readFile("A.txt", "utf-8", (err, data) => {
      if (err) {
        console.log("An error has occurred:", err);
        return;
      }
      console.log(data);
    });
  });
});
```
