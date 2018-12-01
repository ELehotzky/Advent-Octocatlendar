const catCards = [{
    // octocat pics go here
    title: ,
    creator: ,
    relLink: 
}];

function OctoCard(title, creator, relLink) {
    this.title = title
    this.creator = creator
    this.relLink = relLink
    this.day = () => {
        this.relLink.slice(-6, -4)
    }
}

const cardDeck = (catCards)=>{
    newDeck = []
    catCards.forEach(card) => {
        newCard = new OctoCard( , , )
    }
}