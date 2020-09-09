from django.contrib.auth import authenticate, logout, login, SESSION_KEY
from django.contrib.auth.decorators import login_required

from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.models import User, auth
from django.db import IntegrityError
from django.shortcuts import render, redirect


# Create your views here.
def onhome(request):
    return render(request,'index.html')

@login_required(login_url= 'user_login')
def donate(request):
    return render(request,'donate.html')

@login_required(login_url= 'user_login')
def apply(request):
    return render(request,'apply.html')

#@csrf_protect
def login(request):
    if request.method == 'GET':
        return render(request, 'joinus.html')
    else:
        #picup=globals(username)
        user = authenticate(email=request.POST['Email'], password=request.POST['password'])
        global email

        if user is  None:

            #auth.login(request,user)
            auth.login(request,user)
            request.session[SESSION_KEY] = user._meta.pk.value_to_string(user)
            #login(request)
            #return redirect('/', {'param':'hi you are logged in'})
            #return render(request,'current.html',{'param': 'hello you are logedin ' })
            #sessionStorage.setItem('isloggedIn',True)
            return redirect(current)
        else:
            return render(request, 'joinus.html', {'ok':'Invalid email or password'})




def signup(request):
    if request.method == 'GET':
        return render(request, 'signup.html')
    else:
        #global username
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        last_name = request.POST['re_type_password']
        if password == last_name:
            try:
                x = User.objects.create_user(username=username, email=email, password=password)
                x.save()

                return redirect(login)
            except IntegrityError:
                return render(request, 'signup.html',
                              {'error': 'username has used previously please try with another one'})


        else:
            return render(request, 'signup.html', {'name': 'You entered wrong password , please try again'})

def user_logout(request):
    if request.method == 'POST':
        logout(request)
        return redirect('/')

def current(request):
    return render(request,'current.html',{'name':'current page'})



@login_required()
def changepass(request):
   form=PasswordChangeForm(request.user)
   bramh = {
       'form':form
   }

   return render(request,'changepass.html',bramh)