import {useState, useEffect} from "react";
import { API_URL } from "./constants";





function PostsLists( ){
	const [posts, setPosts] = useState([]);
	const [, setLoading] = useState(true);
	const [, setError] = useState(null);

		useEffect(() => {

			async function loadPosts() {
				try { 
					const posts = await fetch(API_URL);
					if (Response.ok){
						const json = await response.json();
						setPosts(json);

						} else {
						throw response;
						} 
					} catch (e) {
						setError("somethin dont work!");
						console.log("error", e);

					} finally {
						setLoading(false);
					}
				
			}

	 loadPosts()

		},[]);

	//fetch posts from API
	return (
		<div>
			<h2>Post List</h2>
		
		{posts.map((post) => (
			<div key={post.id} className="post-container">
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			</div>
		))}
	
		</div>
	);
}


export default PostsLists;