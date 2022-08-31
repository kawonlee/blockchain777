// 오늘의 숙제! 미연시 만들기 || 아키네이터 만들기
// prompt를 이용해서 입력값을 받아서 선택지를 선택하고
// 선택한 선택지에 따라서 다른 질문이 나와야함
// 최소 개수 조건 : 조건 10개, 결과 5개
// 결론도 다르게 나와야한다.
// 만약에 선택지가 1~4번까지 있으면 5를 선택하면 다시 선택하게 해야함

const player = prompt("참여자의 이름을 입력해주세요.");
let q1, q2, q3, q4, q5;

switch (player) {
  case "이가원":
    console.log(player);
    q1 = prompt("참여자의 성별을 입력해주세요 (남 or 여)");
    switch (q1) {
      case "남":
        console.log("그 성별이 아닐텐데?");

      case "여":
        console.log(q1);
        q2 = prompt(`
        참여자의 나이대는?
        1. 20대
        2. 30대
        3. 그 외`);
        switch (q2) {
          case "1":
            console.log("20대");
            q3 = prompt(`
            참여자의 직종을 입력해주세요
            1. 학생
            2. 백수`);
            switch (q3) {
              case "1":
                console.log("학생");
                q4 = prompt(`
                참여자의 취미를 입력해주세요
                1. 게임
                2. 드라이브
                3. 등산`);
                switch (q4) {
                  case "1":
                    console.log("게임");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  case "2":
                    console.log("드라이브");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  case "3":
                    console.log("등산");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  default:
                    console.log("올바른 선택지가 아닙니다.");
                }
                break;
              case "2":
                console.log("백수");
                q4 = prompt(`
                참여자의 취미를 입력해주세요
                1. 게임
                2. 드라이브
                3. 등산`);
                switch (q4) {
                  case "1":
                    console.log("게임");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  case "2":
                    console.log("드라이브");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  case "3":
                    console.log("등산");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  default:
                    console.log("올바른 선택지가 아닙니다.");
                }
                break;
              default:
                console.log("시키는 것만 하라고 쫌!!!");
            }
            break;
          case "2":
            console.log("30대");
            q3 = prompt(`
            참여자의 직종을 입력해주세요
            1. 학생
            2. 백수`);
            switch (q3) {
              case "1":
                console.log("학생");
                q4 = prompt(`
                참여자의 취미를 입력해주세요
                1. 게임
                2. 드라이브
                3. 등산`);
                switch (q4) {
                  case "1":
                    console.log("게임");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  case "2":
                    console.log("드라이브");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  case "3":
                    console.log("등산");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  default:
                    console.log("올바른 선택지가 아닙니다.");
                }
                break;
              case "2":
                console.log("백수");
                q4 = prompt(`
                참여자의 취미를 입력해주세요
                1. 게임
                2. 드라이브
                3. 등산`);
                switch (q4) {
                  case "1":
                    console.log("게임");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  case "2":
                    console.log("드라이브");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  case "3":
                    console.log("등산");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  default:
                    console.log("올바른 선택지가 아닙니다.");
                }
                break;
              default:
                console.log("시키는 것만 하라고 쫌!!!");
            }
          case "3":
            console.log("그 외");
            q3 = prompt(`
            참여자의 직종을 입력해주세요
            1. 학생
            2. 백수`);
            switch (q3) {
              case "1":
                console.log("학생");
                q4 = prompt(`
                참여자의 취미를 입력해주세요
                1. 게임
                2. 드라이브
                3. 등산`);
                switch (q4) {
                  case "1":
                    console.log("게임");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  case "2":
                    console.log("드라이브");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  case "3":
                    console.log("등산");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  default:
                    console.log("올바른 선택지가 아닙니다.");
                }
                break;
              case "2":
                console.log("백수");
                q4 = prompt(`
                참여자의 취미를 입력해주세요
                1. 게임
                2. 드라이브
                3. 등산`);
                switch (q4) {
                  case "1":
                    console.log("게임");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  case "2":
                    console.log("드라이브");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  case "3":
                    console.log("등산");
                    q5 = prompt(`
                    참여자의 특기를 입력해주세요
                    1. 회초리
                    2. 코딩
                    3. 머리만 닿으면 잠들기`);
                    switch (q5) {
                      case "1":
                        console.log("회초리");
                        break;
                      case "2":
                        console.log("코딩");
                        break;
                      case "3":
                        console.log("머리만 닿으면 잠들기");
                        break;
                      default:
                        console.log("특기가 없다구요..? 흠..");
                    }
                    break;
                  default:
                    console.log("4번 질문 올바른 선택지가 아닙니다.");
                }
                break;
              default:
                console.log("3번 질문 시키는 것만 하라고 쫌!!!");
            }
            break;
          default:
            console.log("2번 질문 다시 고르세요.");
        }
    }
    break;
  default:
    console.log("안돼 돌아가.");
}
