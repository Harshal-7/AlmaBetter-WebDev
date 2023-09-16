// CLASS

class Sports
{
    constructor(name,totalPlayers)
    {
        this.game = name;
        this.totalP = totalPlayers;
    }

    printGame()
    {
        console.log(this.game);
    }

    printTotalPlayers()
    {
        console.log(this.totalP);
    }

}

const cricket = new Sports("Cricket",11);

cricket.printGame();
cricket.printTotalPlayers();