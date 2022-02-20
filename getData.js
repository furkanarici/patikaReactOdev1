import axios from "axios";

const getData = async (id) => {
  try {
    const user = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const posts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );

    const result = { ...user.data, posts: [...posts.data] };

    return result;
  } catch (error) {
    console.error(error);
  }
};

export default getData;
