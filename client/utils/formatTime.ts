export const formatTime = (time: string) => {
  const currentTime = new Date();
  const tempTime = currentTime.getTime() - parseInt(time);
  const timeInSeconds = Math.floor(tempTime / 1000);

  let formattedTime: string = '';

  if (timeInSeconds < 60) formattedTime = timeInSeconds + 's';
  if (timeInSeconds > 60 && timeInSeconds < 3600) formattedTime = Math.floor(timeInSeconds / 60) + 'm';
  if (timeInSeconds > 3600 && timeInSeconds < 86400) formattedTime = Math.floor(timeInSeconds / 60 / 60) + 'hr';
  if (timeInSeconds > 86400 && timeInSeconds < 604800) formattedTime = Math.floor(timeInSeconds / 60 / 60 / 24) + 'd';
  if (timeInSeconds > 604800 && timeInSeconds < 2592000) formattedTime = Math.floor(timeInSeconds / 60 / 60 / 24 / 7) + 'w';
  if (timeInSeconds > 2592000 && timeInSeconds < 31557600) formattedTime = Math.floor(timeInSeconds / 60 / 60 / 24 / 30) + 'm';
  if (timeInSeconds > 31557600) formattedTime = Math.floor(timeInSeconds / 60 / 60 / 24 / 365) + ' yr';

  return formattedTime + ' ago';
};
