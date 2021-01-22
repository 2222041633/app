const ipcRenderer = window.require('electron').ipcRenderer
enum WindowBar {
    // 最大化
    max = 'window-max',
    // 最小化
    min = 'window-min',
    // 关闭
    close = 'window-close'
}
/**
 * 使指定元素拥有窗口最大化功能
 * @param elementid 元素id
 */
export function max(event: MouseEvent) {
    if (ipcRenderer) {
        // 发送窗口最大化命令   
        ipcRenderer.send(WindowBar.max)
    }
}

/**
 * 使指定元素拥有窗口最小化功能
 * @param elementid 元素id
 */
export function min(event: MouseEvent) {
    const el: any = event.target
    if (el) {
        // 发送窗口最小化命令
        ipcRenderer.send(WindowBar.min)
    }
}

/**
 * 使指定元素拥有窗口关闭功能
 * @param elementid 元素id
 */
export function close(event: MouseEvent) {
    const el: any = event.target
    if (el) {
        // 发送窗口关闭命令 
        ipcRenderer.send(WindowBar.close)
    }
}

export function init() {
    const max = document.querySelector('.al-icon-max')
    ipcRenderer.on('main-window-max', (event: any) => {
        max?.classList.remove('al-icon-max');
        max?.classList.add('al-icon-maxed');
    });
    ipcRenderer.on('main-window-unmax', (event: any) => {
        max?.classList.remove('al-icon-maxed');
        max?.classList.add('al-icon-max');
    });
}

