import React from "react";
import Hobby from "./Hobby.js";

function Parent() {
    const hobbies =['reading', 'coding','praying','gospel songs'];
    return(
        <div style={{ textAlign: 'center', marginTop: '50px' }}> <h1>question #2</h1>
            <h2>My Hobbies</h2>
            <ul style={{ textAlign: 'center', marginTop: '50px' }}>
                {hobbies.map(function(hobby, index){
                    return < Hobby key={index} hobby={hobby} />

                }
            
                )}
            </ul>
        </div>
    );

}
export default Parent;