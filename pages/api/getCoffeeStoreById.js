// //basic setup of nest api route
// const getCoffeeStoreById = (req, res) => {
//   const { id } = req.query;

//   try {
//     if (id) {
//       res.json({ message: `id is fetched ${id}` });
//     } else {
//       res.status(400);
//       res.json({ message: 'Id is missing' });
//     }
//   } catch (error) {
//     res.status(500);
//     res.json({ message: 'something went wrong', error });
//   }
// };
// export default getCoffeeStoreById;

// //Coffee Store By Id API Validation
// import { table, getMinifiedRecords } from '../lib/airtable';

// const getCoffeeStoreById = async (req, res) => {
//   const { fsq_id } = req.query;

//   try {
//     if (fsq_id) {
//       const findCoffeeStoreRecords = await table
//         .select({
//           filterByFormula: `fsq_id="${fsq_id}"`,
//         })
//         .firstPage();

//       if (findCoffeeStoreRecords.length !== 0) {
//         const records = getMinifiedRecords(findCoffeeStoreRecords);

//         console.log('findRecord: ', { records });
//         res.json({ records });
//       } else {
//         res.json({ message: `id could not be found` });
//       }
//     } else {
//       res.status(400);
//       res.json({ message: 'Id is missing' });
//     }
//   } catch (error) {
//     res.status(500);
//     res.json({ message: 'something went wrong', error });
//   }
// };
// export default getCoffeeStoreById;

//Refactor Coffee Store By Id API
import { findRecordByFilter, table } from '../../libs/airtable';

const getCoffeeStoreById = async (req, res) => {
  const { fsq_id } = req.query;
  // console.log({ fsq_id });
  try {
    if (fsq_id) {
      // const findCoffeeStoreRecords = await table
      //   .select({
      //     filterByFormula: `fsq_id="${fsq_id}"`,
      //   })
      //   .firstPage();

      const records = await findRecordByFilter(fsq_id); //from airtable.js file
      if (records.length !== 0) {
        //   const records = findCoffeeStoreRecords.map((record) => {
        //     return {
        //       recordId: record.id,
        //       ...record.fields,
        //     };
        //   });

        const record = {
          fsq_id: records[0].fsq_id,
          name: records[0].name,
          address: records[0].address,
          voting: records[0].voting,
          imgUrl: records[0].imgUrl,
          recordId: records[0].recordId,
        };
        // console.log(record);

        res.json(record);
      } else {
        res.json({ message: `id could not be found` });
      }
    } else {
      res.status(400);
      res.json({ message: 'Id is missing' });
    }
  } catch (error) {
    res.status(500);
    res.json({ message: 'something went wrong', error });
  }
};
export default getCoffeeStoreById;
