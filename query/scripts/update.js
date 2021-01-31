// update products set category = "food" where _id = 1
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $set: {
      category: "food",
    },
  }
)

db.products.updateOne(
  {
    _id: 1,
  },
  {
    $set: {
      name: "Asus Rog Phone",
      brand: "Asus",
      category: "Smartphone",
    },
  }
)

// update products set category = "food" where _id = 2
db.products.updateOne(
  {
    _id: 2,
  },
  {
    $set: {
      category: "food",
    },
  }
)

// update products set tags = ["food"] where category = "food" and tags is null
db.products.updateMany(
  {
    $and: [
      {
        category: {
          $eq: "food",
        },
      },
      {
        tags: {
          $exists: false,
        },
      },
    ],
  },
  {
    $set: {
      tags: ["food"],
    },
  }
)

db.products.updateMany(
  {
    $and: [
      {
        tags: {
          $exists: true,
        },
      },
      {
        category: {
          $regex: "food",
          $options: "i",
        },
      },
    ],
  },
  {
    $set: {
      tags: ["Mie", "Goreng", "Kuah", "Hot"],
    },
  }
)

// update products set wrong = "wrong"
db.products.updateMany({}, [
  {
    $set: {
      wrong: "wrong",
      salah: "salah",
    },
  },
])

// update products set wrong = null
db.products.updateMany({}, [
  {
    $set: {
      wrong: null,
    },
  },
  {
    $unset: "salah",
  },
])

db.products.updateMany({}, [
  {
    $unset: "wrong",
  },
])

// insert wrong document
db.products.insertOne({
  _id: 9,
  name: "Ups Salah",
  wrong: "Salah Lagi",
})

// replace document with id 9
db.products.replaceOne(
  {
    _id: 9,
  },
  {
    name: "Adidas Pulseboost HD Running Shoes Sepatu lari Pria",
    price: new NumberLong(1100000),
    category: "shoes",
    tags: ["adidas", "shoes", "running"],
  }
)

db.products.replaceOne(
  { _id: 9 },
  {
    name: "Oreo Suprime",
    price: new NumberLong(500000),
    category: "Food",
    tags: ["Snacks", "HypeByest"],
  }
)
