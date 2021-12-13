const intialState = {
    time: { h: 0, m: 0, s: 0, ms: 0 },
    focus: "",
    interv: '',
    show: false,
    showkey: false,
    showtime: true,
    colorchange: false
}

const countDownReduces = (state = intialState, action) => {
    switch (action.type) {
        case 'SETHOURS':
            state.time.h = action.data;
            return { ...state }
        case 'SETMINUTE': state.time.m = action.data;
            return { ...state }
        case 'SETSECOND': state.time.s = action.data;
            return { ...state }
        case 'SETMSECOND': state.time.ms = action.data;
            return { ...state }
        case 'SETINTERV': state.interv = action.data;
            console.log("action.data", action.data)
            return { ...state }
        case 'SETSHOWTIME': state.showtime = action.data;
            return { ...state }

        case 'SETSHOW': state.show = action.data;
            state.showkey = action.data
            return { ...state }
        case 'SETCOLORCHANGE': state.colorchange = action.data;
            return { ...state }

        case 'ONFOCUS': state.focus = action.data;
            return { ...state }

        case 'STOPTIMER':
            clearInterval(state.interv)
            state.show = false
            return { ...state }
        case 'RESETTIMER':
            console.log("RESET")
            clearInterval(state.interv)
            state.showkey = false
            state.showtime = true
            state.colorchange = false
            state.show = false
            state.time.s = 0
            state.time.m = 0
            state.time.h = 0
            return { ...state }
        default: return state;
    }

}
export default countDownReduces;