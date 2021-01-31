db.customers.bulkWrite([
  {
    insertOne: {
      document: {
        _id: "eko",
        full_name: "Eko",
      },
    },
  },
  {
    insertOne: {
      document: {
        _id: "kurniawan",
        full_name: "Kurniawan",
      },
    },
  },
  {
    updateMany: {
      filter: {
        _id: {
          $in: ["eko", "kurniawan", "khannedy"],
        },
      },
      update: {
        $set: {
          full_name: "Eko Kurniawan Khannedy",
        },
      },
    },
  },
])

db.customers.deleteMany({
  _id: {
    $in: ["Dety", "Mei", "Dina", "Saputri"],
  },
})

db.customers.updateOne(
  {
    _id: "Azola",
  },
  {
    $set: {
      full_name: "asdasd",
    },
  }
)

db.customers.bulkWrite([
  {
    insertOne: {
      document: {
        _id: "Dety",
        full_name: "Dety",
      },
    },
  },
  {
    insertOne: {
      document: {
        _id: "Mei",
        full_name: "Mei",
      },
    },
  },
  {
    insertOne: {
      document: {
        _id: "Dina",
        full_name: "Dina",
      },
    },
  },
  {
    insertOne: {
      document: {
        _id: "Saputri",
        full_name: "Saputri",
      },
    },
  },
  {
    updateOne: {
      filter: {
        _id: "Azola",
      },
      update: {
        $set: {
          full_name: "zazolla14",
        },
      },
    },
  },
  {
    updateMany: {
      filter: {
        _id: {
          $in: ["Dety", "Mei", "Dina", "Saputri"],
        },
      },
      update: {
        $set: {
          full_name: "Dety Mei Dina Saputri",
        },
      },
    },
  },
  {
    replaceOne: {
      filter: {
        _id: "Zolla",
      },
      replacement: {
        $set: {
          full_name: "Young Lex",
          pekerjaan: "Rapper Handal",
        },
      },
    },
  },
  {
    deleteOne: {
      filter: {
        _id: "Zubi",
      },
    },
  },
])
