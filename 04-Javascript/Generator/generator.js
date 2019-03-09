function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash
  const stuffFronStore = yield 'cash';

  // walking back home
  return stuffFronStore
}

const gen = shopping();
gen.next(); // leaving our house
// walked into the store
// walking up and down the aisles..
// purchase our stuff
gen.next('groceries'); // leaving the store with groceries
