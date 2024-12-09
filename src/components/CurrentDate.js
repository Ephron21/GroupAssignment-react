import React from "react";

function CurrentDate() {
const today= new Date();
const formattedDate= today.toLocaleDateString();
return <p style={{ textAlign: 'center', marginTop: '50px' }}>Today's date is: {formattedDate}</p>;


}
export default CurrentDate;