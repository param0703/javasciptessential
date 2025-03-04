const sub_btn =document.getElementById('submitBtn').value;
    sub_btn.onclick=submit;
    
function submit(){
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const userProductChoice = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    alert("Thanks");
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userInfo').style.display = 'block';
}
document.addEventListener('keydown',function(event){
    if (event === 'Enter') {
        submit();
    }
});