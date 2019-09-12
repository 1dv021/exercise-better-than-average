/**
 * The starting point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const ma = require('./src/my-array')

const arr = [
  { name: 'Stina', points: 1 },
  { name: 'Erik', points: 2 },
  { name: 'Maja', points: 3 },
  { name: 'Sven', points: 4 }
]

const result = ma.filterBetterThanAverage(arr)
console.log(result) // ['Maja', 'Sven']
