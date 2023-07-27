from flask import Flask,render_template,Response
import cv2
import mediapipe as mp
import pyautogui
from main import videoon
import threading



app=Flask(__name__)

@app.route('/')

def first():
    return render_template('templates/first.html')


@app.route('/second')

def second():
    return render_template('templates/page2.html')


@app.route('/home')

def index():
    return render_template('templates/home.html')
    

@app.route('/video')


def func():
    return videoon()




def main():
    threading.Thread(target=func).start()

@app.route('/about')

def aboutus():
    return render_template('templates/aboutus.html')

@app.route('/contactus')

def contact():
    return render_template('templates/contact.html')

@app.route('/dragdrop')

def dragdrop():
    return render_template('templates/drag.html')




if __name__=='__main__':
    app.run(host='0.0.0.0',port='5000',debug=True)