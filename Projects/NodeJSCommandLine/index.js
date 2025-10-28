#!/usr/bin/env node


import fs from 'fs';
import util from 'util';
import path from 'path'''
import chalk from 'chalk';


// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

// GOOD AND FINAL SOLUTION

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    throw new Error(err)
  }

  const statPromises = filenames.map(filename => {
    return lstat(path.join(targetDir, filename));
  })

  const allStats = await Promise.all(statPromises);

  for (const stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
        console.log(filenames[index]);
    } else {
        console.log(chalk.green(filenames[index]));
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
