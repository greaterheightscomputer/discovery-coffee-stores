const Airtable = require('airtable');
const base = new Airtable({ apiKey: 'key89S9nrS4b4vWCU' }).base(
  'appsKrtMi9J5nPEF3'
);

const table = base('coffee-store');

// const getMinifiedRecord = (record) => {
//   console.log('recordID', record);
//   return {
//     recordId: record.id,
//     ...record.fields,
//   };
// };

//modify this function for the purpose of updating a record
const getMinifiedRecord = (record) => {
  // console.log('recordID', record);
  return {
    recordId: record.id,
    ...record.fields,
  };
};

const getMinifiedRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

const findRecordByFilter = async (fsq_id) => {
  const findCoffeeStoreRecords = await table
    .select({
      filterByFormula: `fsq_id="${fsq_id}"`,
    })
    .firstPage();
  return getMinifiedRecords(findCoffeeStoreRecords);
};

export { table, getMinifiedRecords, findRecordByFilter };
