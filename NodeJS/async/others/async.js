const async_one = async () => 'one';
const async_two = async () => 'two';

const async_three = async() => {
  const one = await async_one()
  const two = await async_two()
  console.log(one, two)
}

async function async_four() {
  const [res_one, res_two] = await Promise.all([async_one(), async_two()])
  console.log(res_one, res_two)
}

async_three();
async_four();