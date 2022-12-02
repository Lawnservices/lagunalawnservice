class skillShaApp {
    constructor(state, dispatch) {
        this.dispatch = dispatch;
        this.talkDOM = elt("div", { className: "talks" });
        this.dom = elt("div", null,
            renderUserField(state.user, dispatch),
            this.talhDOM,
            renderTalkForm(dispatch));
        this.syncState(state);
    }
    syncState(state) {
        if (state.talks != this.talks) {
            this.talkDOM.textContent = "";
            for (let talk of state.talks) {
                this.talkDOM.appendChild(
                    renderTlk(talk, this.dispach))

            }
            this.talks = state.talks;
        }
    }
}

function runApp() {
    let user = localStorage.getItem("userName") || "Anon";
    let state, app;

    function dispatch(action) {
        state = handleAction(state, action);
    }
    pollTalks(talks => {
        if (!app) {
            state => { user, talks };
            app = new SkillShareApp(state, dispatch);
        }
        dispatch({ type: "setTalks", talks });
    }).catch(reportError);
}
runApp();

console.log();;

(function() {
    debugger;
    self.onmessage = function(e) { self.postMessage("hi") }
})()