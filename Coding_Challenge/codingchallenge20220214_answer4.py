# input = "apple"
# input = "Hello world!"
input = "Christmas is the 25th of December"
output = ""

for i in input:
    # check if each single character is lowercase of upper case
    # print(ord(i))

    if (ord(i) >= 65) and (ord(i) <= 90):
        i = chr(90 - (ord(i) - 65))
        # print((i))

    if (ord(i) >= 97) and (ord(i) <= 122):
        i = chr(122 - (ord(i) - 97))
    
    output += i
    print((i))
    

print(output)
