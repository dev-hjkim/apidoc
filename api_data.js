define({ "api": [
  {
    "type": "post",
    "url": "/v1/auth/find/id",
    "title": "07.FindId",
    "name": "FindId",
    "group": "Auth",
    "description": "<p>아이디 찾기</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>핸드폰 번호('-' 제외)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"phone\": \"01012341234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>API 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>API 응답 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>API 응답 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj",
            "description": "<p>유저 정보를 담은 객체</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.email",
            "description": "<p>이메일 아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.pathCode",
            "description": "<p>가입경로 코드(01: 이메일 로그인, 현재는 01만 존재)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": \"AU002\",\n    \"message\": \"성공적으로 조회되었습니다.\",\n    \"obj\": {\n        \"email\": \"guswlsapdlf@naver.com\",\n        \"pathCode\": \"01\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "False-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"AU005\",\n    \"message\": \"조회 결과가 없습니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/AuthController.java",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://celebrity-back.herokuapp.com/v1/auth/find/id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/auth/find/password",
    "title": "08.FindPw",
    "name": "FindPw",
    "group": "Auth",
    "description": "<p>비밀번호 찾기</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일 아이디</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>핸드폰 번호('-' 제외)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"guswlsapdlf@naver.com\",\n    \"phone\": \"01012341234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>API 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>API 응답 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>API 응답 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj",
            "description": "<p>유저 정보를 담은 객체</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.email",
            "description": "<p>이메일 아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.pathCode",
            "description": "<p>가입경로 코드(01: 이메일 로그인, 현재는 01만 존재)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": \"AU002\",\n    \"message\": \"성공적으로 조회되었습니다.\",\n    \"obj\": {\n        \"email\": \"guswlsapdlf@naver.com\",\n        \"pathCode\": \"01\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "False-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"AU005\",\n    \"message\": \"조회 결과가 없습니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/AuthController.java",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://celebrity-back.herokuapp.com/v1/auth/find/password"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/auth/login",
    "title": "05.Login",
    "name": "Login",
    "group": "Auth",
    "description": "<p>로그인</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일 아이디</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>비밀번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"guswlsapdlf@naver.com\",\n    \"password\": \"asdf\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>API 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>API 응답 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>API 응답 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "obj",
            "description": "<p>유저 정보를 담은 객체</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.email",
            "description": "<p>이메일 아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.status",
            "description": "<p>유저 상태코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.accessToken",
            "description": "<p>access token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.refreshToken",
            "description": "<p>refresh token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.count",
            "description": "<p>비밀번호 오류 횟수</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": \"AU013\",\n    \"message\": \"로그인에 성공하였습니다.\",\n    \"obj\": {\n        \"email\": \"guswlsapdlf@naver.com\",\n        \"status\": \"0\",\n        \"accessToken\": (access token),\n        \"refreshToken\": (refresh token)\n    }\n}",
          "type": "json"
        },
        {
          "title": "False-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"AU014\",\n    \"message\": \"아이디 또는 비밀번호가 일치하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "False-Response2:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"AU015\",\n    \"message\": \"가입을 완료해주세요.\"\n}",
          "type": "json"
        },
        {
          "title": "False-Response3:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"AU016\",\n    \"message\": \"잠금되었거나 중지된 계정입니다.\"\n}",
          "type": "json"
        },
        {
          "title": "False-Response4:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"AU017\",\n    \"message\": \"로그인 5회 이상 오류로 계정이 잠금되었습니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/AuthController.java",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://celebrity-back.herokuapp.com/v1/auth/login"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/auth/logout",
    "title": "06.Logout",
    "name": "Logout",
    "group": "Auth",
    "description": "<p>로그아웃</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일 아이디</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"guswlsapdlf@naver.com\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/AuthController.java",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://celebrity-back.herokuapp.com/v1/auth/logout"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/auth/modify/password",
    "title": "09.ModifyPw",
    "name": "ModifyPw",
    "group": "Auth",
    "description": "<p>비밀번호 변경</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일 아이디</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>새 비밀번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"guswlsapdlf@naver.com\",\n    \"password\": \"asdf\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>API 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>API 응답 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>API 응답 메시지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": \"AU003\",\n    \"message\": \"성공적으로 수정되었습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "False-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"\",\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/AuthController.java",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://celebrity-back.herokuapp.com/v1/auth/modify/password"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/auth/refresh/token",
    "title": "10.RefreshToken",
    "name": "RefreshToken",
    "group": "Auth",
    "description": "<p>토큰 갱신</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일 아이디</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>refresh token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"guswlsapdlf@naver.com\",\n    \"accessToken\": \"(access token)\",\n    \"refreshToken\": \"(refresh token)\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>API 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>API 응답 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>API 응답 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj",
            "description": "<p>새로 생성된 토큰 정보를 담은 객체</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.accessToken",
            "description": "<p>새로 발급된 access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": \"AU018\",\n    \"message\": \"access token이 정상적으로 재발급되었습니다.\",\n    \"obj\": {\n        \"accessToken\": \"(access token)\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "False-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"AU019\",\n    \"message\": \"재로그인이 필요합니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/AuthController.java",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://celebrity-back.herokuapp.com/v1/auth/refresh/token"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/auth/signup",
    "title": "04.Signup",
    "name": "Signup",
    "group": "Auth",
    "description": "<p>회원가입</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일 아이디</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>비밀번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>별명</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>핸드폰 번호('-' 제외)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>성별(0: 남성 / 1: 여성)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthDate",
            "description": "<p>생년월일(YYYYMMDD)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mktYn",
            "description": "<p>마케팅 수신 동의 여부</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pathCode",
            "description": "<p>가입경로 코드(01: 이메일 로그인, 현재는 01만 존재)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"guswlsapdlf@naver.com\",\n    \"password\": \"asdf\",\n    \"nickname\": \"딸기\",\n    \"phone\": \"01012341234\",\n    \"gender\": \"1\",\n    \"birthday\": \"20220101\",\n    \"marketingYn\": \"N\",\n    \"pathCode\": \"01\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>API 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>API 응답 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>API 응답 메시지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": \"AU001\",\n    \"message\": \"성공적으로 등록되었습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "False-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"\",\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/AuthController.java",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://celebrity-back.herokuapp.com/v1/auth/signup"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/auth/validate/check/email",
    "title": "02.ValidateCheckEmail",
    "name": "ValidateCheckEmail",
    "group": "Auth",
    "description": "<p>이메일 인증하기</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일 아이디</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "certCode",
            "description": "<p>인증번호 10자리</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"guswlsapdlf@naver.com\",\n    \"certCode\": \"PRc2Cq8I04\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>API 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>API 응답 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>API 응답 메시지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": \"AU009\",\n    \"message\": \"이메일 인증에 성공하였습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "False-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"AU010\",\n    \"message\": \"이메일 인증에 실패하였습니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/AuthController.java",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://celebrity-back.herokuapp.com/v1/auth/validate/check/email"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/auth/validate/email",
    "title": "01.ValidateEmail",
    "name": "ValidateEmail",
    "group": "Auth",
    "description": "<p>이메일 유효성 체크 및 인증번호 전송</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일 아이디</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"guswlsapdlf@naver.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>API 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>API 응답 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>API 응답 메시지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": \"AU007\",\n    \"message\": \"인증번호를 발송하였습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "False-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"AU006\",\n    \"message\": \"이미 존재하는 아이디입니다.\"\n}",
          "type": "json"
        },
        {
          "title": "False-Response2:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"AU008\",\n    \"message\": \"인증번호 발송에 실패하였습니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/AuthController.java",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://celebrity-back.herokuapp.com/v1/auth/validate/email"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/auth/validate/nickname",
    "title": "03.ValidateNickname",
    "name": "ValidateNickname",
    "group": "Auth",
    "description": "<p>닉네임 중복체크</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>별명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"nickname\": \"딸기\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>API 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>API 응답 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>API 응답 메시지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": \"AU012\",\n    \"message\": \"사용 가능한 닉네임입니다.\"\n}",
          "type": "json"
        },
        {
          "title": "False-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"AU011\",\n    \"message\": \"이미 존재하는 닉네임입니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/AuthController.java",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://celebrity-back.herokuapp.com/v1/auth/validate/nickname"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/auth/survey/colors",
    "title": "01.GetColorList",
    "name": "GetColorList",
    "group": "Survey",
    "description": "<p>색깔 리스트 조회</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>API 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>API 응답 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>API 응답 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "obj",
            "description": "<p>색깔 정보를 담은 리스트 객체</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.colorCode",
            "description": "<p>색깔 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.colorHex",
            "description": "<p>16진수 색상코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.colorDesc",
            "description": "<p>색깔명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": \"SV002\",\n    \"message\": \"성공적으로 조회되었습니다.\",\n    \"obj\": [\n        {\n            \"colorCode\": \"C01\",\n            \"colorHex\": \"#FFF2DF\",\n            \"colorDesc\": \"크림\",\n        },\n        {\n            \"colorCode\": \"C02\",\n            \"colorHex\": \"#FFC8C8\",\n            \"colorDesc\": \"핑크\",\n        },\n        ...\n    ]\n}",
          "type": "json"
        },
        {
          "title": "False-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"SV005\",\n    \"message\": \"조회 결과가 없습니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/SurveyController.java",
    "groupTitle": "Survey",
    "sampleRequest": [
      {
        "url": "https://celebrity-back.herokuapp.com/v1/auth/survey/colors"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/auth/survey/regist",
    "title": "02.Regist",
    "name": "Regist",
    "group": "Survey",
    "description": "<p>설문결과 저장</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일 아이디</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skinCode",
            "description": "<p>피부톤 코드</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "height",
            "description": "<p>키</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "weight",
            "description": "<p>몸무게</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "colorCode1",
            "description": "<p>선호 색깔 코드 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "colorCode2",
            "description": "<p>선호 색깔 코드 2</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"asdf@naver.com\",\n    \"skinCode\": \"02\",\n    \"height\": 155,\n    \"weight\": 43,\n    \"colorCode1\": \"02\",\n    \"colorCode2\": \"11\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>API 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>API 응답 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>API 응답 메시지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": \"SV001\",\n    \"message\": \"성공적으로 등록되었습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "False-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"\",\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/SurveyController.java",
    "groupTitle": "Survey",
    "sampleRequest": [
      {
        "url": "https://celebrity-back.herokuapp.com/v1/auth/survey/regist"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/auth/survey/colors",
    "title": "01.GetColorList",
    "name": "GetColorList",
    "group": "Survey",
    "description": "<p>색깔 리스트 조회</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>API 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>API 응답 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>API 응답 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "obj",
            "description": "<p>색깔 정보를 담은 리스트 객체</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.colorCode",
            "description": "<p>색깔 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.colorHex",
            "description": "<p>16진수 색상코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.colorDesc",
            "description": "<p>색깔명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": \"SV002\",\n    \"message\": \"성공적으로 조회되었습니다.\",\n    \"obj\": [\n        {\n            \"colorCode\": \"C01\",\n            \"colorHex\": \"#FFF2DF\",\n            \"colorDesc\": \"크림\",\n        },\n        {\n            \"colorCode\": \"C02\",\n            \"colorHex\": \"#FFC8C8\",\n            \"colorDesc\": \"핑크\",\n        },\n        ...\n    ]\n}",
          "type": "json"
        },
        {
          "title": "False-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"SV005\",\n    \"message\": \"조회 결과가 없습니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/SurveyController.java",
    "groupTitle": "Survey",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/v1/auth/survey/colors"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/auth/survey/regist",
    "title": "02.Regist",
    "name": "Regist",
    "group": "Survey",
    "description": "<p>설문결과 저장</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일 아이디</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skinCode",
            "description": "<p>피부톤 코드</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "height",
            "description": "<p>키</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "weight",
            "description": "<p>몸무게</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "colorCode1",
            "description": "<p>선호 색깔 코드 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "colorCode2",
            "description": "<p>선호 색깔 코드 2</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"asdf@naver.com\",\n    \"skinCode\": \"02\",\n    \"height\": 155,\n    \"weight\": 43,\n    \"colorCode1\": \"02\",\n    \"colorCode2\": \"11\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>API 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>API 응답 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>API 응답 메시지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": \"SV001\",\n    \"message\": \"성공적으로 등록되었습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "False-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"code\": \"\",\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth/src/main/java/com/fashion/celebrity/auth/controller/SurveyController.java",
    "groupTitle": "Survey",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/v1/auth/survey/regist"
      }
    ]
  }
] });
