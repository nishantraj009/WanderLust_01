const sampleListings = [
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
       url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Ocean Breeze Villa",
    description:
      "Enjoy the sound of the waves from this luxury villa with a private beach.",
    image: {
    filename:"listingimage" ,
    url: "https://caribbeanloftsbonaire.com/wp-content/uploads/2022/10/Ocean-Breeze-Villa-True-media-culture-74-1-scaled.jpg",
    },
    price: 2500,
    location: "Goa",
    country: "India",
  },
  {
    title: "Desert Oasis",
    description:
      "A modern stay in the heart of the desert. Perfect for stargazing.",
    image: {
    filename: "listingimage",
    url:"https://wallpapercave.com/wp/wp4505666.jpg",
    },
    price: 1800,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Forest Hideaway",
    description:
      "Hidden in a lush forest, this cabin offers tranquility and a chance to connect with nature.",
    image: {
      filename: "listingimage",
      url:
        "https://images.unsplash.com/photo-1593217188322-6a547f02ddb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8cGF0aCUyMGZvcndhcmR8fDB8fHx8MTYyNTc3NjgzNQ",
    },
    price: 900,
    location: "British Columbia",
    country: "Canada",
  },
  {
    title: "Urban Chic Apartment",
    description:
      "Stay in a stylish apartment in the heart of the city with skyline views.",
    image: {
      filename: "listingimage",
      url:
        "https://www.my-urbanchic.com/wp-content/uploads/2023/07/image-64.jpg",
    },
    price: 2200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "New York Skyline Loft",
    description:
      "Stunning loft apartment with panoramic views of Manhattan skyline and Central Park.",
    image: {
      filename: "listingimage",
      url:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "New York",
    country: "USA",
  },
  {
    title: "Parisian Artist Attic",
    description:
      "Charming artist's attic in Montmartre with Eiffel Tower views and vintage decor.",
    image: {
      filename: "listingimage",
      url:

      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1750,
    location: "Paris",
    country: "France",
  },
  {
    title: "Sydney Harbour Penthouse",
    description:
      "Luxury penthouse with private balcony overlooking Sydney Opera House and Harbour Bridge.",
    image: {
      filename : "listingimage",
      url: "https://images.trvl-media.com/lodging/106000000/105830000/105824500/105824445/d211f89b_z.jpg",
    },
    price: 3850,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Rio Beachfront Villa",
    description:
      "Modern villa with direct access to Copacabana beach and infinity pool overlooking the ocean.",
    image: {
      filename: "listingimage",
      url:  
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Rio de Janeiro",
    country: "Brazil",
  },
  {
    title: "Cape Town Mountain Retreat",
    description:
      "Architect-designed retreat nestled beneath Table Mountain with panoramic city and ocean views.",
    image: {
      filename: "listingimage",
      url:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Cape Town",
    country: "South Africa",
  },
  {
    title: "Bali Jungle Treehouse",
    description:
      "Eco-friendly treehouse suspended above jungle canopy with private waterfall access.",
    image: {
      filename: "listingimage",
      url:
    "https://img.freepik.com/premium-photo/elevated-treehouse-with-stunning-tropical-rainforest-view_1258-263359.jpg?w=2000"
    },
    price: 890,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Banff Mountain Cabin",
    description:
      "Rustic log cabin with hot tub overlooking glacial lakes and Canadian Rockies wilderness.",
    image: {
      filename: "listingimage",
      url:

      "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1950,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Queenstown Adventure Pod",
    description:
      "Modern geodesic dome with floor-to-ceiling views of Lake Wakatipu and The Remarkables mountain range.",
    image: {
      filename: "listingimage",
      url:
      "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1650,
    location: "Queenstown",
    country: "New Zealand",

  },
];

module.exports = { data: sampleListings };