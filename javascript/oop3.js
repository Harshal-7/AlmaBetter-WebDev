function Sport(name,totalPlayers)
{
    this.name = name;
    this.totalPlayers = totalPlayers;

    this.printTotalPlayer = function() {
        console.log(totalPlayers);
    }

}

const cricket = new Sport("Cricket",11);
console.log(cricket);
cricket.printTotalPlayer(); 