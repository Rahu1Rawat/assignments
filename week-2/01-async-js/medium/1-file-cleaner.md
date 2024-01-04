## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

```javascript
I used the simple replace method for removing the spaces.
const fs = require("fs");

fs.readFile("A.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("An error occurred: ", err);
    return;
  }
  console.log("Original File Content: ", data);
  const removeWhiteSpace = data.replace(/\s+/g, " ");

  fs.writeFile("A.txt", removeWhiteSpace, "utf-8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log();
    console.log("Extra spaces have been removed successfully!");
    console.log();

    fs.readFile("A.txt", "utf-8", (err, data) => {
      if (err) {
        console.error("An error has occurred: ", err);
        return;
      }
      console.log("File after extra spaces have been removed: ", data);
    });
  });
});
```

