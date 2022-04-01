
function gotQuote(response){
    console.log("The call was a success");
    console.log(response);
    console.log(response.text);
    let quote = response.data.text;
    document.getElementById('quote').innerText = quote
}

function apiFailure(error){
    console.log("The call was a failure");
    console.log(error);
}

function getQuote(){
    axios.request({
        method : "GET",
        url : "https://quoteclear.web.app/api/random"
    }).then(gotQuote).catch(apiFailure);
}

document.getElementById('getQuote').addEventListener('click', getQuote);