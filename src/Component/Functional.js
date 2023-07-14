
const Functional =()=>{

  

    function functionhandler (){
        console.log("functional event 1")
    }

    function Event (){
        console.log("function event 2")
        alert("Hello Everyone");
    }


    function Event2 (a){
        a.preventDefault();       // prevent default console print krte website chya place vr
        console.log("functional event 3")
    }

   
    return(
        <>
            <h2>Functional Event component</h2>
            <button onClick={functionhandler}>Function 1</button><br/><br/>
            <button onClick={Event}>Funtion 2</button><br/><br/>
            <a href="https://www.apple.com/in/iphone/" onClick={Event2}> Function 3</a>
        </>
    )
}
export default Functional;
