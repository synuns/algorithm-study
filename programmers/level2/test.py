def solution(records):
    answer = []
    id_list = {}
    for record in records:
        try:
            command, uid, nickname = record.split()
        except:
            nickname = ''
            command, uid = record.split()
        if command == 'Enter':
            id_list['uid'] = nickname
            answer += f'{uid}님이 들어왔습니다.'
        elif command == 'Leave':
            answer += f'{uid}님이 나갔습니다.'
        elif command == 'Change':
            id_list['uid'] = nickname

    for uid, nickname in id_list:
        for i in range(len(answer)):
            answer[i].replace(uid, nickname)

    return answer


record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo",
          "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
print(solution(record))
