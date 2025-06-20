// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "홍길동",
  nickname: "H",
  birth: "1111-11-11",
  bio: "안녕하세요",
  location: "서울",
};

let user2: User = {
  id: 1,
  name: "이철수",
  nickname: "L",
  birth: "1111-11-11",
  bio: "안녕하세요",
  location: "부산",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  US: "us",
  UK: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 필수 프로퍼티 -> 인덱스 시그니처의 value 타입과 일치하거나 호환되는 것만 가능
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 1,
};
