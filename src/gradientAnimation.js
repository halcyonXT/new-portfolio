let main =    {x: 0, y: 0};
let cyan =    {x: 0, y: 0};
let magenta = {x: 0, y: 0};
let step1 = {x: 0, y: 0};
let step2 = {x: 0, y: 0};
let step3 = {x: 0, y: 0};
let step4 = {x: 0, y: 0};
let step5 = {x: 0, y: 0};
let t1, t2;

const TextAnimation = {
    activePanel: "landing",
    activeCallback: function() {},

    panelTable: {
        "landing": "#mainlogo",
        "about": "#about",
        "proj": "#proj",
        "archess-r": "#archess-r",
        "typerate": "#typerate",
        "huid": "#huid",
        "collocus": "#collocus",
        "yttomp3": "#yttomp3",
        "noteplace": "#noteplace",
        "archess": "#archess",
        "cgol": "#cgol",
        "pong": "#pong",
    },

    refreshCallback: function() {
        let query = this.panelTable[this.activePanel];
        this.activeCallback = function(e) {
            let element = document.querySelector(query);

            if (!element) return;

            const makeBackground = () => {
                requestAnimationFrame(() => {
                    element.style.background = `
                        radial-gradient(circle at ${main.x}px ${main.y}px, rgb(20,20,20) 50px, transparent 51px),
                        radial-gradient(circle at ${cyan.x}px ${cyan.y}px, cyan 50px, transparent 51px),
                        radial-gradient(circle at ${magenta.x}px ${magenta.y}px, magenta 50px, white 51px)
                    `
                    /*element.style.background = `
                        radial-gradient(circle at ${main.x}px ${main.y}px, rgb(20,20,20) 50px, transparent 51px),
                        radial-gradient(circle at ${step1.x}px ${step1.y}px, rgb(60,60,60) 50px, transparent 51px),
                        radial-gradient(circle at ${step2.x}px ${step2.y}px, rgb(120,120,120) 50px, transparent 51px),
                        radial-gradient(circle at ${step3.x}px ${step3.y}px, rgb(140,140,140) 50px, transparent 51px),
                        radial-gradient(circle at ${step4.x}px ${step4.y}px, rgb(180,180,180) 50px, transparent 51px),
                        radial-gradient(circle at ${step5.x}px ${step5.y}px, rgb(220,220,220) 50px, white 51px)
                    `*/
                })
            }

            requestAnimationFrame(() => {
                let rect = element.getBoundingClientRect();
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;

                main = {x, y};

                
                t1 = setTimeout(() => {
                    cyan = {x, y};
                    makeBackground();
                }, 20) //11

                t2 = setTimeout(() => {
                    magenta = {x, y};
                    makeBackground();
                }, 35) //18
                

                /*setTimeout(() => {
                    step1 = {x, y}; 
                    makeBackground();}
                , 50)
                setTimeout(() => {
                    step2 = {x, y}; 
                    makeBackground();}
                , 100)
                setTimeout(() => {
                    step3 = {x, y}; 
                    makeBackground();}
                , 150)
                setTimeout(() => {
                    step4 = {x, y}; 
                    makeBackground();}
                , 200)
                setTimeout(() => {
                    step5 = {x, y}; 
                    makeBackground();}
                , 250)*/
                makeBackground();
            })
        }

        document.addEventListener("mousemove", this.activeCallback);
    },

    changeActivePanel: function(newPanel) {
        //console.log("New panel: " + newPanel);
        document.removeEventListener("mousemove", this.activeCallback);
        clearTimeout(t1);
        clearTimeout(t2);
        main =    {x: 0, y: 0};
        cyan =    {x: 0, y: 0};
        magenta = {x: 0, y: 0};

        this.activePanel = newPanel;
        this.refreshCallback();
    },

    init: function() {
        this.refreshCallback();
    }
}

export {
    TextAnimation
}

