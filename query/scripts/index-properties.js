// Create session collection
db.createCollection("sessions", {
  validationAction: "error",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        createDate: {
          bsonType: "date",
        },
      },
    },
  },
})

// Create TTL Index
db.sessions.createIndex(
  {
    createdAt: 1,
  },
  {
    expireAfterSeconds: 10,
  }
)

db.session.createIndex(
  {
    createDate: 1,
  },
  {
    expireAfterSeconds: 10,
  }
)

// Will expire after 10 seconds, but background job run every 60 seconds
db.sessions.insertOne({
  _id: 1,
  session: "Session 1",
  createdAt: new Date(),
})

// Update all customers email
db.customers.updateMany({}, [
  {
    $set: {
      email: {
        $concat: ["$_id", "@", "example.com"],
      },
    },
  },
])

db.customers.updateMany({}, [
  {
    $set: {
      email: {
        $concat: ["$_id", "@", "gmail.com"],
      },
    },
  },
])

// Create unique index
db.customers.createIndex(
  {
    email: 1,
  },
  {
    unique: true,
  }
)

db.customers.createIndex(
  {
    email: 1,
  },
  {
    unique: true,
  }
)

// failed duplicate email
db.customers.insertOne({
  _id: "gagal",
  full_name: "Gagal",
  email: "eko@example.com",
})

db.customers.insertOne({
  _id: "Salah",
  full_name: "Dety",
  email: "Dety@gmail.com",
})

// ! Partial Indexes -> index hanya bisa berfunsi jika memenuhi kriteria
db.products.createIndex(
  {
    name: 1,
  },
  {
    partialFilterExpression: {
      price: {
        $lte: 3000,
      },
    },
  }
)
db.products.find({
  name: "Mie Sedap",
  price: 3000,
})
