<script>
    import {check_win} from "../mylib/lib"

    let square = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    let win = false;

    let player = 1;
    $: turn = "Player turn = " + (player === 1 ? "X" : "O");

    function wincondition(
        /** @type {number} */
        i,
        /** @type {number} */
        j) {
        if (check_win(square, player) === true && win === false) {
            square[i][j] = player;
            if (player === 1)
                alert("X win");
            else
                alert("O win");
            win = true;
        }
    }

    function handleclick(
        /** @type {number} */
        i,
        /** @type {number} */
        j) {
        if (square[i][j] === 0) {
            square[i][j] = player;
        }
        wincondition(i, j);
        if (player === 1)
            player = 2;
        else
            player = 1;
    }

    function reset() {
        square = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        win = false;
        player = 1;
    }

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
</svelte:head>

<section>
	<h1>
		Svelte tic tac toe
	</h1>

    <p>{turn}</p>

    <div class="board">
        {#each square as row, i}
            <div class="row">
                {#each row as _case, j}
                    <div class="_case">
                        {#if _case === 0}
                            <button on:click={() => handleclick(i, j)}></button>
                        {/if}
                        {#if _case === 1}
                            X
                        {:else if _case === 2}
                            O
                        {/if}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
    <div class ="reset">
        <button on:click={() => reset()}>Reset</button>
    </div>
</section>

<style>
    :global(body){
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        font-family: 'Montserrat', comic-sans-serif;
        font-style: normal;
        font-weight: 400;
        background-image: url("https://www.bureau-ice.com/wp-content/uploads/2017/11/background-site.jpg");
        background-position: center;
        background-size: cover;
    }

    :global(h1, h2){
        align-items: center;
    }
    .row {
        display: flex;
        justify-content: center;
    }
    ._case{
        width: 50px;
        height: 50px;
        margin: 1px;
        border: 1px solid black;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        font-size: 40px;
    }
    ._case button {
        width: 100%;
        height: 100%;
        font-size: 40px;
        background-color: transparent;
        border: 0;
    }


    .reset button{
        font-size: 20px;
        /* add marge */
        margin : 10px;
        padding : 0px 20px;
    }
</style>
