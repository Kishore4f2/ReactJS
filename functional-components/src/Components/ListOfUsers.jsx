import React from "react";

function ListOfUsers(props) {
    const{userDetails}=props
    return(
        <div>
            {
                userDetails.map((item)=>(
                    <div key={item.id}>
                        <h1>Name: {item.username}</h1>
                        <h1>Age : {item.age}</h1>
                        <h1>Batch: {item.batch}</h1>
                        </div>
                ))
            }
        </div>
    )
}
export default ListOfUsers;