#author: abdulbasit abdulganiyu
#date modified: 14/03/2023
#design for: AA Integrated Limited
print ("THIS IS PROGRAM THAT GIVES THE VALUE OF A RESISTOR BASED ON COLOUR CODE")
colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'voilet', 'grey', 'white']
for i in range(len(colors)):
    print(colors[i], i)

color1 = int (input("Enter the 1st color on the resistor: "))
color2 = int (input("Enter the 2nd color on the resistor: "))
color3 = int (input("Enter the 3rd color on the resistor: "))
color4 = int (input("Enter the 4th color on the resistor: "))

color_code =float((10*color1)+(1*color2)+(1*color3))* 10**(color4)

print ('The resistor value is {:.2f} ohms'.format(color_code))

