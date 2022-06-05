import * as axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, collectionGroup, doc, getDoc, getDocs, getFirestore, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "bd2de8d1-4755-465f-a340-e726db124cb0",
  },
});

export const ClientsAPI = {
  getClients: (currentPage, pageSize) => {
    
  },

  getOnlineUsers: () => {

  },
};


export const ProfileAPI = {
  updateStatus: (status) => {

  },

  getStatus: (id) => {

  },

  getUserData: (id) => {

  },
};

export const AuthAPI = {
  getIsAuth: () => {
    const auth = getAuth();
      debugger
    return new Promise((resolve) => {
          resolve({auth, onAuthStateChanged});
        }) 
    // return ;
  },

  login: (data) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, data.email, data.password);
  },

  logout: () => {
    const auth = getAuth();
    signOut(auth)
  },

  register: async (data) => {
    
    const auth = getAuth();

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const docRef = AuthAPI._setUserData(data, userCredentials.user.uid)
    
      console.log(docRef)
      console.log(userCredentials)
      return { userCredentials, docRef }
    } catch (err) {
      console.log(err)
    }
  },

  _setUserData: async (data, uid) => {
    const db = getFirestore()
    try {
        const docRef = await setDoc(doc(db, "users", uid), {
            ...data,
            online: true
          })
          return docRef
    }
    
    catch (error) {
        console.log(error)
  }
},
}

export const firestoreAPI = {
  get: async (path) => { 
    try {
    const db = getFirestore()
    debugger
    return await getDoc(doc(db, ...path))
  }
    catch (err) {

    }
  },

  getGroup: async (path, condition) => {
    try{ 
    const db = getFirestore()
    const q = query(collection(db, ...path), where(...condition))
    const querySnapshot = await getDocs(q)

    return querySnapshot
  }
    catch (err) {
      debugger
      console.log(err)
    }
  },

  set: (path) => {

  },

  update: async (path, changes) => {
    const db = getFirestore()
    return await updateDoc(doc(db, ...path), changes)
  },

  listenOne: (path, dispatch, action) => {
    const db = getFirestore()
    const unsub = onSnapshot(doc(db, ...path), (doc) => { // здесь ошибка
      console.log(doc.data())  // надо сделать два метода
      // dispatch(action(doc.data()))
    })
  },

  listenGroup: (path, condition, callback) => {
    const db = getFirestore()
    const q = query(collection(db, ...path), where(...condition))
    const unsub = onSnapshot(q, (querySnapshot) => {
      console.log(querySnapshot)
      const arrData = []
      querySnapshot.forEach((doc) => {
        arrData.push(doc.data()) 
      })
      callback(arrData)
      console.log(arrData)
    })
  },
}