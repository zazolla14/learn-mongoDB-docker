// Insert spammer document
db.customers.insertOne({
  _id: "spammer",
  full_name: "Spammer",
})

// Delete document by _id
db.customers.deleteOne({
  _id: "spammer",
})

db.orders.deleteOne({
  items: {
    $type: "array",
  },
})

// Insert many spammer documents
db.customers.insertMany([
  {
    _id: "spammer1",
    full_name: "Spammer1",
  },
  {
    _id: "spammer2",
    full_name: "Spammer2",
  },
  {
    _id: "spammer3",
    full_name: "Spammer3",
  },
])

// Delete many documents
db.customers.deleteMany({
  _id: {
    $regex: "spammer",
  },
})

db.customers.deleteOne({
  _id: {
    $regex: /1$/,
  },
})

db.customers.deleteMany({
  full_name: {
    $regex: /spammer/i,
  },
})

db.products.updateOne(
  {
    _id: 9,
  },
  {
    $set: {
      tags: ["Snacks", "hot", "discount", "HypeByest", "Newcommer"],
    },
  }
)
