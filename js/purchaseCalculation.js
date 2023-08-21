function getValue(inputId) {
   const element = document.getElementById(inputId);
   const elementStingValue = element.innerText;
   const elementValue = parseFloat(elementStingValue);
   return elementValue;
}
function totalPrice(inputValue) {
   const element = document.getElementById('total-price');
   const elementStingValue = element.innerText;
   const elementValue = parseFloat(elementStingValue);
   const newValue = elementValue + inputValue;
   element.innerText = newValue;
}
function addToLog(productName){
   const element = document.getElementById('product-history');
   const p = document.createElement('p');
   const count = element.childElementCount + 1;
   p.innerHTML = `${count}. ${productName}`;
   p.classList.add('font-bold')
   element.appendChild(p);
}
document.getElementById('accessory-one').addEventListener('click', function() {
   const accessoryOneTk = getValue('accessory-one-tk');
   totalPrice(accessoryOneTk);
   addToLog('K. Accessories Spoons');
});
document.getElementById('accessory-two').addEventListener('click', function() {
   const elementValue = getValue('accessory-two-tk');
   totalPrice(elementValue);
   addToLog('K. Accessories Dishes');
})
document.getElementById('home-cooker').addEventListener('click', function() {
   const elementValue = getValue('home-cooker-price');
   totalPrice(elementValue);
   addToLog('Home-Cooker');
})
function setHistoryPrice(cardId, priceId, productName){
   document.getElementById(cardId).addEventListener('click', function() {
      const elementValue = getValue(priceId);
      totalPrice(elementValue);
      addToLog(productName);
   })
}
setHistoryPrice('cap', 'cap-price', 'Sports Back Cap');
setHistoryPrice('jursey', 'jursey-price', 'Full Jursey Set');
setHistoryPrice('cates', 'cates-price', 'Sports Cates');
setHistoryPrice('relax-chair', 'relax-chair-price', 'Single Relax Chair');
setHistoryPrice('children-play', 'children-play-price', 'Children Play');
setHistoryPrice('sofa', 'sofa-price', 'Flexible Sofa');

document.getElementById('go-home').addEventListener('click', function() {
   window.location.href = 'index.html';
})
