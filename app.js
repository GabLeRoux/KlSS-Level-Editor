var app = new Vue({
    el: '#app',
    data: {
        brushId: 0,
        exportedLevel: "",
        grid: [],
    },
    methods: {
        resetLevel: function () {
            // generate 16x16 level
            for (i = 0; i < 16; i++) {
                this.grid[i] = [];
                for (j = 0; j < 16; j++)
                    this.grid[i][j] = 1;
            }
        },
        selectBrush: function (id) {
            this.brushId = id;
        },
        paint: function (x, y) {
            console.log(x + " " + y);
            this.grid[x][y] = this.brushId;
        },
        export: function () {
            // TODO: use data from tile to generate text for level file
        },
        import: function () {
            // TODO: use data pasted in box to fill level
        },
        validate: function () {
            // TODO: outer cells are walls
            //       there is one player
            //       there is at least one heart
            //       there is at least one lover
        }
    }
})