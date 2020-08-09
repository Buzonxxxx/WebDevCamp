const users = [
  {
    id: 1,
    name: 'Andrew',
    schoolId: 101,
  },
  {
    id: 2,
    name: 'Jessica',
    schoolId: 999,
  },
];
const grades = [
  {
    id: 1,
    schoolId: 101,
    grade: 86,
  },
  {
    id: 2,
    schoolId: 999,
    grade: 100,
  },
  {
    id: 3,
    schoolId: 101,
    grade: 80,
  },
];

const getUser = (id) => new Promise((resolve, reject) => {
  const user = users.find((_user) => _user.id === id);
  if (user) {
    resolve(user);
  } else {
    reject(new Error(`Unable to find user with id of ${id}`));
  }
});

const getGrades = (schoolId) => new Promise((resolve, reject) => {
  resolve(grades.filter((grade) => grade.schoolId === schoolId));
  reject(new Error('something bad happened'));
});
// Andrew has a 83% in the class
const getStatus = (userID) => {
  let user;
  return getUser(userID)
    .then((tempUser) => {
      user = tempUser;
      return getGrades(user.schoolId);
    })
    .then((_grades) => {
      let average = 0;
      if (_grades.length > 0) {
        average = _grades.map((grade) => grade.grade).reduce((a, b) => a + b)
          / _grades.length;
      }
      return `${user.name} has a ${average}% in class`;
    });
};

getStatus(1)
  .then((status) => {
    console.log(status);
  })
  .catch((e) => {
    console.log(e);
  });

// async / await way
const getStatusAlt = async (userID) => {
  const user = await getUser(userID);
  const myGrades = await getGrades(user.schoolId);
  let average = 0;

  if (myGrades.length > 0) {
    average = myGrades.map((grade) => grade.grade).reduce((a, b) => a + b) / myGrades.length;
  }
  return `${user.name} has a ${average}% in class`;
};

getStatusAlt(1)
  .then((status) => {
    console.log(status);
  })
  .catch((e) => {
    console.log(e);
  });
