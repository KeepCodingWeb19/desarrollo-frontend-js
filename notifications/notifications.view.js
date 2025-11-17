export const buildNotification = (message) => {
    return `
    <div style="display: flex;">
        <h3>${message}</h3>
        <button>❌</button>
    </div>
    `
}