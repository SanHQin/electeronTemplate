//app 控制应用程序的事件生命周期。
//BrowserWindow 创建并控制浏览器窗口。
import {app,BrowserWindow,Menu} from 'electron'
import path from 'path';

//系统软件地址
// const ExePath = app.isPackaged ? path.dirname(app.getPath('exe')) : app.getAppPath();

//设置菜单栏
// Menu.setApplicationMenu(null)

let win: BrowserWindow | null;
//定义全局变量获取 窗口实例
function createWindow(){
    win = new BrowserWindow({
        //设置窗口大小
        width:1500,
        height:1000,
        // minWidth: 1500,
        // minHeight: 800,
        //设置窗口全屏
        // fullscreen: true,//设置默认全屏
        // titleBarStyle: 'hiddenInset',

        // frame:false,//设置顶部菜单栏与程序边框是否显示 默认 true
        webPreferences: {
            devTools: true,
            contextIsolation: false,
            nodeIntegration: true
            //允许html页面上的javascript代码访nodejs 环境api代码的能力（与node集成的意思）
        }
    })
    //设置窗口最大化
    // win.maximize();
    
    if (process.env['NODE_ENV']!='development') {
        win.loadFile(path.join(__dirname, "../index.html")).then(() => {
            console.log("从文件加载")
        })

    } else {
    //VITE_DEV_SERVER_HOST 如果是undefined 换成  VITE_DEV_SERVER_HOSTNAME

        win.loadURL(`${process.env['VITE_DEV_SERVER_URL']}`).then(()=>{
            console.log("从地址加载")
        })
    }
    //win窗口的图标
    // win.setIcon(path.join(__dirname,'../logo.ico'));
    
    //设置win窗口的标题
    win.setTitle("electron模板")
    //开启开发者模式(调试窗口)
    // win.webContents.openDevTools();
    // window(win);

}
//当app启动时创建窗口
app.whenReady().then(()=>{
    // 打开窗口
    createWindow();

})