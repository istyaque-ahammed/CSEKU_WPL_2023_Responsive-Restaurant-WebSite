import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import ProductSchema from "./Schema/ProductSchema.js"

const uri= 'mongodb+srv://istyaqueahammed:<istyaque200240>@web.da7nhel.mongodb.net/?retryWrites=true&w=majority';
var CollectionName="NewArrivals";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000 })
  .then(() => {
    console.log('Connected to MongoDB');
    list();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  const AllCollections=[];
  async function list() {
    
    try {

      const collections = await mongoose.connection.db.listCollections().toArray();
      collections.forEach((collection) => {
        AllCollections.push(collection.name);
      });
    } catch (error) {
      console.error('Error listing collections:', error);
    }
  }

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Server is running');
});
app.get('/collections',async(req,res)=>{
    const jsonContent = JSON.stringify(AllCollections);
    res.end(jsonContent);
})

app.post('/coll',async(req,res)=>{
  CollectionName=req.body.value;
    console.log(req.body);
    console.log(req.body.value);
    res.end(CollectionName);
})


app.post('/Add', async (req, res) => {
  try {
    const dataToInsert = req.body;
    const readData = mongoose.model(CollectionName, ProductSchema, CollectionName);
   const DataSave= new readData(dataToInsert)
    await DataSave.save();
    console.log("Data submited SuccessFully")
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/dataDel/:id', async (req, res) => {
  const id = req.params.id;
  const readData = mongoose.model(CollectionName, ProductSchema, CollectionName);

  try {
    const response = await readData.deleteOne({ _id: id });
    console.log(response);
    res.status(204).end()
    
}catch(error){
console.log(error)
}
});

app.post('/edit', async (req, res) => {
  const formData = req.body;
  const readData = mongoose.model(CollectionName, ProductSchema, CollectionName);

  try {
    const filter = { _id: formData._id }; // Assuming _id is the unique identifier for your document
    const updateData = { $set: formData }; // Use $set to update the entire document
    const response = await readData.updateOne(filter, updateData);

    if (response.nModified === 1) {
      // Check if one document was modified
      console.log('Document updated successfully');
      res.status(204).end(); // Respond with success status
    } else {
      console.log('Document not found or not updated');
      res.status(404).end(); // Respond with a not found status
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' }); // Respond with an error status
  }
});


app.get('/data',async(req,res)=>{
    try {
        if (mongoose.connection.readyState !== 1) {
            return res.status(500).json({ error: 'MongoDB not connected' });
          }
        const readData=await mongoose.model(CollectionName,ProductSchema,CollectionName)
        const data=await readData.find();
        res.json(data);
        } catch (error) {
        console.log(error);
        }
    
})

app.get('/userdata', (req, res)=>{
  const Collection = req.query.cName;
  const readData=  mongoose.model(Collection,ProductSchema,Collection)
  console.log(Collection)
  readData.find().then(result=>{
      res.status(200).json(result);
  })
  .catch(err=>{
      console.error(err);
  });
})






mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB');
    const port = 2000;
    app.listen(port, () => {
      console.log('Server listening on ' + port);
    });
  });