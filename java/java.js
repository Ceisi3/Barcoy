let card = {
    fetchCard: function(card) {
        fetch("https://api.chucknorris.io/jokes/random?category=dev")
            .then((response) => response.json())
            .then((data) => this.displayCard(data));
    },
    displayCard: function(data) {
        const { id } = data;
        const { value } = data.value;
        const { created_at } = data.created_at;
        const { icon_url } = data.icon_url;
        console.log(id, value, created_at, icon_url);
        document.querySelector(".kutsu").innerHTMLText = id;
        document.querySelector(".lainaus").innerHTMLText = value;
        document.querySelector(".icon").src = "https://assets.chucknorris.host/img/avatar/chuck-norris.png";
        document.querySelector(".date").date = created_at;

    }
};