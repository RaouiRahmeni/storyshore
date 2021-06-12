import './singlePost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper"></div>
        <img src="https://images.pexels.com/photos/8051944/pexels-photo-8051944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="singlePostImg"/>
        <h1 className="singlePostTitle">
        Lorem ipsum dolor sit
        <div className="singlePostEdit">
        <i className="singlePostIcon far fa-edit"></i>
        <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
        <span className="singlePostAuthor"> Author: <b>Safak</b></span>
        <span className="singlePostDate">1 hour ago</span>

        </div>
        <p>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quo commodi ex soluta 
        adipisci officiis id, necessitatibus dicta.
         Doloremque, veritatis nihil non ducimus 
         rerum pariatur! Cum facilis expedita 
         incidunt nam nesciunt.</p>
        
        </div>
    )
}
