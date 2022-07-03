let content = document.getElementById("content")

let masonry = document.createElement("div")
masonry.setAttribute("class", "masonry");

function tag1() {
    GetimgData("hydraulic press");
}

function tag2() {
    GetimgData("oddly satisfying");
}


function tag3() {
    GetimgData("coffee");
}

function tag4() {
    GetimgData("staff picks");
}

function tag5() {
    GetimgData("gaming");
}

function tag6() {
    GetimgData("memes");
}

function tag7() {
    GetimgData("clean your desk");
}

function tag8() {
    GetimgData("funny");
}

function tag9() {
    GetimgData("aww");
}

function input() {
    // masonry.innerHTML = null;
    let inputSearch = document.getElementById("search-value").value;
    // console.log(inputSearch)
    GetimgData(inputSearch);
}


let init = 1;

const GetimgData = async (query) => {

    try {

        let res = await fetch(`https://giphy.p.rapidapi.com/v1/gifs/search?api_key=SOc2GyQ7rK9nRUE90XVZudwEznWtpKFA&q=${query}&offset=${init}&limit=10`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "giphy.p.rapidapi.com",
                "x-rapidapi-key": "84f27faa4amsha91357a0cc9492ep16b406jsn0877d4ddd52b"
            }
        })

        let data = await res.json()
        // console.log(data.data)
        searchquery.value = "";
        showData(data.data)

    } catch (err) {
        console.log(err)
    }
}

GetimgData("trending programming");

function showData(data) {
    // console.log(data)
    masonry.innerHTML = null;
    data.forEach((e) => {
        //   console.log(e.images.original.url)
        console.log(e.title)
        let item = document.createElement("div")
        item.setAttribute("class", "item")

        let img = document.createElement("img")
        img.setAttribute("class", 'big-img')
        img.src = e.images.original.url

        //-----

        let contText = document.createElement("div")
        contText.setAttribute("class", "cont-text")

        //-----

        let header = document.createElement("div")
        header.setAttribute("class", "text-img-header")
        header.innerText = e.title;

        //-----

        let social = document.createElement("div")
        social.setAttribute("class", 'social-value')
        //-----

        let vote = document.createElement("div")
        vote.setAttribute("class", "vote-div")

        // let span1 = document.createElement("div")
        let voteSvg = document.createElement("img")
        voteSvg.src = "./png/vote.png"
        // span1.append(voteSvg)

        let span2 = document.createElement("div")
        span2.innerText = Math.floor(Math.random() * 90 + 10)

        vote.append(voteSvg, span2)

        //-----

        let comment = document.createElement("div")
        comment.setAttribute("class", "comment-div")

        // let span3 = document.createElement("div")
        let commentSvg = document.createElement("img")
        commentSvg.src = "./png/comment.png"
        // span3.append(commentSvg)

        let span4 = document.createElement("div")
        span4.innerText = Math.floor(Math.random() * 900 + 10)

        comment.append(commentSvg, span4)

        //-----

        let view = document.createElement("div")
        view.setAttribute("class", "view-div")

        // let span5 = document.createElement("div")
        let viewSvg = document.createElement("img")
        viewSvg.src = "./png/view.png"
        // span5.append(viewSvg)

        let span6 = document.createElement("div")
        span6.innerText = Math.floor(Math.random() * 10) + "K"

        view.append(viewSvg, span6)

        //-----

        social.append(vote, comment, view),

            contText.append(header, social)

        item.append(img, contText)

        masonry.append(item)
        content.append(masonry)
    })

}

let searchquery = document.getElementById("search-value");
let dropDown = document.getElementById("dropDown");

let time;
searchquery.oninput = () => {
    if (time) {
        clearTimeout(time);
    }

    time = setTimeout(() => {
        let query = searchquery.value;
        getValue(query);
    }, 2000);
};

const getValue = async (query) => {

    try {
         let res = await fetch(`https://giphy.p.rapidapi.com/v1/gifs/search?api_key=SOc2GyQ7rK9nRUE90XVZudwEznWtpKFA&q=${query}&limit=5`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "giphy.p.rapidapi.com",
                "x-rapidapi-key": "84f27faa4amsha91357a0cc9492ep16b406jsn0877d4ddd52b"
            }
        })


        let data = await res.json()
        // console.log(data)
        displayDropDown(data.data)

    } catch (err) {
        console.log(err)
    }
}

// let arr = [];

function displayDropDown(data) {
    dropDown.innerHTML = null;
    data.forEach((res) => {
        let searchDiv = document.createElement("div");
        searchDiv.setAttribute("class", "searchDiv");

        let searchTitle = document.createElement("div");
        searchTitle.textContent = res.title;

        // console.log(searchTitle.textContent);

        // arr.push(searchTitle.textContent);
        // console.log(arr);

        searchDiv.onclick = () => {
            dropDown.innerHTML = null;
            let query = searchTitle.textContent;
            console.log(query);
            GetimgData(query);
        }
        searchDiv.append(searchTitle);
        dropDown.append(searchDiv);
    });
}

function nullText() {
    dropDown.innerHTML = null;
}
