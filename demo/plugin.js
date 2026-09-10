(function () {

    async function getHome(cb) {
        cb({
            success: true,
            data: {
                "Demo": [
                    new MultimediaItem({
                        title: "Demo Movie",
                        url: "https://example.com/demo-movie",
                        posterUrl: "",
                        type: "movie",
                        year: 2026,
                        description: "SkyStream repository test item."
                    })
                ]
            }
        });
    }

    async function search(query, cb) {
        cb({
            success: true,
            data: []
        });
    }

    function load(url, cb) {
        cb({
            success: true,
            data: new MultimediaItem({
                title: "Demo Movie",
                url: url,
                posterUrl: "",
                type: "movie",
                year: 2026
            })
        });
    }

    async function loadStreams(url, cb) {
        cb({
            success: true,
            data: []
        });
    }

    globalThis.getHome = getHome;
    globalThis.search = search;
    globalThis.load = load;
    globalThis.loadStreams = loadStreams;

})();
