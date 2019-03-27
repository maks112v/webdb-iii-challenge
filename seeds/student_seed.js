exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { id: 1, name: "Thee Josh", cohort_id: 1 },
        { id: 2, name: "Rory", cohort_id: 1 },
        { id: 3, name: "Gabe", cohort_id: 1 },
        { id: 4, name: "David", cohort_id: 1 },
        { id: 5, name: "Rory", cohort_id: 1 },
        { id: 6, name: "Other Josh", cohort_id: 1 },
        { id: 7, name: "Thomas", cohort_id: 1 }
      ]);
    });
};
