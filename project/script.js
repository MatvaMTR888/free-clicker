```javascript
let clickCount = 0;

document.getElementById('clickButton').addEventListener('click', function() {
    clickCount++;
    document.getElementById('clickCount').innerText = clickCount;
});
```
