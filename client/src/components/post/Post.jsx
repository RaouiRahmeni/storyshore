import "./post.css"
export default function Post() {
    return (
        <div>
            <img className="postImg" src="https://images.pexels.com/photos/7969326/pexels-photo-7969326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img"/>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>

            </div>
            <span className="postTitle">Lorem ipsum</span>
            <hr/>
            <span className="postDate">1 hour ago </span>
        </div>
        <p className="postDes">Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Necessitatibus et 
            esse ipsa sequi pariatur impedit repellat
             sint nisi eligendi molestiae, illum 
             nostrum possimus non suscipit quisquam 
             fuga alias voluptas reprehenderit! Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Necessitatibus et 
            esse ipsa sequi pariatur impedit repellat
             sint nisi eligendi molestiae, illum 
             nostrum possimus non suscipit quisquam 
             fuga alias voluptas reprehenderit!Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Necessitatibus et 
            esse ipsa sequi pariatur impedit repellat
             sint nisi eligendi molestiae, illum 
             nostrum possimus non suscipit quisquam 
             fuga alias voluptas reprehenderit!Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Necessitatibus et 
            esse ipsa sequi pariatur impedit repellat
             sint nisi eligendi molestiae, illum 
             nostrum possimus non suscipit quisquam 
             fuga alias voluptas reprehenderit!</p>
        </div>
    )
}
