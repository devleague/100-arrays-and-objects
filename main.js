

var hawaiianIslands = [
  'Hawaii',
  'Maui',
  'Oahu',
  'Kauai',
  'Molokai',
  'Lanai',
  'Niihau',
  'Kahoolawe'
];

var calendarMonths = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

var secretary_generals = [
  {
    name: "Gladwyn Jebb",
    origin_country: "United Kingdom",
    regional_group: "Western European & Others",
    reason_of_withdrawl: "Served as Acting Secretary-General until Lie's election."
  },
  {
    name: "Trygve Lie",
    origin_country: "Norway",
    regional_group: "Western European & Others",
    reason_of_withdrawl: "Resigned."
  },
  {
    name: "Dag Hammarskjöld",
    origin_country: "Sweden",
    regional_group: "Western European & Others",
    reason_of_withdrawl: "Died in a plane crash in Northern Rhodesia (now Zambia), while on a peacekeeping mission to the Congo."
  },
  {
    name: "U Thant",
    origin_country: "Burma",
    regional_group: "Asia-Pacific",
    reason_of_withdrawl: "Declined to stand for a third election."
  },
  {
    name: "Kurt Waldheim",
    origin_country: "Austria",
    regional_group: "Western European & Others",
    reason_of_withdrawl: "China vetoed his third term."
  },
  {
    name: "Javier Pérez de Cuéllar",
    origin_country: "Peru",
    regional_group: "Latin American & Caribbean",
    reason_of_withdrawl: "Did not stand for a third term."
  },
  {
    name: "Boutros Boutros-Ghali",
    origin_country: "Egypt",
    regional_group: "African",
    reason_of_withdrawl: "The United States vetoed his second term."
  },
  {
    name: "Kofi Annan",
    origin_country: "Ghana",
    regional_group: "African",
    reason_of_withdrawl: "Retired after two full terms."
  },
  {
    name: "Ban Ki-moon",
    origin_country: "South Korea",
    regional_group: "Asia-Pacific",
    reason_of_withdrawl: "Incumbent"
  }
];

var users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990"
      }
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services"
    }
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342"
      }
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems"
    }
  }
];


// DO YOUR WORK INSIDE OF THIS OBJECT `module.exports.answers`
// 
// Remember that properties are comma separated
// 

module.exports.answers = {
  // 
  // Create properties names for each of the 9 major islands
  // 
  // Assigned their value to be the result of accessing
  // the data in the `hawaiianIslands` array from above.
  // for example: add a property named `oahu` and assign
  // it's value to be hawaiianIslands[2]
  // 
  oahu: hawaiianIslands[2]


};