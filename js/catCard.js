// octocat pics go here
const catCards = [
    {
        creator: "Cameron McEfee",
        relLink: 'img/01_shoptocat.png'
    },
    {
        creator: "Tony Jaramillo",
        relLink: 'img/02_hanukkat.png'
    },
    {
        creator: "Cameron McEfee",
        relLink: 'img/03_jenktocat.jpg'
    },
    {
        creator: "Cameron McEfee",
        relLink: 'img/04_repo.png'
    },
    {
        creator: "Cameron McEfee",
        relLink: 'img/05_scottocat.jpg'
    },
    {
        creator: "James Kang",
        relLink: 'img/06_carlostocat.gif'
    },
    {
        creator: "Jordan McCullough",
        relLink: 'img/07_scarletteocat.jpg'
    },
    {
        creator: "Jason Costello",
        relLink: 'img/08_waldocat.png'
    },
    {
        creator: "Jason Costello",
        relLink: 'img/09_cherryontop-o-cat.png'
    },
    {
        creator: "Haley Carroll",
        relLink: 'img/10_mona-lovelace.jpg'
    },
    {
        creator: "Cameron McEfee",
        relLink: 'img/11_class-act.png'
    },
    {
        creator: "Cameron McEfee",
        relLink: 'img/12_socialite.jpg'
    },
    {
        creator: "Haley Carroll and kimestoesta",
        relLink: 'img/13_dinotocat.png'
    },
    {
        creator: "Cameron McEfee",
        relLink: 'img/14_drunktocat.jpg'
    },
    {
        creator: "Haley Carroll",
        relLink: 'img/15_saint-nictocat.jpg'
    },
    {
        creator: "James Kang",
        relLink: 'img/16_filmtocat.png'
    },
    {
        creator: "Cameron McEfee",
        relLink: 'img/17_puppeteer.png'
    },
    {
        creator: "Haley Carroll",
        relLink: 'img/18_snowtocat_final.jpg'
    },
    {
        creator: "Cameron McEfee",
        relLink: 'img/19_poptocat.png'
    },
    {
        creator: "Cameron McEfee",
        relLink: 'img/20_forktocat.jpg'
    },
    {
        creator: "James Kang",
        relLink: 'img/21_maxtocat.gif'
    },
    {
        creator: "Cameron McEfee",
        relLink: 'img/22_setuptocat.jpg'
    },
    {
        creator: "Joao Ribeiro and Joel Glovier",
        relLink: 'img/23_welcometocat.png'
    },
    {
        creator: "Tony Jaramillo",
        relLink: 'img/24_grinchtocat.gif'
    },
    {
        creator: "Cameron McEfee",
        relLink: 'img/25_saint-nicktocat.jpg'
    },

];

function OctoCard(creator, relLink) {
    this.creator = creator
    this.relLink = relLink
    this.day = () => {
        return this.relLink.slice(4, 6)
    }
    this.title = () => {
        return this.relLink.slice(7, -4)
    }
}

const newDeck = (catCards)=>{
    let newDeck = []
    catCards.forEach((card) => {
        newCard = new OctoCard(card.creator, card.relLink)
        newDeck.push(newCard)
    })
    return newDeck
}