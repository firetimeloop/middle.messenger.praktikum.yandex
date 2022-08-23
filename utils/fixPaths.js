const fs = require('fs');
const path = require('path');

const distDirectoryPath = path.join(__dirname, '..', 'dist');

fs.readdir(distDirectoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
      const fileNameParts = file.split('.');
      const fileExtention = fileNameParts[fileNameParts.length - 1];
      if (fileExtention !== 'html') {
        return;
      }

      const filePath = path.join(distDirectoryPath, file);

      fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
          return console.log('Unable to read file: ' + err);
        }

        let result = data.replace(/<link rel="stylesheet" href="\//g, '<link rel="stylesheet" href="');

        if (file === 'index.html') {
          result = result.replace(/<a class="link" href="\//g, '<a class="link" href="');
        }

        fs.writeFile(filePath, result, 'utf8', function (err) {
           if (err) return console.log(err);
        });
      });
    });
});