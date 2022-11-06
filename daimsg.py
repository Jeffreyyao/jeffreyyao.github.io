import sys
import qrcode
import os

if len(sys.argv)==0:
    print("pass in the message as first argument")
    quit()

qr = qrcode.QRCode()
qr.add_data(sys.argv[1])
img = qr.make_image(fill_color="white", back_color="black")
img.save("images/daimsg.png")

os.system("git add .; git commit -m \"new daimsg.png\"; git push")