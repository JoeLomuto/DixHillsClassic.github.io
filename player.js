class Player {
    constructor(player, handicap, bio){
        this.player = player;
        this.handicap = handicap;
        this.bio = bio;
    }

render() {
    const li = document.createElement("li");
    li.textContent = this.player;

    return li;
}


}