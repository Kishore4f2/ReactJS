import React, { useState } from "react";
import { useEffect } from "react";

function StatesDemo({message}) {
    const [videoName, setVideoName] = useState("ReactJS");
    const [videoLikes, setVideoLikes] = useState(99);
    const [videoCompliment, setVideoCompliment] = useState("");

    useEffect(()=>{
        console.log("Component redndered!"); 
    },[])

    useEffect(()=>{
        console.log("Video likes updated");
    },[videoLikes])

    return (
        <>
        <h1>States Demo</h1>
        <h6>Video Name : {videoName}</h6>
        <h6>Likes : {videoLikes}</h6>
        <button onClick={()=>{setVideoLikes(videoLikes+1)}}>Like Video</button>
        <button onClick={()=>{setVideoLikes(videoLikes-1)}}>Dislike Video</button>
        {/* {
        videoLikes >= 100 &&
        <p>Likes reached 100</p>
        }   */}
        {
            videoLikes<100?
            <p>People are Liking this video</p> : <p>People are Loving this video</p>
        }

        <form action="">
            <label htmlFor="video-compliment">Video Compliment</label>
            <input type="text" name="video-compliment" value={videoCompliment}
            onChange={(e)=>{
                console.log(e)
                console.log(e.target.value)
                setVideoCompliment(e.target.value)
            }} />   
        </form>

        <childComponent message={message}/>

        </>
    )
}

function childComponent({message}){
    return(
        <>
        <h5>Child Component</h5>
        {message}
        </>
    )
}
export default StatesDemo;