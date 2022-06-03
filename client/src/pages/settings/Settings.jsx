import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="row rounded  m-5">
      <div className="col-4 rounded bg-info mt-5 p-5">
        <img
          class="img-fluid mx-auto d-block"
          // width={100}
          height={100}
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Profile img fail to load"
        />

        <div className="row">
          <h5>{user.username}</h5>
          <h5>{user.email}</h5>

          <h5>+8451328465</h5>
          <hr />
          <button className="yo btn btn-outline-primary">UPDATE</button>
        </div>
      </div>
      <div className="col-8 rounded bg-danger mt-5">posts</div>
    </div>
    // <div className="settings">
    //   <div className="settingsWrapper">
    //     <div className="settingsTitle">
    //       <span className="settingsUpdateTitle">Update Your Account</span>
    //       <span className="settingsDeleteTitle">Delete Account</span>
    //     </div>
    //     <form className="settingsForm" onSubmit={handleSubmit}>
    //       <label>Profile Picture</label>
    //       <div className="settingsPP">
    //         <img
    //           src={file ? URL.createObjectURL(file) : user.profilePic}
    //           alt=""
    //         />
    //         <label htmlFor="fileInput">
    //           <i className="settingsPPIcon fas fa-user-circle"></i>
    //         </label>
    //         <input
    //           type="file"
    //           id="fileInput"
    //           style={{ display: "none" }}
    //           onChange={(e) => setFile(e.target.files[0])}
    //         />
    //       </div>
    //       <label>Username</label>
    //       <input
    //         type="text"
    //         placeholder={user.username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //       <label>Email</label>
    //       <input
    //         type="email"
    //         placeholder={user.email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <button className="settingsSubmit" type="submit">
    //         Update
    //       </button>
    //       {success && (
    //         <span
    //           style={{ color: "green", textAlign: "center", marginTop: "20px" }}
    //         >
    //           Profile has been updated...
    //         </span>
    //       )}
    //     </form>
    //   </div>
    //   <Sidebar />
    // </div>
  );
}
