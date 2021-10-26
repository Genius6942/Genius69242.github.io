const content = `<style>
    #header {
        position: fixed;
        top: 0;
        left: 0;
        background: grey;
        width: 100vw;
        height: 50px;
        display: flex;
        align-items: center;
    }

    #header .item {
        font-size: large;
        margin: 0 10px;
        display: block;
        appearance: none;
        text-decoration: none;
        color: black;
        font-weight: bold;
        padding: 10px;
        border-radius: 5px;
    }
    
    #header .item:hover {
        background: rgb(87, 87, 87);
    }
</style>
<a href = '/' class="item left">Home</a>
<a href = '/projects' class="item left">Projects</a>
`
const div = document.body.appendChild(document.createElement('div'));
div.innerHTML = content;