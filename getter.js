function mapUsers(users) {
  let count = users.length;
  let data = []
  users.map((item)=>{
           data.push({
                id: item.id,
                username: item.username,
                password: item.password,
                gender: item.gender
            })
        // TODO: replace this
    });

  return { data, count}; // TODO: replace this
}

function Articles(articles) {
  let count = articles.length;
  let data = []
  articles.map((item)=>{
           data.push({
                id: item.id,
                article: item.article,
                userId: item. userId,
              
            })
        // TODO: replace this
    });

  return { data, count};; // TODO: replace this
}
export default mapUsers;
export const mapArticles = Articles;
let user1 = [
  {
      "id": 1,
      "username": "alvinarkansas",
      "password": "PhT1Oky01",
      "gender": "male"
  },
  {
      "id": 2,
      "username": "anisatahira",
      "password": "oYt2Thj9w",
      "gender": "female"
  }
]
let user2 = [
  {
      "id": 1,
      "username": "imamassi",
      "password": "YhI6ErG71",
      "gender": "male"
  }
]
let articles1 = [
  {
      "id": 1,
      "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "userId": 1
  },
  {
      "id": 2,
      "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "userId": 2
  },
  {
      "id": 3,
      "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "userId": 3
  },
  {
      "id": 4,
      "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "userId": 4
  },
]
let articles2 = [
  {
      "id": 1,
      "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "userId": 6
  },
  {
      "id": 2,
      "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "userId": 5
  },
]

// const users = [
//   {
//     "id": 1,
//     "username": "isrotrip",
//     "password": "PhT1Oky01",
//     "gender": "male"
//   },
//   {
//     "id": 2,
//     "username": "dmtrxw",
//     "password": "oYt2Thj9w",
//     "gender": "male"
//   },
//   {
//     "id": 3,
//     "username": "afifahrahmak",
//     "password": "YhI6ErG71",
//     "gender": "female"
//   },
//   {
//     "id": 4,
//     "username": "ijtj",
//     "password": "cok1BgS77",
//     "gender": "male"
//   },
//   {
//     "id": 5,
//     "username": "arnoltherigan",
//     "password": "Ko4Rn0lD",
//     "gender": "male"
//   },
// ]

// const articles = [
//   {
//     "id": 1,
//     "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "userId": 1
//   },
//   {
//     "id": 2,
//     "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "userId": 2
//   },
//   {
//     "id": 3,
//     "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "userId": 3
//   },
//   {
//     "id": 4,
//     "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "userId": 4
//   },
//   {
//     "id": 5,
//     "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "userId": 1
//   },
//   {
//     "id": 6,
//     "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "userId": 2
//   },
//   {
//     "id": 7,
//     "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "userId": 3
//   },
//   {
//     "id": 8,
//     "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "userId": 5
//   },
// ]
// console.log(Users(user1));
// console.log(Users(user2));
// console.log(Articles(articles1))
// console.log(Articles(articles2))
// TODO: answer here



