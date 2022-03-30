let boton=document.getElementById("boton")
boton.addEventListener("click",function(event){

    alert("hiciste click")

    let selector=document.getElementById("selector").value
    alert("ustred eligio el"+selector)
    switch(selector){
        case "1":
            alert("elgiste el #1")
            break 
        case "2":
            alert("elgiste el #2")
            break 
        case "3":
             alert("elgiste el #3")
             break   
         case "4":
             alert("elgiste el #4")
             break 
         case "5":
             alert("elgiste el #5")
             break 
         case "6":
             alert("elgiste el #6")
             break 
         case "7":
             alert("elgiste el #7")
             break 
        case "8":
             alert("elgiste el #8")
             break  
         case "9":
             alert("elgiste el #9")
             break  
         case "10":
             alert("elgiste el #10")
             break       
    }
})