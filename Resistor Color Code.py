print ("THIS IS PROGRAM THAT GIVES THE VALUE OF A RESISTOR BASED ON COLOUR CODE")
print("0. Black")
print ("1. Brown")
print ("2. Red")
print ("3. Orange")
print ("4. Yellow")
print ("5. Green")
print ("6. Blue")
print ("7. Violent")
print ("8. Grey")
print ("9. white")
print ("Kindly input the value according to the colour code giving above")
color1 = int (input("Enter the 1st color on the resistor:"))
color2 = int (input("Enter the 2nd color on the resistor:"))
color3 = int (input("Enter the 3rd color on the resistor:"))
color4 = int (input("Enter the 4th color on the resistor:"))

color_code =float((10*color1)+(1*color2)+(1*color3))* 10**(color4)

print ('The resistor value is {:.2f} ohms'.format(color_code))
