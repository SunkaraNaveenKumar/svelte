import { derived, writable } from "svelte/store";

const users = writable([]);
const userInfo = writable({});
const error = writable("");
// const {newUser}= derived()
const fetchUsers = async () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(async (res) => {
      const data = await res.json();
      // console.log("response",res)
      if (res.status === 200) {
        // console.log("data in stores", data);
        error.set("");
        users.set(data);
      } else {
        // console.log("data error in stores", data);
        error.set(data);
      }
    })
    .catch(async (err) => {
      await error.set(err);
      // console.log("data in err", err);
    });
};
const handleGetUserInfo = (userId) => {
  console.log("handleGetUserInfo", userId);
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(async (res) => {
      const data = await res.json();
      if (res.status === 200) {
        error.set("");
        userInfo.set(data);
        console.log("data inside .then", data);
      } else {
        error.set(data);
      }
    })
    .catch((err) => {
      error.set(err);
      console.log("err in ctach", err);
    });
};
let user;
users.subscribe((val)=>{
  user=val
  console.log("store values",val)
})
console.log("users new",user);
export { users, fetchUsers, error, handleGetUserInfo, userInfo };
