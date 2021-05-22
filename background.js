//onInstalled.addListener(listener: function)
let color = '#e74c3c';
let color2 = '#9b59b6';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({color});
  //chrome.storage.sync.set({color2});
  console.log('Default background color set to %cstupid manny %coh %cbitchass hoe no color', `color: ${color}`, `color: ${color2}`, `color: ${color}`, 'ok no color');

  //console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
});
