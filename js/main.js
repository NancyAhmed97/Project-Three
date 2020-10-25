var fristInput = document.getElementById("site_name")
var secondInput = document.getElementById("site_url")
var addButton =document.getElementById("addBookmark")
var UpdatButton=document.getElementById("editBookmark")
var BookMarkIndex=0;
bookMarkList=[];





function addBookMark() {
    var oneBookMark= 
    {
       frInput : fristInput.value,
       seInut : secondInput.value, 

    }
    bookMarkList.push(oneBookMark);
    localStorage.setItem("ourBookMark",JSON.stringify(bookMarkList))
    displayBookMark();

}
function displayBookMark()
{
    bookMarkList= JSON.parse(localStorage.getItem("ourBookMark"));
    var hasalah=``;
    for(var i=0 ; i<bookMarkList.length ; i++)
    {
        hasalah += `<tr>
        <td> ${bookMarkList[i].frInput}</td>
        <td>${bookMarkList[i].seInut}</td>
        <td>
        <button onclick="deleteBookMark(${i})" class="btn  btn-danger"> Delet</button>
        </td>
        <td>
        <button onclick="UpdateBookMark(${i})" class="btn  btn-warning"> Update</button>
        </td>
        
        </tr>`
    }
    document.getElementById("tableBody").innerHTML=hasalah
    clearInput()
}
function clearInput()
{
    fristInput.value="";
    secondInput.value="";
}
function deleteBookMark( index)
{
  bookMarkList.splice(index,1)
  localStorage.setItem("ourBookMark" ,JSON.stringify(bookMarkList));
  displayBookMark()
} 
function UpdateBookMark(index)
{
  fristInput.value=bookMarkList[index].frInput;
  secondInput.value=bookMarkList[index].seInut;
  addButton.style.display="none"
  UpdatButton.style.display="block"

  BookMarkIndex=index;
}
function saveUpdate()
{
    bookMarkList[BookMarkIndex].frInput= fristInput.value;
    bookMarkList[BookMarkIndex].seInut= secondInput.value;
    localStorage.setItem("ourBookMark",JSON.stringify(bookMarkList))
    clearInput();
    displayBookMark();
    UpdatButton.style.display="none";
    addButton.style.display="block"

}