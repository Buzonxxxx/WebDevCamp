// John plays a game of battleships with his friend Sonia. The game is played on a square map of N rows, numbered from 1 to N. 
// Each row contains N cells, labeled with consecutive English upper-case letters (A, B, C, etc.). Each cell is identified by a string composed of its row number followed by its column number: 
// for example, "9C" denotes the third cell in the 9th row, and "15D" denotes the fourth cell in the 15th row.

// John marks the positions of all his ships on the map (which is not shown to Sonia). Ships are defined by rectangles with a maximum area of 4 cells. Sonia picks map cells to hit some ships. 
// A ship is considered to be hit if at least one of its constituent cells is hit. If all of a ship's cells are hit, the ship is sunk.

// The goal is to count the number of sunk ships and the number of ships that have been hit but not sunk.
// For example, the picture below shows a map of size N = 4 with two blue ships and five hits marked with the letter 'X':

// N: size of map
// S: ships
// T: hits
// return (sunk ships),(ships that have been hit but not sunk)

// countBattleships(4, "1B 2C,2D 4D", "2B 2D 3D 4D 4A") => 1,1

// Get ships cells and hit cells
// if ship cell in hits cell, hitCells++
// if hitCells === ship cells size, sunkCount++
//  else if hitCells > 0, hitCount++

function countBattleShips(N, S, T) {
  const ships = S !== "" ? parseShips(S) : []
  const hits = parseHits(T)

  let sunkCount = 0
  let hitCount = 0

  for (const ship of ships) {
    let hitCells = 0
    for (const cell of ship.cells) {
      if (hits.has(cell)) {
        hitCells++
      }
    }
    if (hitCells === ship.cells.size) {
      sunkCount++
    } else if (hitCells > 0) {
      hitCount++
    }
  }
return `${sunkCount},${hitCount}`
}

const parseShips = (S) => {
  const ships = []
  const shipPairs = S.split(',')

  for (const pair of shipPairs) {
    const [topLeft, bottomRight] = pair.split(' ')
    
    const [topRow, leftCol] = parsePosition(topLeft)
    const [bottomRow, rightCol] = parsePosition(bottomRight)

    const cells = new Set()
    for (let i = topRow; i <= bottomRow; i++) {
      for (let j = leftCol; j <= rightCol; j++) {
        cells.add(encodePosition(i, j))
      }
    }
    ships.push({ cells: cells })
  }
  return ships
}

const parseHits = (T) => {
  const hits = new Set()
  const hitCells = T.split(' ')
  for (const cell of hitCells) {
    hits.add(cell)
  }
  return hits
}

const parsePosition = (position) => {
  const row = parseInt(position.slice(0, -1))
  const col = position.charCodeAt(position.length - 1) - 'A'.charCodeAt(0) + 1
  return [row, col]
}

const encodePosition = (row, col) => {
  const colChar = String.fromCharCode('A'.charCodeAt(0) + col - 1)
  return `${row}${colChar}`
}

console.log(countBattleShips(4, "1B 2C,2D 4D", "2B 2D 3D 4D 4A")) // 1,1
console.log(countBattleShips(3, "1A 1B,2C 2C", "1B")) // 0,1
console.log(countBattleShips(12, "1A 2A,12A 12A", "12A")) // 1,0
console.log(countBattleShips(2, "", "2A")) // 0,0