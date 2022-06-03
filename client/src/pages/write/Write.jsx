import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="row bg-dark rounded m-5 p-5">
      <div className="writeFormGroup">
        <label htmlFor="fileInput">
          <i class="fa-thin text-white fa-rectangle-history-circle-plus"></i>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Title"
          className="writeInput"
          autoFocus={true}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="form-floating">
        <textarea
          class="form-control my-5"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <label for="floatingTextarea" class="form-label text-white">
          Share your story ..
        </label>
      </div>
      <button class="btn btn-outline-primary">SHARE</button>
    </div>
    // <div className="write">
    //   {file && (
    //     <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
    //   )}

    //   <form className="writeForm" onSubmit={handleSubmit}>
    //     <div className="writeFormGroup">
    //       <label htmlFor="fileInput">
    //         <i className="writeIcon far fa-plus-square"></i>
    //       </label>
    //       <input
    //         type="file"
    //         id="fileInput"
    //         style={{ display: "none" }}
    //         onChange={(e) => setFile(e.target.files[0])}
    //       />
    //       <input
    //         type="text"
    //         placeholder="Title"
    //         className="writeInput"
    //         autoFocus={true}
    //         onChange={(e) => setTitle(e.target.value)}
    //       />
    //     </div>

    //     <div className="writeFormGroup">
    //       <textarea
    //         placeholder="Tell your story .."
    //         type="text"
    //         className="writeInput writeText"
    //         onChange={(e) => setDesc(e.target.value)}
    //       ></textarea>
    //     </div>

    //     <button className="writeSubmit" type="submit">
    //       Publish
    //     </button>
    //   </form>
    // </div>
  );
}
