use habitTracker;
db.dropDatabase();

db.meals.insertMany([
  {
    type: "breakfast",
    calories: 550,
    date: "2019-09-16"
  },
  {
    type: "lunch",
    calories: 875,
    date: "2019-09-16"
  },
  {
    type: "dinner",
    calories: 1200,
    date: "2019-09-16"
  },
  {
    type: "snack",
    calories: 150,
    date: "2019-09-16"
  },
  {
    type: "breakfast",
    calories: 515,
    date: "2019-09-17"
  },
  {
    type: "lunch",
    calories: 850,
    date: "2019-09-17"
  },
  {
    type: "dinner",
    calories: 900,
    date: "2019-09-17"
  },
  {
    type: "snack",
    calories: 75,
    date: "2019-09-17"
  },
  {
    type: "breakfast",
    calories: 550,
    date: "2019-09-18"
  },
  {
    type: "lunch",
    calories: 750,
    date: "2019-09-18"
  },
  {
    type: "dinner",
    calories: 800,
    date: "2019-09-18"
  },
  {
    type: "snack",
    calories: 100,
    date: "2019-09-18"
  },
  {
    type: "breakfast",
    calories: 450,
    date: "2019-09-19"
  },
  {
    type: "lunch",
    calories: 675,
    date: "2019-09-19"
  },
  {
    type: "dinner",
    calories: 875,
    date: "2019-09-19"
  },
  {
    type: "snack",
    calories: 75,
    date: "2019-09-19"
  },
  {
    type: "breakfast",
    calories: 550,
    date: "2019-09-20"
  },
  {
    type: "lunch",
    calories: 900,
    date: "2019-09-20"
  },
  {
    type: "dinner",
    calories: 425,
    date: "2019-09-20"
  },
  {
    type: "snack",
    calories: 225,
    date: "2019-09-20"
  },
])