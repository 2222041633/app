const remote = window.require("electron").remote;
/**
 * @param window 窗口对象
 * @param elementId 可拖拽的元素
 */
export function drag(elementId: string) {
    if (remote) {
        const el: HTMLElement | null = document.querySelector(elementId);
        el?.addEventListener('mouseenter', () => {
            remote.setIgnoreMouseEvents && remote.setIgnoreMouseEvents(true, { forward: true })
        })
        el?.addEventListener('mouseleave', () => {
            remote.setIgnoreMouseEvents && remote.setIgnoreMouseEvents(false)
        })
        el && (el.style.cssText = '-webkit-app-region: drag')
    }
}

export function showErrorMessage(title: string, content: string) {
    if (remote) {
        remote.dialog.showErrorBox(title, content);
    }
}