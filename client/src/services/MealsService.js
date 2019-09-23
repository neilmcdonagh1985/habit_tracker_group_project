const baseURL = 'http://localhost:3000/api/meals/';

export default {
  addMeal(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json());
  },
  getMeals() {
    return fetch(baseURL).then(res => res.json());
  }
};
