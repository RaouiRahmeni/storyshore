// import "./post.css"
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "fttp://loaclhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt="img" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((ele) => (
            <span className="postCat">{ele.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toLocaleDateString()}{" "}
        </span>
      </div>
      <p className="postDes">{post.desc}</p>
    </div>
  );
}
