#!/usr/bin/env node

const fs = require('fs');
const util = require('util');

const chalk = require('chalk');


// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
const { lstat } = fs.promises;

// GOOD AND FINAL SOLUTION

fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) {
    throw new Error(err)
  }

  const statPromises = filenames.map(filename => {
    return lstat(filename);
  })

  const allStats = await Promise.all(statPromises);

  for (const stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
        console.log(filenames[index]);
    } else {
        console.log(chalk.bold(filenames[index]));
    }
  }

});

// Method #1
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }

//       resolve(stats);
//     });
//   });
// };
