const personAccount = {
  firstName: "",
  lastName: "",
  incomes: [],
  expenses: [],
  totalIncome: function () {
    const incomesValues = Object.values(this.incomes);
    let sum = 0;
    for (let i = 0; i < incomesValues.length; i++) {
      sum += Number(incomesValues[i][0]);
    }
    return sum;
  },
  totalExpense: function () {
    const expensesValues = Object.values(this.expenses);
    let sum = 0;
    for (let i = 0; i < expensesValues.length; i++) {
      sum += Number(expensesValues[i][0]);
    }
    return sum;
  },
  accountInfo: function () {
    function printInfo(arr) {
      let aux = "";
      for (let i = 0; i < arr.length; i++) {
        let value = arr[i][0].toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
        let description = arr[i][1];
        let join = `${value} - ${description}`;
        aux += `\n\t${join}`;
      }
      return aux;
    }
    let totalIcomes = this.totalIncome();
    let totalExpenses = this.totalExpense();

    let accountInfoResult = `Firt Name: ${this.firstName} \nLast Name: ${
      this.lastName
    } \nIncomes: ${printInfo(this.incomes)} \nExpenses: ${printInfo(
      this.expenses
    )} \nTotal Inconmes: ${totalIcomes.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })} \nTotal Expenses: ${totalExpenses.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })} \nAccount Balance: ${this.accountBalance()}
    `;

    return accountInfoResult;
  },
  addIncome: function (income, description) {
    this.incomes.push([income, description]);
  },
  addExpense: function (income, description) {
    this.expenses.push([income, description]);
  },
  accountBalance: function () {
    let result = this.totalIncome() - this.totalExpense();
    return result.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  },
};

personAccount.firstName = "Elizabeth";
personAccount.lastName = "Antonelle";
personAccount.addIncome(3000, "Salary");
personAccount.addIncome(1000, "Bonus");
personAccount.addExpense(1000, "Rent");
personAccount.addExpense(200, "Water");
personAccount.addExpense(200, "Light");
personAccount.addExpense(100, "Internet");
personAccount.addExpense(1000, "Food");
console.log(personAccount.accountInfo());

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

function signUp(userName) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === userName) {
      return "User has already an anccount";
    }
  }
  return "User doesn't have an anccount";
}
console.log(signUp("Asab"));

function signIn(userName, email, password, isLoggedIn = false) {
  function userIdGenerator() {
    const alphanumeric = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "X",
      "W",
      "Y",
      "Z",
    ];
    let randomCharacters = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * alphanumeric.length);
      randomCharacters += alphanumeric[index];
    }
    return randomCharacters;
  }

  const date = new Date().toLocaleDateString("en-US");
  const hour = new Date().toLocaleTimeString("en-US", { timeStyle: "short" });

  const newAccount = {
    _id: `${userIdGenerator()}`,
    username: `${userName}`,
    email: `${email}`,
    password: `${password}`,
    createdAt: `${date} ${hour}`,
    isLoggedIn: `${isLoggedIn}`,
  };
  return (users[users.length] = newAccount);
}
console.log(signIn("Noah", "noah@noah.com", "123456", true));
console.log(users);

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function rateProduct(productName, userId, rate) {
  let auxObject = {
    userId: `${userId}`,
    rate: rate,
  };
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase() === productName.toLowerCase()) {
      products[i].ratings.push(auxObject);
    }
  }
}
console.log(rateProduct("laptop", "eefamr", 4));

function averageRating(productName) {
  let sum = 0;
  let media;
  for (let i = 0; i < products.length; i++) {
    let logicalTest =
      products[i].name.toLowerCase() === productName.toLowerCase();
    if (products[i].ratings == "" && logicalTest === true) {
      return "There are no ratings for this product";
    } else if (logicalTest) {
      for (let c = 0; c < products[i].ratings.length; c++) {
        sum += Number(products[i].ratings[c].rate);
        media = sum / products[i].ratings.length;
      }
    }
  }
  return media;
}
console.log(averageRating("mobile phone"));

function likeProduct(userId, productName) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase() === productName.toLowerCase()) {
      for (let c = 0; c < products[i].likes.length; c++) {
        let userLikedIndex = products[i].likes.indexOf(userId);
        if (userLikedIndex === -1) {
          products[i].likes.push(userId);
          return `You liked the ${productName} product.`;
        } else {
          products[i].likes.splice(userLikedIndex, 1);
          return `You disliked the ${productName} product.`;
        }
      }
    }
  }
}
console.log(likeProduct("zwf8md", "tv"));
