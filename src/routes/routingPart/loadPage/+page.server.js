// export async function load() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return {
//       users,
//     };
//   } catch (err) {
//     console.error(err);
//     return {
//       users: [],
//     };
//   }
// }

export const load = async () => {
  let users = []
   let  posts = []
  const fetchusers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      users = await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  await fetchusers();
  await fetchPosts()
  return {
      users,
      posts,
  };
};
