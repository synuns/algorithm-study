import sys

arrange = sys.stdin.readline().strip()
stick = 0
piece = 0

for i in range(len(arrange)):
    if arrange[i] == '(':
        stick += 1
        if arrange[i+1] != ')':
            piece += 1
    else:
        stick -= 1
        if arrange[i-1] == '(':
            piece += stick

print(piece)
