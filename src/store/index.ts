import {createStore} from 'vuex'
//与进程通信
import {ipcRenderer} from 'electron'
export default createStore({
    state:{

    },
    mutations:{
        //获取base.json文件的内容
        // setBaseJson(state){
        //     ipcRenderer.invoke("setBaseJson").then(result=>{
        //         state.Engineering = new BaseJson(JSON.parse(result).ProjectID);
        //     })
        // },
    }
})