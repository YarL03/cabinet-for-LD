import * as axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, collectionGroup, doc, getDoc, getDocs, getFirestore, onSnapshot, query, setDoc, updateDoc, where, writeBatch } from "firebase/firestore";

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

export const MessagesAPI = {
  readMessages: async (messages, uidTarget) => {
    const db = getFirestore()
    const batch = writeBatch(db)
    messages.forEach(message => {
      if(message.from === uidTarget) {
        batch.update(doc(db, ...message.path), {isRead: true})
        batch.update(doc(db, 'chats', message.to, 'conversations', uidTarget), {isRead: true})
      }
    })
    await batch.commit()
  },

  getMessages: async (uidAuth, uidTarget) => {
    const messages = await firestoreAPI.getAll(['chats', uidAuth, 'conversations', uidTarget, 'messages'])
    debugger
    return messages
  },

  sendMessages: async (uidAuth, userTarget, message) => {
    const db = getFirestore()
    const authChat = (await firestoreAPI.getAll(['chats', uidAuth, 'conversations', userTarget.uid, 'messages']))

    console.log(authChat.empty)
    if (authChat.empty) {
      
      MessagesAPI.setChats(uidAuth, userTarget, {
        lastMessage: message.content,
        createdAt: message.createdAt,
        from: message.from,
        to: message.to,
        name: message.name,
        lastname: message.lastname,
        with: userTarget.uid
      })
    }
      const batch = writeBatch(db)
      batch.set(doc(collection(db,'chats', uidAuth, 'conversations', userTarget.uid, 'messages')), message)
      batch.set(doc(collection(db,'chats', userTarget.uid, 'conversations', uidAuth, 'messages')), message)
      await batch.commit()
    // await firestoreAPI.set(['chats', uidAuth, 'conversations', uidTarget, 'messages'], message)
    // await firestoreAPI.set(['chats', uidTarget, 'conversations', uidAuth, 'messages'], message)
    
    debugger
  },

  getChats: async (uidAuth) => {
    const chats = await firestoreAPI.getAll(['chats', uidAuth, 'conversations'])
   
    debugger
    return chats
  },

  setChats: async (uidAuth, userTarget, data) => {
    const db = getFirestore()
    const batch = writeBatch(db)
    batch.set(doc(db, 'chats', uidAuth), {}) // if the chat already exists, it will be rewritten
    batch.set(doc(db, 'chats', userTarget.uid), {}) // actually it doesn't matter cause this doc is just a container
    batch.set(doc(db, 'chats', uidAuth, 'conversations', userTarget.uid), {...data, name: userTarget.name, lastname: userTarget.lastname})
    batch.set(doc(db, 'chats', userTarget.uid, 'conversations', uidAuth), {...data, with: uidAuth})

    await batch.commit()
  }
}

window.prikol = MessagesAPI.readMessages

export const ProfileAPI = {
  updateStatus: async (uid, status) => {
   await firestoreAPI.update(['users', uid], {status})
  },

  getStatus: async (uid) => {
    debugger
    const data = (await firestoreAPI.get(['users', uid])).data()
    debugger
   return data
  },

  getUserData: async (path) => {
    debugger
    try {
      const data = await firestoreAPI.get(path)
    window.test = data
    debugger
    return data
  }

    catch (err) {
      console.log(err)
    }
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

  logout: async (uid) => {
    const auth = getAuth();
    await firestoreAPI.update(['users', uid], {online: false})
    await signOut(auth)
    
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
    const data = await getDoc(doc(db, ...path))
    debugger
    return data
  }
    catch (err) {
      console.log(err)
    }
  },

  getCondition: async (path, condition) => {
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

  getAll: async (path) => {
    try {
      const db = getFirestore()
      const q = collection(db, ...path)
      const data = await getDocs(collection(db, ...path))
      debugger
      return data
    }

    catch (err) {
      console.log(err)
    }
  },

  set: async (path, data) => {
    const db = getFirestore()
    await addDoc(collection(db, ...path), data)
  },

  update: async (path, changes) => {
    const db = getFirestore()
    return await updateDoc(doc(db, ...path), changes)
  },

  listenOne: (path, callback) => {
    const db = getFirestore()
    const unsub = onSnapshot(doc(db, ...path), (doc) => { // здесь ошибка
      // console.log(doc.data())  // надо сделать два метода
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
        arrData.push({...doc.data(), path: doc._key.path.segments.slice(doc._key.path.offset)}) 
      })
      callback(arrData)
      console.log(arrData)
    })
    return unsub
  },
}