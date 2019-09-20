use person;
db.dropDatabase();

db.meals.insertMany([
  {
    meal: "burger",
    calories: 550
  },
  {
    meal: "sausage roll",
    calories: 450
  },
  {
    meal: "buritto",
    calories: 675
  }
])
