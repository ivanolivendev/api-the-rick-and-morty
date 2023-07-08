const charId = document.querySelector("#charId");
const btnGo = document.querySelector("#btn-go"); 
const content = document.querySelector("#content");
const image = document.querySelector("#img");

const fetchApi = (value)=>{
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res)=>res.json())
    .then((data)=> {console.log(data); return data})

    return result;
}

    fetchApi(11)

btnGo.addEventListener('click', async (event)=>{

    event.preventDefault();
    const result = await fetchApi(charId.value);

    content.textContent= `${JSON.stringify(result,undefined,2)}`

    image.src=`${result.image}`; 

})