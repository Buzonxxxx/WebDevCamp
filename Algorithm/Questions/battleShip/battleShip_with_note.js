function countBattleships(N, S, T) {
  // N: 4
  // S: "1B 2C,2D 4D"
  // T: "2B 2D 3D 4D 4A"
  const ships = S !== "" ? parseShips(S) : []
  // ships = [ { cells: Set(4) { '1B', '1C', '2B', '2C' } }, { cells: Set(3) { '2D', '3D', '4D' } } ]
  const hits = parseHits(T);
  // hits: Set(5) { '2B', '2D', '3D', '4D', '4A' }
  let sunkCount = 0;
  let hitCount = 0;

  for (const ship of ships) {
    let hitCells = 0;

    for (const cell of ship.cells) {
      if (hits.has(cell)) {
        hitCells++;
      }
    }
    
    if (hitCells === ship.cells.size) {
      sunkCount++;
    } else if (hitCells > 0) {
      hitCount++;
    }
  }

  return `${sunkCount},${hitCount}`;
}

function parseShips(S) {
  const ships = [];
  const shipPairs = S.split(','); 
  // [ '1B 2C', '2D 4D' ]

  for (const pair of shipPairs) {
    const [topLeft, bottomRight] = pair.split(' ');
    // topLeft = "1B", bottomRight = "2C"
    
    const [topRow, leftCol] = parsePosition(topLeft);
    const [bottomRow, rightCol] = parsePosition(bottomRight);
    // 1B => topRow: 1 leftCol: 2
    // 2C => bottomRow: 2 rightCol: 3
    

    const cells = new Set();
    // get all cells of a ship
    for (let i = topRow; i <= bottomRow; i++) {
      for (let j = leftCol; j <= rightCol; j++) {
        // i,j: 1,2 1,3 2,2 2,3
        cells.add(encodePosition(i, j));
      }
    }
    // cells = Set(4) { '1B', '1C', '2B', '2C' }
    ships.push({ cells });
  }
  // ships = [ { cells: Set(4) { '1B', '1C', '2B', '2C' } }, { cells: Set(3) { '2D', '3D', '4D' } } ]
  return ships;
}

function parseHits(T) {
  const hits = new Set();
  const hitCells = T.split(' ');
  // hitCells = [ '2B', '2D', '3D', '4D', '4A' ]
  for (const cell of hitCells) {
    hits.add(cell);
  }
  // hits: Set(5) { '2B', '2D', '3D', '4D', '4A' }
  return hits;
}

function parsePosition(position) { // 1B
  // Get row
  // convert str to int and remove the last char
  const row = parseInt(position.slice(0, -1)); 
  // row = 1

  // Get Column
  const col = position.charCodeAt(position.length - 1) - 'A'.charCodeAt(0) + 1; 
  // '1B'.charCodeAt(1) - 'A'.charCodeAt(0) + 1
  // 66 - 65 + 1 = 2
  // col = 2
  return [row, col]; // [1, 2]
}

function encodePosition(row, col) {
  // convert unicode to char
  const colChar = String.fromCharCode('A'.charCodeAt(0) + col - 1);
  // colChar = 'B'
  return `${row}${colChar}`; // '1B'
}

console.log(countBattleships(4, "1B 2C,2D 4D", "2B 2D 3D 4D 4A")) // 1,1
console.log(countBattleships(3, "1A 1B,2C 2C", "1B")) // 0,1
console.log(countBattleships(12, "1A 2A,12A 12A", "12A")) // 1,0
console.log(countBattleships(2, "", "2A")) // 0,0