import React from "react";

const commentsData = [
  {
    name: "Sagarika Jaiswal",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Sagarika Jaiswal",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Sagarika Jaiswal",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Sagarika Jaiswal",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },
          {
            name: "Sagarika Jaiswal",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Sagarika Jaiswal",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
              {
                name: "Sagarika Jaiswal",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sagarika Jaiswal",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Sagarika Jaiswal",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Sagarika Jaiswal",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Sagarika Jaiswal",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Sagarika Jaiswal",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Sagarika Jaiswal",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
];

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="bg-gray-100 rounded-lg m-2 p-2 flex">
      <div>
        <img
          className="w-10 h-10"
          src="https://static.vecteezy.com/system/resources/thumbnails/007/296/443/small_2x/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"
          alt="user"
        />
      </div>
      <div>
        <h1 className="text-lg font-bold px-2">{name}</h1>
        <p className="px-2">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  /// Disclaimer - Don't use index as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <div>
        <Comments data={comment} />
      </div>
      {/* Replies */}
      <div className="ml-4 pl-5 border border-l-black ">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="font-bold text-lg">Comments:</h1>
      <div>
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
