exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("restaurants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("restaurants").insert([
        {
          id: 1,
          name: "Taco Bell",
          city: "Austin",
          address: "1925 Airport Blvd",
          description: "Cheap tacos"
        },
        {
          id: 2,
          name: "In-n-out",
          city: "West Valley City",
          address: "3715 Constitution Blvd",
          description: "Nothing fancy here. Just okay hamburgers"
        },
        {
          id: 3,
          name: "Popeyes",
          city: "New Orleans",
          address: "621 Canal St",
          description: "It's better than KFC I guess. Louisiana Special"
        },
        {
          id: 4,
          name: "Rancheritos",
          city: "Centerville",
          address: "343 Frontage Rd",
          description: "Authentic, cheap, and not healty mexican food"
        },
        {
          id: 5,
          name: "Lapisara Eatery",
          city: "San Francisco",
          address: "698 Post St",
          description: "Yummy brunch spot"
        },
        {
          id: 6,
          name: "Cafe Rio",
          city: "Denver",
          address: "6907 S University Blvd A",
          description: "Fantastic fresh mexican food with american twist"
        },
        {
          id: 7,
          name: "Chic-fil-a",
          city: "Las Vegas",
          address: "1991 N Rainbow Blvd",
          description:
            "Pretty solid chicken sandwhiches and friendly, quick, service"
        },
        {
          id: 8,
          name: "Joe’s Kansas City Barbecue",
          city: "Kansas City",
          address: "3002 West 47th Ave",
          description: "Best BBQ in the country hands down"
        },
        {
          id: 9,
          name: "KFC",
          city: "Atlanta",
          address: "23 Joseph E Lowery Blvd SW",
          description: "Pretty underwhelming chicken"
        },
        {
          id: 10,
          name: "Little Ceasers",
          city: "Chicago",
          address: "3135 W Addison St",
          description: "Cheap and quick pizza"
        }
      ]);
    });
};
