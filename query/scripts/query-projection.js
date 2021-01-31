// select _id, name, category from products
db.products.find(
  {},
  {
    name: 1,
    category: 1,
  }
)

// select _id, name, category, price from products
db.products.find(
  {},
  {
    tags: 0,
  }
)

db.products.find({}, { sku: 0 })
db.products.find(
  {
    _id: { $lte: 7 },
  },
  {
    name: 1,
  }
)
db.products.find(
  {
    category: {
      $exists: true,
    },
  },
  {
    name: 1,
    category: 1,
  }
)
db.products.find(
  {
    tags: {
      $exists: true,
      $elemMatch: {
        $in: ["logitech", "cooler", "samsung"],
      },
    },
  },
  {
    name: 1,
    "tags.$": 1,
  }
)

// select _id, name, category, price, tags[first] from products where tags in ("samsung", "logitech")
db.products.find(
  {
    tags: {
      $elemMatch: {
        $in: ["samsung", "logitech"],
      },
    },
  },
  {
    name: 1,
    category: 1,
    price: 1,
    "tags.$": 1,
  }
)

// select _id, name, category, price, tags(in ("samsung", "logitech")) from products
db.products.find(
  {},
  {
    name: 1,
    category: 1,
    price: 1,
    tags: {
      $elemMatch: {
        $in: ["samsung", "logitech"],
      },
    },
  }
)

db.products.find(
  {
    $or: [
      {
        name: {
          $exists: true,
        },
      },
      {
        tags: {
          $exists: true,
        },
      },
    ],
  },
  {
    name: 1,
    tags: {
      $elemMatch: {
        $in: ["accessories"],
      },
    },
  }
)

// select *, score from products where $search like "monitor"
db.products.find(
  {
    $text: {
      $search: "monitor",
    },
  },
  {
    score: {
      $meta: "textScore",
    },
  }
)

db.products.find(
  {
    $text: {
      $search: "node.js",
    },
  },
  {
    score: {
      $meta: "textScore",
    },
  }
)

// select _id, name, price, category, tags[0,2] from products
db.products.find(
  {},
  {
    tags: {
      $slice: 2,
    },
  }
)

db.products.find(
  {
    tags: {
      $exists: true,
    },
  },
  {
    name: 1,
    tags: {
      $slice: 2,
    },
  }
)

// select _id, name, price, category, tags[last 2] from products
db.products.find(
  {},
  {
    tags: {
      $slice: -2,
    },
  }
)

// select _id, name, price, category, tags[from, limit] from products
db.products.find(
  {
    _id: 9,
    tags: {
      $exists: true,
    },
  },
  {
    tags: {
      $slice: [1, 2],
    },
  }
)
