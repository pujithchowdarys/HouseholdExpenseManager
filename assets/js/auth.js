// Simple auth helpers using Firebase Auth
async function authSignUp(email, password, profile){
  const userCred = await auth.createUserWithEmailAndPassword(email, password);
  if(profile && profile.name){
    await userCred.user.updateProfile({displayName: profile.name});
  }
  // create user document
  await db.collection('users').doc(userCred.user.uid).set({
    email, createdAt: Date.now(), profile: profile || {}
  });
  return userCred.user;
}

async function authSignIn(email, password){
  const uc = await auth.signInWithEmailAndPassword(email, password);
  return uc.user;
}

function onAuthStateChanged(cb){
  auth.onAuthStateChanged(cb);
}
function authSignOut(){ auth.signOut().then(()=> location.href='index.html'); }
