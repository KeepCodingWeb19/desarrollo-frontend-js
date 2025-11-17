
export function notificationsController(notificationsContainer) {
  const showNotification = (message) => {
    notificationsContainer.innerHTML = `<h3>${message}</h3>`;
    setTimeout(() => {
      notificationsContainer.innerHTML = '';
    }, 5000);
  }

  return {
    showNotification
  }
}