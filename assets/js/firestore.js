// Firestore CRUD helpers (prototype)
// Collections: customers, businessTx, chits, chitMembers, chitTx, householdTx, loans
async function addCustomer(data){
  const doc = await db.collection('customers').add(data);
  return {id: doc.id, ...data};
}
async function getCustomers(){
  const snap = await db.collection('customers').get();
  return snap.docs.map(d=>({id:d.id,...d.data()}));
}
async function addBusinessTransaction(customerId, tx){
  await db.collection('businessTx').add(Object.assign({customerId}, tx));
  // recompute balance (simple)
  const custRef = db.collection('customers').doc(customerId);
  const custDoc = await custRef.get();
  if(custDoc.exists){
    const prev = custDoc.data().balance || 0;
    const newBal = prev - tx.amount; // assume positive amount = money given to customer (decreases business balance)
    await custRef.update({balance: newBal});
  }
}
async function getChits(){
  const snap = await db.collection('chits').get();
  return snap.docs.map(d=>({id:d.id,...d.data()}));
}
async function addChit(data){ const doc = await db.collection('chits').add(data); return {id:doc.id,...data}; }

async function addHouseholdTx(tx){ await db.collection('householdTx').add(tx); }
async function getHouseholdTx(){ const snap = await db.collection('householdTx').orderBy('date','desc').get(); return snap.docs.map(d=>({id:d.id,...d.data()})); }
async function deleteHouseholdTx(id){ await db.collection('householdTx').doc(id).delete(); }

async function addLoan(data){ await db.collection('loans').add(data); }
async function getLoans(){ const snap = await db.collection('loans').get(); return snap.docs.map(d=>({id:d.id,...d.data()})); }

async function computeSummary(){
  // Very simple aggregation (prototype)
  const customers = await getCustomers();
  const chits = await getChits();
  const household = await getHouseholdTx();
  const loans = await getLoans();
  let totalBusinessBalance = customers.reduce((s,c)=>s + (c.balance||0), 0);
  let totalHouseholdSpent = household.reduce((s,t)=> s + (t.amount>0? t.amount:0), 0);
  let totalLoansBalance = loans.reduce((s,l)=> s + (l.balance||0), 0);
  return `<ul>
    <li>Customers total balance: ${totalBusinessBalance}</li>
    <li>Active chits: ${chits.length}</li>
    <li>Household total spent: ${totalHouseholdSpent}</li>
    <li>Total loans outstanding: ${totalLoansBalance}</li>
  </ul>`;
}
