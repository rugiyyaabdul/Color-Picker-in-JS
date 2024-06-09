onload = ()=>{
    createTable();
}
let color = '#000';

const createTable = ()=>{
    let x = 16;
    let k = 0;
    let table = '';
    for (let i = 0; i < x; i++) {
        table += `<tr>`;
            for(let j = 0; j < x; j++){
                table += `<td class="td_color" onclick="setColor(${k})"></td>`;
                k++;
            }
        table += `</tr>`;
    }

    document.getElementById("table").innerHTML = table;
}



const getColor = () =>{
    color = document.getElementById("color").value;
}

const setColor = (index) =>{
    document.getElementsByClassName("td_color")[index].style.backgroundColor = color;

}

const clearAll = () => {
    color = '#FFF';
    const classes = document.getElementsByClassName("td_color");
    for(let item of classes){
        item.style.backgroundColor = color;
    }
    color = '#000';
}
const clearSelected = () => {
    color = '#FFF';
    document.getElementById("color").value = color;
}