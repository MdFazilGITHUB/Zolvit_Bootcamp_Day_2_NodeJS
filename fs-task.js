const fs = require('fs');
const path = require('path');

const fileName = 'notes.txt';

const fileContent = 'This is my first note for Day 2 Node.js assignment.\n';
const additionalContent = 'Adding a second line to the note.\n';

const filePath = path.join(__dirname, fileName);

console.log(`Starting file operations on: ${filePath}\n`);

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return; 
  }
  console.log(`Successfully wrote initial content to "${fileName}".`);


  fs.appendFile(filePath, additionalContent, (err) => {
    if (err) {
      console.error('Error appending to file:', err);
      return;
    }
    console.log(`Successfully appended additional content to "${fileName}".`);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      console.log(`\n--- Content of "${fileName}" ---`);
      console.log(data);
      console.log(`--- End of "${fileName}" content ---\n`);
    });
  });
});

console.log('File operations initiated (asynchronous). The program will continue to run.');
console.log('The "Successfully wrote/read" messages will appear when operations complete.');
