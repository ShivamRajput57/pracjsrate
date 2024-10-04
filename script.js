const rate = document.querySelectorAll('li');
const sub =document.querySelector('button')
const box=document.querySelector('.box')
const thanks=document.querySelector('.thanks')
const selectedMessage = document.querySelector('.thanks h3');

console.log(box);
var temp = 0;
console.log(temp);

rate.forEach(function(number) {
    number.addEventListener('click', function(e) {
        // Reset styles for all list items before applying the new one
        rate.forEach(function(item) {
            item.style.backgroundColor = '';  // Reset background color
            item.style.color = '';            // Reset text color
        });

        // Set temp to the clicked number's value
        temp = parseInt(number.textContent);  // Get the text content of the clicked li
        console.log(temp);

        // Apply styles to the clicked list item
        e.target.style.backgroundColor = 'hsl(25, 97%, 53%)';  // Example background color
        e.target.style.color = '#fff';           // Example text color (white)
    });
});

sub.addEventListener('click',function(e){
    if (temp==0){
        console.log('cant submit this')
    } else {
        // Hide the rating box
    
        box.style.display = 'none';

        // Show the thank you box
        thanks.style.display = 'flex';



        selectedMessage.textContent = `You selected ${temp} out of 5`;
        console.log(selectedMessage)
    }
})


