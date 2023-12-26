import { HttpResponse, http } from "msw";
import { usersMock } from "../../utils/mockData";
const handlers = [
  http.get(
    "https://jsonplaceholder.typicode.com/users",
    ({ request, cookies, params }) => {
      // console.log("response", req);
      // console.log("ctxsdfewfrefrefrewgfre", ctx);
      return HttpResponse.json(usersMock);
    }
  ),
  http.get(
    "https://jsonplaceholder.typicode.com/users/:userId",
    ({ request, cookies, params }) => {
      const { userId } = params;
    //   console.log("userId in mock",userId)
      const findUser = usersMock.find((user) => {
        return user.id  == userId;
      });
      return HttpResponse.json({ ...findUser });
    }
  ),
];
export default handlers;
