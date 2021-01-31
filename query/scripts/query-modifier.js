// select count(*) from products
db.products.find({}).count()

// select * from products limit 4
db.products.find({}).limit(4)

// select * from products offset 2
db.products.find({}).skip(2)

// select * from products limit 4 offset 2
db.products.find({}).limit(4).skip(2)

db.products
  .find(
    {
      sku: {
        $exists: true,
      },
    },
    {
      sku: 1,
    }
  )
  .limit(2)
  .skip(1)

// select * from products order by name asc, category desc
db.products.find({}).sort({
  name: 1,
  category: -1,
})

db.products.find({ sku: { $exists: true } }).sort({ sku: -1, description: 1 })
