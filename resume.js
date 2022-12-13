document.getElementById('btn').addEventListener('click',function(e){

    e.preventDefault()

    

    var details={
        fullName:'',
        mobileNumber:'',
        emailId:'',
        tenth:'',
        inter:'',
        degree:'',
        mySkills:'',
        myHobbies:''
    }
        

        details.fullName=document.getElementById('fname').value
        details.mobileNumber=document.getElementById('contact').value
        details.emailId=document.getElementById('Email').value
        details.tenth=document.getElementById('ssc').value
        details.inter=document.getElementById('inter').value
        details.degree=document.getElementById('ug').value
        details.mySkills=document.getElementById('s').value
        details.myHobbies=document.getElementById('h').value

        

        buildResume(details)        
})
function buildResume(details){

    
    document.getElementById('name').innerHTML=details.fullName
    document.getElementById('mobile').innerHTML=details.mobileNumber
    document.getElementById('email').innerHTML=details.emailId
    document.getElementById('10').innerHTML=details.tenth
    document.getElementById('12').innerHTML=details.inter
    document.getElementById('ug_resume').innerHTML=details.degree
    document.getElementById('sk').innerHTML=details.mySkills
    document.getElementById('hob').innerHTML=details.myHobbies

    

    document.getElementById('op').style.visibility='visible'
}