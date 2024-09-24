const express = require('express');

const app = express();

const cors = require('cors');

const port = process.env.PORT || 5000;

// middlewares

app.use(cors());

app.use(express.json());
require('dotenv').config();


// user : artsNcrafts
// pass : 4fbYva21MuZVwwoA



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ddujh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   
    await client.connect();

    const craftsCollection = client.db('craftDB').collection('crafts')


// for getting the data
    app.get('/crafts', async(req , res) => {
        const cursor = craftsCollection.find() // 'cursor' একটা পয়েন্টার যেটা পয়েন্ট করবে ডাটাবেজের কালেকশন (coffee) কে আর সেখানে find() মেথড দিয়ে সব ডাটা find করে তা toArray() তে convert করবে ও শেষে একটি রেসপন্স দিবে
    
        const result = await cursor.toArray();
        res.send(result)
        
    // এখন http://localhost:5000/crafts তে সব গুলো ডাটা শো করবে array  হিসাবে
        })


// for insert
        app.post('/crafts', async(req,res)=>{
            const newCrafts = req.body; 
            // from (A) : '/coffee' থেকে যেই ডাটা গুলা আসবে সেগুলা req এর মধ্যে body তে করে আসবে| যেহেতু ডাটা গুলা এসে সার্ভারে এড হবে,তাই এখানে মেথদ হবে app.post()। সেখান থেকে ডাটাবেইজে পাঠানো হবে
            console.log(newCrafts);
    
            const result = await craftsCollection.insertOne(newCrafts)
            // database এর cpllection [coffee] এর ভেতর একটা একটা করে পাঠানো হয়েছে, পাঠানো হলে সেটা একটা রেস্পন্স দিবে
    
            res.send(result);
        })


        // for deleting

        app.delete('/crafts/:id', async (req,res)=>{
            const id = req.params.id
            const query = {_id:new ObjectId(id)}
             // ডাটাবেজে _id দেওয়া আছে বোলে এখানে _id দিয়েই কুয়েরি চালাতে হবে
      
            const result = await craftsCollection.deleteOne(query);
      
            res.send(result)
          })

        

          // for update


          app.get('/crafts/:id', async(req,res)=>{
            const id = req.params.id;
            const query = {_id : new ObjectId(id)};
      
            const result = await craftsCollection.findOne(query)
            res.send(result)
          })


             // [update operation]
    app.put('/crafts/:id', async(req,res)=>{
        const id = req.params.id;
        const filter = {_id : new ObjectId(id)};
  
        
        const updateCraft = req.body; // রিকোয়েস্টের বডি থেকে ডাটা গুলো নিতে হবে
  
        const options = {upsert:true}; // থাকলে আপডেট করবা,না থাকলে নতুন ভাবে ক্রিয়েট করবা
  
  
        const crafts = {
          $set : {
  
            name : updateCraft.name,
            category : updateCraft.category,
            details : updateCraft.details,
            price : updateCraft.price,
            rating : updateCraft.rating,
            details : updateCraft.details,
            photo : updateCraft.photo,
            processing_time : updateCoffee.processing_time,
  
          }
        }
  
        const result = await coffeeCollection.updateOne(filter,crafts,options)
  
        res.send(result);
  
      })
      
      











    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);








app.get('/',async (req,res)=>{
    res.send('server done')
})



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})