// const Airtable = require('airtable');
// // const base = new Airtable({
// //   apiKey: process.env.AIRTABLE_API_KEY,
// // }).base(process.env.AIRTABLE_BASE_KEY);
// const base = new Airtable({ apiKey: 'key89S9nrS4b4vWCU' }).base(
//   'appsKrtMi9J5nPEF3'
// );

// const table = base('coffee-store');
// // console.log({ table });

//Basic CreateCoffeeStore serverless function
// //by default every serverless function is get request
// const createCoffeeStore = (req, res) => {
//   console.log({ req }); //let printout req object in the vscode to see that every severless function is a GET request by default
//   res.json({ message: 'method is GET' });
// };
// export default createCoffeeStore;

// //converting the default request method from GET to POST
// const createCoffeeStore = (req, res) => {
//   console.log({ req });
//   if (req.method === 'POST') {
//     res.json({ message: 'Hi there' });
//   } else {
//     res.json({ message: 'method is GET' });
//   }
// };
// export default createCoffeeStore;

// //finding  a record in Airtable DB
// const createCoffeeStore = async (req, res) => {
//   // console.log({ req });
//   if (req.method === 'POST') {
//     //find a record

//     const findCoffeeStoreRecords = await table
//       .select({
//         filterByFormula: `fsq_id="0"`,
//       })
//       .firstPage();

//     console.log({ findCoffeeStoreRecords });

//     if (findCoffeeStoreRecords.length !== 0) {
//       res.json({ findCoffeeStoreRecords });
//     } else {
//       //create a record
//       res.json({ message: 'create a record' });
//     }
//   }
// };
// export default createCoffeeStore;

// //Transform Coffee Store Data
// const createCoffeeStore = async (req, res) => {
//   // console.log({ req });
//   if (req.method === 'POST') {
//     try {
//       //find a record
//       const findCoffeeStoreRecords = await table
//         .select({
//           filterByFormula: `fsq_id="0"`,
//         })
//         .firstPage();

//       // console.log({ findCoffeeStoreRecords });

//       if (findCoffeeStoreRecords.length !== 0) {
//         //Transform Coffee Store Data
//         const records = findCoffeeStoreRecords.map((record) => {
//           return {
//             ...record.fields.fsq_id,
//           };
//         });
//         // res.json({ findCoffeeStoreRecords }); //its return huge object
//         res.json({ records });
//       } else {
//         //create a record
//         res.json({ message: 'create a record' });
//       }
//     } catch (err) {
//       console.error('Error finding store', err);
//       res.json(500);
//       res.json({ message: 'Error finding store', err });
//     }
//   }
// };
// export default createCoffeeStore;

// //creating a record manually onto Airtable DB
// const createCoffeeStore = async (req, res) => {
//   // console.log({ req });
//   if (req.method === 'POST') {
//     try {
//       //find a record
//       const findCoffeeStoreRecords = await table
//         .select({
//           filterByFormula: `fsq_id="2"`,
//         })
//         .firstPage();

//       // console.log({ findCoffeeStoreRecords });

//       if (findCoffeeStoreRecords.length !== 0) {
//         const records = findCoffeeStoreRecords.map((record) => {
//           return {
//             ...record.fields,
//           };
//         });
//         res.json({ records });
//       } else {
//         //create a record
//         const createRecords = await table.create([
//           {
//             fields: {
//               fsq_id: '2',
//               name: 'Ola coffee',
//               address: 'Lagos mainland',
//               locality: 'Lagos',
//               voting: 200,
//               imgUrl: 'image.com',
//             },
//           },
//         ]);
//         const records = createRecords.map((record) => {
//           return {
//             ...record.fields,
//           };
//         });
//         // res.json({ message: 'create a record', records: createRecords });
//         res.json({ message: 'created a record', records });
//       }
//     } catch (err) {
//       console.error('Error finding store', err);
//       res.json(500);
//       res.json({ message: 'Error finding store', err });
//     }
//   }
// };
// export default createCoffeeStore;

// //inserting a record from Postman onto AirtableDB by storing the data onto req.body
// const createCoffeeStore = async (req, res) => {
//   if (req.method === 'POST') {
//     const { fsq_id, name, address, locality, voting, imgUrl } = req.body;

//     try {
//       //find a record
//       const findCoffeeStoreRecords = await table
//         .select({
//           filterByFormula: `fsq_id="${fsq_id}"`,
//         })
//         .firstPage();

//       console.log({ findCoffeeStoreRecords });

//       if (findCoffeeStoreRecords.length !== 0) {
//         const records = findCoffeeStoreRecords.map((record) => {
//           return {
//             ...record.fields,
//           };
//         });
//         res.json({ records });
//       } else {
//         //create a record
//         const createRecords = await table.create([
//           {
//             fields: {
//               fsq_id,
//               name,
//               address,
//               locality,
//               voting,
//               imgUrl,
//             },
//           },
//         ]);
//         const records = createRecords.map((record) => {
//           return {
//             ...record.fields,
//           };
//         });
//         // res.json({ message: 'create a record', records: createRecords });
//         res.json({ message: 'created a record', records });
//       }
//     } catch (err) {
//       console.error('Error finding store', err);
//       res.json(500);
//       res.json({ message: 'Error finding store', err });
//     }
//   }
// };
// export default createCoffeeStore;

// //API Error Handling by making fsq_id and name a required fields
// const createCoffeeStore = async (req, res) => {
//   if (req.method === 'POST') {
//     const { fsq_id, name, address, locality, voting, imgUrl } = req.body;

//     try {
//       //find a record
//       if (fsq_id) {
//         const findCoffeeStoreRecords = await table
//           .select({
//             filterByFormula: `fsq_id="${fsq_id}"`,
//           })
//           .firstPage();

//         // console.log({ findCoffeeStoreRecords });

//         if (findCoffeeStoreRecords.length !== 0) {
//           const records = findCoffeeStoreRecords.map((record) => {
//             return {
//               ...record.fields,
//             };
//           });
//           console.log('findRecord: ', { records });
//           res.json({ records });
//         } else {
//           //create a record
//           if (name) {
//             const createRecords = await table.create([
//               {
//                 fields: {
//                   fsq_id,
//                   name,
//                   address,
//                   locality,
//                   voting,
//                   imgUrl,
//                 },
//               },
//             ]);
//             const records = createRecords.map((record) => {
//               return {
//                 ...record.fields,
//               };
//             });
//             console.log('insertRecord:', { records });
//             res.json({ message: 'created a record', records });
//           } else {
//             res.status(400); //user request contains bad syntax
//             res.json({ message: 'id or name is missing' });
//           }
//         }
//       } else {
//         res.status(400);
//         res.json({ message: 'id is missing' });
//       }
//     } catch (err) {
//       console.error('Error creating or finding a store', err);
//       res.json(500);
//       res.json({ message: 'Error creating or finding a store', err });
//     }
//   }
// };
// export default createCoffeeStore;

// //Refactor or clearing up of Create Coffee Store API
// import { table, getMinifiedRecords } from '../lib/airtable';

// const createCoffeeStore = async (req, res) => {
//   if (req.method === 'POST') {
//     const { fsq_id, name, address, locality, voting, imgUrl } = req.body;

//     try {
//       //find a record
//       if (fsq_id) {
//         const findCoffeeStoreRecords = await table
//           .select({
//             filterByFormula: `fsq_id="${fsq_id}"`,
//           })
//           .firstPage();

//         if (findCoffeeStoreRecords.length !== 0) {
//           // const records = findCoffeeStoreRecords.map((record) => {
//           //   return {
//           //     ...record.fields,
//           //   };
//           // });
//           const records = getMinifiedRecords(findCoffeeStoreRecords);

//           console.log('findRecord: ', { records });
//           res.json({ records });
//         } else {
//           //create a record
//           if (name) {
//             const createRecords = await table.create([
//               {
//                 fields: {
//                   fsq_id,
//                   name,
//                   address,
//                   locality,
//                   voting,
//                   imgUrl,
//                 },
//               },
//             ]);
//             // const records = createRecords.map((record) => {
//             //   return {
//             //     ...record.fields,
//             //   };
//             // });
//             const records = getMinifiedRecords(createRecords);

//             console.log('insertRecord:', { records });
//             res.json({ message: 'created a record', records });
//           } else {
//             res.status(400);
//             res.json({ message: 'id or name is missing' });
//           }
//         }
//       } else {
//         res.status(400);
//         res.json({ message: 'id is missing' });
//       }
//     } catch (err) {
//       console.error('Error creating or finding a store', err);
//       res.json(500);
//       res.json({ message: 'Error creating or finding a store', err });
//     }
//   }
// };
// export default createCoffeeStore;

//API Architecture: Invoke Coffee Store API in client side
import {
  table,
  getMinifiedRecords,
  findRecordByFilter,
} from '../../libs/airtable';

const createCoffeeStore = async (req, res) => {
  if (req.method === 'POST') {
    const { fsq_id, name, address, locality, voting, imgUrl } = req.body;

    try {
      //find a record
      if (fsq_id) {
        // const findCoffeeStoreRecords = await table
        //   .select({
        //     filterByFormula: `fsq_id="${fsq_id}"`,
        //   })
        //   .firstPage();

        // if (findCoffeeStoreRecords.length !== 0) {
        //   const records = getMinifiedRecords(findCoffeeStoreRecords);

        //   console.log('findRecord: ', { records });
        //   res.json({ records });
        const records = await findRecordByFilter(fsq_id); //from airtable.js file
        if (records.length !== 0) {
          // console.log('findRecord: ', { records });
          res.json({ records });
        } else {
          //create a record
          if (name) {
            const createRecords = await table.create([
              {
                fields: {
                  fsq_id,
                  name,
                  address,
                  locality,
                  voting,
                  imgUrl,
                },
              },
            ]);

            const records = getMinifiedRecords(createRecords);

            // console.log('insertRecord:', { records });
            res.json({ message: 'created a record', records });
          } else {
            res.status(400);
            res.json({ message: 'id or name is missing' });
          }
        }
      } else {
        res.status(400);
        res.json({ message: 'id is missing' });
      }
    } catch (err) {
      console.error('Error creating or finding a store', err);
      res.json(500);
      res.json({ message: 'Error creating or finding a store', err });
    }
  }
};
export default createCoffeeStore;
