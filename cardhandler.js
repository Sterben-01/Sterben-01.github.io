tweetIDnum = 0;
function addCard(cardID)
{
    editCard = document.getElementById(cardID);
    var tweet = document.createElement("div");
    tweet.className = "card";
    tweet.id = "tweetID" + tweetIDnum.toString();
    tweet.innerHTML = `
        <div class="text-right">
            <button type="button" class="btn btn-danger" id="newButton">-</button>
        </div>
        <img class="card-img-top" src="https://cdn2.iconfinder.com/data/icons/social-media-square-set/960/Twitter_Sq-512.png" alt="Twitter Logo">
        <div class="card-body">
            <h5 class="card-title text-right">Tweet</h5>
            <p class="card-text text-right">Sample tweet will go here!</p>
        </div>
        `;
    editCard.appendChild(tweet);
    document.getElementById("newButton").addEventListener('click', function()
    {
        removeCard(tweet.id);
    });
    document.getElementById("newButton").id = "";
    this.tweetIDnum++;
}
function removeCard(cardID)
{
    document.getElementById(cardID).remove();
}
