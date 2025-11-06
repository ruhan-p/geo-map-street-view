const s = document.createElement('script');
s.src = chrome.runtime.getURL('injector.js');
(document.head || document.documentElement).appendChild(s);
s.onload = () => s.remove();