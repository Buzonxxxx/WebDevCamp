const asyncOne = async () => 'one';
const asyncTwo = async () => 'two';

const asynctThree = async () => {
  const one = await asyncOne();
  const two = await asyncTwo();
  console.log(one, two);
};

async function asyncFour() {
  const [resOne, resTwo] = await Promise.all([asyncOne(), asyncTwo()]);
  console.log(resOne, resTwo);
}

asynctThree();
asyncFour();
