class Player {
    constructor(name, position, rank){
        this.name = name
        this.position = position
        this.rank = rank
    }

    describe() {
        return `${this.name} plays ${this.position} and is ranked ${this.rank}.`
    }
}

class Team {
    constructor(name){
        this.name = name
        this.players = []
    }

    addPlayer() {
        if (player instanceof Player) {
            this.players.push(player)
        } else {
          throw new Error(`ERROR: ARGUMENT IS NOT A PLAYER: ${player}`)  
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} players.`
    }
}


class Menu {
    constructor(){
        this.teams = []
        this.selectedTeam = null
    }

    start(){
        let selection = this.showMainMenuOptions()
        while (selection !=0){
            switch (selection){
                case '1':
                    this.createTeam()
                    break
                case '2':
                    this.viewTeam()
                    break
                case '3':
                    this.deleteTeam()
                    break
                case '4':
                    this.displayTeams()
                    break
                default:
                    selection=0
            }
            selection = this.showMainMenuOptions()
        }
        alert('Goodbye and Good Luck!')
    }
    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Create New Team
        2) View Team
        3) Delete Team
        4) Display All Teams
        `)
    }

    showTeamMenuOptions(teamInfo){
        return prompt(`
            0) Back
            1) Create a Player
            2) Delete a Player
            --------------------
            ${teamInfo}
        `)
    }

    displayTeams() {
        let teamString = ''
        for (let i=0; i<this.teams.length; i++){
            teamString += i + ') ' + this.teams[i].name + '\n'
        }
        alert(teamString)
    }

    createTeam() {
        let name = prompt('Enter your team name:')
        this.teams.push(new Team(name));
    }


    viewTeam() {
        let index = prompt('Enter the index of the team you wish to view')
        if (index> -1 && index < this.teams.length){
            this.selectedTeam = this.teams[index]
            let description = 'Team Name: ' + this.selectedTeam.name + '\n'

            for (let i = 0; i<this.selectedTeam.players.length; i++){
                description += i + ') ' + this.selectedTeam.players[i].name 
                + ' ' + this.selectedTeam.players[i].position
                + ' (' + this.selectedTeam.players[i].rank + ')\n'
            }

            let selection = this.showTeamMenuOptions(description)
            switch(selection){
                case '1':
                    this.createPlayer()
                    break
                case '2':
                    this.deletePlayer()
            }
        }
    }
    deleteTeam(){
        let index = prompt('Enter the index of the team you wish to delete:')
        if (index>-1 && index < this.teams.length){
           this.teams.splice(index, 1) 
        }
    }
    createPlayer(){
        let name = prompt('Enter name for new player:');
        let position = prompt('Enter position for new player:')
        let rank = prompt('Enter rank for new player:');
        this.selectedTeam.players.push(new Player(name, position, rank))
    }

    deletePlayer(){
        let index = prompt('Enter the index of the player you wish to delete:');
        if (index > -1 && index < this.selectedTeam.players.length){
            this.selectedTeam.players.splice(index, 1);
        }
    }
}


let menu = new Menu();
menu.start();