let searchInputEl = document.getElementById("searchInput");
let searchResults=document.getElementById("searchResults");
let spinnerEle=document.getElementById("spinner");



function createAndAppendsearchresults(result){

    let {title,link,description}=result;

    //div container result-item 
    let resultItemEle=document.createElement("div");
    resultItemEle.classList.add("result-item");
    searchResults.appendChild(resultItemEle);

    //anchor result title 
    let resultTitleEle=document.createElement("a");
    resultTitleEle.classList.add("result-title");
    resultTitleEle.textContent=title;
    resultTitleEle.href=link;
    resultTitleEle.target="_blank";
    resultItemEle.appendChild(resultTitleEle);

    // break line
    let breakEle=document.createElement("br");
    resultItemEle.appendChild(breakEle);

    //anchor link url 

    let resultUrl=document.createElement("a");
    resultUrl.classList.add("result-url");
    resultUrl.textContent=link;
    resultUrl.href=link;
    resultUrl.target="_blank"
    resultItemEle.appendChild(resultUrl);

    //break line 
    let inlineBreakEle=document.createElement("br");
    resultItemEle.appendChild(inlineBreakEle);

    //line description 

    let descriptionEle=document.createElement("p");
    descriptionEle.classList.add("link-description")
    descriptionEle.textContent=description;
    resultItemEle.appendChild(descriptionEle);

}


function display_results(searchResults){
    spinnerEle.classList.toggle("d-none");
    for(let result of searchResults){
        createAndAppendsearchresults(result);

    }
    //let result=searchResults[0];
    //createAndAppendsearchresults(result);
    
}



function searchWikipedia(event){
    if(event.key==="Enter"){

        spinnerEle.classList.toggle("d-none");
        searchResults.textContent="";
        
        let searchInput=searchInputEl.value;
        let url="https://apis.ccbp.in/wiki-search?search="+searchInput;

        let option={
            method:"GET"
        }

        fetch(url,option)
        .then(function(response){
            return response.json();
        })

        .then(function(jsonData){
            let{search_results}=jsonData;
            display_results(search_results);
        })
    }
}




searchInputEl.addEventListener("keydown",searchWikipedia);