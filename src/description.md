data.list.dt_txt 에 09:00:00가 포함되는 애들만 남기기

const filtered = data.list.filter( (item) => item.dt_txt.includes("09:00:00"));

아니다 일자 당 시간별로 나왔으면 좋겠다
그럼 2025-07-10를 포함하는? 하드코딩?
ㄴㄴ
그럼 나중에 시간 지나고 7/10 지나면 데이터 안 뜸.
시간이 지나도 그에 맞는 오늘날씨 내일날씨 모레날씨 글피 그글피가 나와야 되는데

그럼 일단 new Date로 오늘 날짜를 불러와서
그거랑 맞는 애를 오늘날씨
그거의 일자 +1 이 내일 날씨
이런 식으로 해봐야겠다

data.list.dt_txt



아래는 오늘9AM ~ 다음날6AM
const data =
{
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1752138000,
      "main": {
        "temp": 35.12,          
        "feels_like": 35.77,   
        "temp_min": 35.12,      
        "temp_max": 35.77,    
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1003,
        "humidity": 34,             
        "temp_kf": -0.65
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",        
          "description": "튼구름",      
          "icon": "04d"             
        }
      ],
      "clouds": {
        "all": 61
      },
      "wind": {
        "speed": 1.24,
        "deg": 113,
        "gust": 3.05
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-07-10 09:00:00"
    },                         
    {
      "dt": 1752148800,
      "main": {
        "temp": 31.64,
        "feels_like": 30.52,
        "temp_min": 30.06,
        "temp_max": 31.64,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1005,
        "humidity": 31,
        "temp_kf": 1.58
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "튼구름",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 63
      },
      "wind": {
        "speed": 3.84,
        "deg": 85,
        "gust": 8.45
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-07-10 12:00:00"
    },
    {
      "dt": 1752159600,
      "main": {
        "temp": 28.02,
        "feels_like": 27.37,
        "temp_min": 28.02,
        "temp_max": 28.02,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1005,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "온흐림",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.38,
        "deg": 75,
        "gust": 6.45
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-07-10 15:00:00"
    },
    {
      "dt": 1752170400,
      "main": {
        "temp": 26.38,
        "feels_like": 26.38,
        "temp_min": 26.38,
        "temp_max": 26.38,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1005,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "튼구름",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 77
      },
      "wind": {
        "speed": 2.09,
        "deg": 46,
        "gust": 4.48
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-07-10 18:00:00"
    },
    {
      "dt": 1752181200,
      "main": {
        "temp": 24.48,
        "feels_like": 24.34,
        "temp_min": 24.48,
        "temp_max": 24.48,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1006,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "튼구름",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 72
      },
      "wind": {
        "speed": 2.34,
        "deg": 55,
        "gust": 4.75
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-07-10 21:00:00"
    },
    {
      "dt": 1752192000,
      "main": {
        "temp": 28.9,
        "feels_like": 28.26,
        "temp_min": 28.9,
        "temp_max": 28.9,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1006,
        "humidity": 37,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "구름조금",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 3.18,
        "deg": 71,
        "gust": 6.17
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-07-11 00:00:00"
    },
    {
      "dt": 1752202800,
      "main": {
        "temp": 33.91,
        "feels_like": 32.69,
        "temp_min": 33.91,
        "temp_max": 33.91,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1006,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "맑음",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.15,
        "deg": 88,
        "gust": 5.08
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-07-11 03:00:00"
    },
    {
      "dt": 1752213600,
      "main": {
        "temp": 36.84,
        "feels_like": 35.38,
        "temp_min": 36.84,
        "temp_max": 36.84,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1003,
        "humidity": 21,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "맑음",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.54,
        "deg": 103,
        "gust": 3.95
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-07-11 06:00:00"
    }
  ]};
