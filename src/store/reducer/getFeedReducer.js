

const productRequests = {
    getFeed: [
        {
          id: 3,
          title: "Q&A within the challenge hubs",
          category: "feature",
          upvotes: 64,
          isUpvoted: true,
          status: "suggestion",
          description: "Challenge-specific Q&A would make for easy reference.",
          comments: [
            {
              id: 10,
              content: "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
              user: {
                image: "https://raw.githubusercontent.com/mukhammadyn/product-images/main/user-images/image-victoria.jpg",
                name: "Victoria Mejia",
                username: "arlen_the_marlin"
              }
            },
            {
              id: "2023-03-04T02:43:18.837Z",
              user: {
                image: "https://raw.githubusercontent.com/mukhammadyn/product-images/main/user-images/image-elijah.jpg",
                name: "Elijah Moss",
                username: "hexagon.bestagon"
              },
              content: "hello"
            },
            {
              id: "2023-03-04T02:43:28.613Z",
              user: {
                image: "https://raw.githubusercontent.com/mukhammadyn/product-images/main/user-images/image-elijah.jpg",
                name: "Elijah Moss",
                username: "hexagon.bestagon"
              },
              content: "hello 2"
            }
          ]
        },
        {
          id: 5,
          title: "Ability to follow others",
          category: "feature",
          upvotes: 42,
          isUpvoted: true,
          status: "suggestion",
          description: "Stay updated on comments and solutions other people post.",
          comments: [
            {
              id: 8,
              content: "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
              user: {
                image: "https://raw.githubusercontent.com/mukhammadyn/product-images/main/user-images/image-victoria.jpg",
                name: "Victoria Mejia",
                username: "arlen_the_marlin"
              },
              replies: [
                {
                  content: "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
                  replyingTo: "arlen_the_marlin",
                  user: {
                    image: "https://raw.githubusercontent.com/mukhammadyn/product-images/main/user-images/image-zena.jpg",
                    name: "Zena Kelley",
                    username: "velvetround"
                  }
                }
              ]
            },
            {
              id: 9,
              content: "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
              user: {
                image: "https://raw.githubusercontent.com/mukhammadyn/product-images/main/user-images/image-jackson.jpg",
                name: "Jackson Barker",
                username: "countryspirit"
              }
            }
          ]
        },
        ]
}

export const getFeedReducer = (state = productRequests, action) => {
    switch(action.type) {
        case 'GET_FEEDBACK':
            return { getFeed: action.payload };
        default: 
            return state
    }
}