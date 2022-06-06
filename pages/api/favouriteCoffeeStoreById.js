// //basic setup for serverless function
// const favouriteCoffeeStoreById = (req, res) => {
//   if (req.method === 'PUT') {
//     const { fsq_id } = req.body;
//     res.json({ message: `this works ${fsq_id}` });
//   }
// };
// export default favouriteCoffeeStoreById;

// import { findRecordByFilter } from '../lib/airtable';

// //fetch data from Airtable
// const favouriteCoffeeStoreById = async (req, res) => {
//   if (req.method === 'PUT') {
//     try {
//       const { fsq_id } = req.body;

//       if (fsq_id) {
//         const records = await findRecordByFilter(fsq_id);
//         if (records.length !== 0) {

//           console.log('favouriteStoreFindRecord: ', { records });

//           res.json({ records });
//         } else {
//           res.json({ message: "Coffee store id doesn't exist", fsq_id });
//         }
//       } else {
//         res.status(400);
//         res.json({ message: 'id is missing' });
//       }
//     } catch (err) {
//       res.status(500);
//       res.json({ message: 'Error upvoting coffee store', err });
//     }
//   }
// };
// export default favouriteCoffeeStoreById;

import {
  table,
  findRecordByFilter,
  getMinifiedRecords,
} from '../../libs/airtable';

//update the voting property fetched data from Airtable by using Postman
const favouriteCoffeeStoreById = async (req, res) => {
  if (req.method === 'PUT') {
    try {
      const { fsq_id } = req.body;
      // console.log('fsq_id: ', fsq_id);

      if (fsq_id) {
        const records = await findRecordByFilter(fsq_id);
        if (records.length !== 0) {
          const record = records[0];

          const calculateVoting = parseInt(record.voting) + 1;

          //update voting property in Airtable
          const updateRecord = await table.update([
            {
              id: record.recordId, //record or row id from Airtable
              fields: {
                voting: calculateVoting,
              },
            },
          ]);

          if (updateRecord) {
            const minifiedRecord = getMinifiedRecords(updateRecord);
            res.json({ minifiedRecord });
          }
          // console.log('favouriteStoreFindRecord: ', { updateRecord });
        } else {
          res.json({ message: "Coffee store id doesn't exist", fsq_id });
        }
      } else {
        res.status(400);
        res.json({ message: 'id is missing' });
      }
    } catch (err) {
      res.status(500);
      res.json({ message: 'Error upvoting coffee store', err });
    }
  }
};
export default favouriteCoffeeStoreById;
