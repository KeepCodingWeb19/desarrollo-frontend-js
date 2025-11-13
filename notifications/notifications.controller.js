
export function notificationsController(notificationsContainer) {
  const showNotification = (message) => {
    notificationsContainer.innerHTML = `<h3>${message}</h3>`;
  }

  return {
    showNotification
  }
}