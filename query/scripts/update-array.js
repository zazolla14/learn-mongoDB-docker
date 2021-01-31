// update products set ratings = [90, 80, 70]
db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
)

// update first element of array, query must include array fields
db.products.updateMany(
  {
    ratings: 90,
  },
  {
    $set: {
      "ratings.$": 100,
    },
  }
)

db.products.updateMany(
  {
    $and: [
      {
        category: "Food",
      },
      {
        ratings: 90,
      },
    ],
  },
  {
    $set: {
      "ratings.$": 100,
    },
  }
)

// update all element of array
db.products.updateMany(
  {},
  {
    $set: {
      "ratings.$[]": 100,
    },
  }
)

db.products.updateOne(
  {
    brand: "Asus",
  },
  {
    $set: {
      "ratings.$[]": 100,
    },
  }
)
db.products.updateMany(
  {},
  {
    $set: {
      "ratings.$[]": 100,
    },
  }
)

// update products set ratings = [90, 80, 70]
db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
)

// update element of array based on arrayFilters
db.products.updateMany(
  {},
  {
    $set: {
      "ratings.$[element]": 100,
    },
  },
  {
    arrayFilters: [
      {
        element: {
          $gte: 80,
        },
      },
    ],
  }
)

db.products.updateMany(
  {
    category: "Food",
  },
  {
    $set: {
      "ratings.$[e]": 100,
    },
  },
  {
    multi: true,
    arrayFilters: [
      {
        e: {
          $lt: 90,
        },
      },
    ],
  }
)

// update element of array with given index
db.products.updateMany(
  {},
  {
    $set: {
      "ratings.0": 50,
      "ratings.1": 60,
    },
  }
)

db.products.updateMany(
  {},
  {
    $set: {
      "ratings.0": 50,
      "ratings.1": 60,
    },
  }
)

// add "popular" to array if not exists
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $addToSet: {
      tags: "popular",
    },
  }
)

db.products.updateMany(
  {
    category: "Smartphone",
  },
  {
    $addToSet: {
      tags: "AI",
    },
  }
)

// remove first element of array
db.products.updateMany(
  {},
  {
    $pop: {
      ratings: -1,
    },
  }
)

db.products.updateMany(
  {
    category: "Smartphone",
  },
  {
    $pop: {
      tags: 1,
    },
  }
)

// update products set rating = [90, 80, 70]
db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
)

// remove all element where ratings >= 80
db.products.updateMany(
  {},
  {
    $pull: {
      ratings: {
        $gte: 80,
      },
    },
  }
)

db.products.updateMany(
  {
    category: "Food",
  },
  {
    $pull: {
      ratings: {
        $lte: 60,
      },
    },
  }
)

// add 100 to ratings
db.products.updateMany(
  {},
  {
    $push: {
      ratings: 100,
    },
  }
)

db.products.updateMany(
  {
    category: "Food",
  },
  {
    $push: {
      ratings: 80,
    },
  }
)

// remove element 100
db.products.updateMany(
  {},
  {
    $pullAll: {
      ratings: [100],
    },
  }
)

db.products.updateMany(
  {},
  {
    $pullAll: {
      ratings: [50],
    },
  }
)

// add 100, 200, 300 to ratings
db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300],
      },
    },
  }
)

db.products.updateMany(
  {
    _id: {
      $lt: 4,
    },
  },
  {
    $push: {
      ratings: {
        $each: [70, 80],
      },
    },
  }
)

// add trending, popular to tags
db.products.updateMany(
  {},
  {
    $addToSet: {
      tags: {
        $each: ["trending", "popular"],
      },
    },
  }
)

db.products.updateMany(
  {
    _id: {
      $gte: 4,
    },
  },
  {
    $addToSet: {
      tags: {
        $each: ["Newcommer", "Mie", "Snacks"],
      },
    },
  }
)

// add hot in posititon 1
db.products.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["hot"],
        $position: 1,
      },
    },
  }
)

db.products.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["hot", "discount"],
        $position: 1,
      },
    },
  }
)

// add all element, but limit with slice
db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300, 400, 500],
        $slice: -5,
      },
    },
  }
)

db.products.updateMany(
  {
    _id: {
      $gte: 4,
    },
  },
  {
    $push: {
      ratings: {
        $each: [1, 2, 3, 4, 5, 6],
        $slice: -5,
      },
    },
  }
)

// add all element, and sort desc
db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300, 400, 500],
        $sort: -1,
      },
    },
  }
)

db.products.updateMany(
  {
    category: "Smartphone",
  },
  {
    $push: {
      ratings: {
        $each: [2, 4, 3, 1, 5],
        $slice: -5,
        $sort: -1,
      },
    },
  }
)

db.products.updateMany(
  {
    category: "Smartphone",
  },
  {
    $push: {
      ratings: {
        $each: [3, 4, 5],
        $slice: 5,
        $sort: -1,
      },
    },
  }
)
